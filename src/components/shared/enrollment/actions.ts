// actions.ts
"use server"; // Isso garante que a API Key não vaze para o navegador
import { Resend } from "resend";

const resend = new Resend(process.env.re_SJ9cj1YY_6wWtC4rVgXBvWA3iS4R8St47);

export async function sendLeadEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const data = await resend.emails.send({
      from: "Ponira Lab <poniralab@gmail.com>", // Use seu domínio verificado
      to: ["mulincorod@gmail.com"],
      subject: `Novo Lead: ${formData.name}`,
      html: `
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Mensagem:</strong> ${formData.message}</p>
      `,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
