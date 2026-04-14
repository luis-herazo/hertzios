"use server";

import nodemailer from "nodemailer";

interface EmailState {
    success: boolean;
    message: string;
}

export async function sendEmail(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const subject = (formData.get("subject") as string) || `Nuevo mensaje de contacto de ${name}`;

    if (!name || !email || !message) {
        return { success: false, message: "Por favor completa todos los campos requeridos." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL || `"Hertzios Contacto" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO,
            subject: subject,
            text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje:
        ${message}
      `,
            html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto." };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Hubo un error al enviar el mensaje. Por favor intenta nuevamente." };
    }
}
