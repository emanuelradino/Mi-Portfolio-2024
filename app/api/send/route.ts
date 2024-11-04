// re_Q4q9K3v6_No8KTPKsSUurZxXA8ig9VH8c
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["emanuelradino1@gmail.com"],
        subject: "Radino Emanuel portfolio",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "RadinoEmanuel",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}