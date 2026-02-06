import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldErrors } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { sendLeadEmail } from "./actions";

const VALID_DDDS = new Set([
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "21",
  "22",
  "24",
  "27",
  "28",
  "31",
  "32",
  "33",
  "34",
  "35",
  "37",
  "38",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "51",
  "53",
  "54",
  "55",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "71",
  "73",
  "74",
  "75",
  "77",
  "79",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
]);

const fullNameValidation = z
  .string()
  .trim()
  .refine((val) => val.split(/\s+/).filter(Boolean).length >= 2, {
    message: "Insira nome e sobrenome",
  });

const leadSchema = z.object({
  parentName: fullNameValidation,
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  studentName: z.string().optional().or(z.literal("")),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 11, {
      message: "Número deve ter 11 dígitos",
    })
    .refine((val) => VALID_DDDS.has(val.substring(0, 2)), {
      message: "DDD inválido",
    })
    .refine((val) => val[2] === "9", { message: "Comece com 9" }),
  grade: z.string().min(1, "Selecione a série"),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export function useLeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      // 1. Envio para o Resend via Server Action
      const mailResult = await sendLeadEmail({
        name: data.parentName,
        email: data.email || "Não informado",
        message: `Estudante: ${data.studentName} | Série: ${data.grade} | WhatsApp: ${data.phone}`,
      });

      if (!mailResult.success) {
        console.warn("Resend falhou, mas seguindo com GAS...");
      }

      // 2. Envio para o Google Apps Script (GAS)
      const GAS_URL =
        "https://script.google.com/macros/s/AKfycbx-uya62GwxQv8kMr07jrsWTdgob0EIyd5XIyth4GxU9NbGMscXdTUvii-kKLYSFFcK-g/exec";

      const payload = {
        nome: data.parentName,
        whatsapp: data.phone,
        serie: data.grade,
        email: data.email || "Não informado",
        aluno: data.studentName || "Não informado",
      };

      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("ERRO NA AUTOMAÇÃO PONIRA LAB:", error);
    }
  };

  const onError = (err: FieldErrors<LeadFormData>) => {
    console.error("ERRO DE VALIDAÇÃO:", err);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit, onError),
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  };
}
