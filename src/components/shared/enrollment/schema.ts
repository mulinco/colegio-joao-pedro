import * as z from "zod";

export const contactFormSchema = z.object({
  parentName: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  studentName: z.string().min(2, "O nome do aluno é obrigatório"),
  grade: z.string().min(1, "Selecione uma série"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
