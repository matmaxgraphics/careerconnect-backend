import { Resend } from "resend";

export const sendEmail = async ({ name, phone }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Mateen <onboarding@resend.dev>",
    to: process.env.RECEIVER_EMAIL,
    subject: "New Contact Form Submission",
    html: `<h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    `,
  });
};
