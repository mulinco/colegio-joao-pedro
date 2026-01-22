import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "./schema";

export function useLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Aqui você vai trocar pelo seu fetch para /api/enroll amanhã!
      console.log("Dados enviados para o n8n:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/thanks");
    } catch (error) {
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    isSubmitting,
  };
}
