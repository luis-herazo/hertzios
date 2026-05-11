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

        const fromName = process.env.EMAIL_FROM_NAME || "Hertzios";
        const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

        const mailOptions = {
            from: `"${fromName}" <${fromEmail}>`,
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

export async function sendBudget(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const budget = formData.get("budget") as string;

    if (!name || !email || !description || !service) {
        return { success: false, message: "Por favor completa todos los campos requeridos." };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const fromName = process.env.EMAIL_FROM_NAME || "Hertzios";
        const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

        const mailOptions = {
            from: `"${fromName}" <${fromEmail}>`,
            to: process.env.EMAIL_TO,
            subject: `Nueva Solicitud de Presupuesto: ${service} - ${name}`,
            text: `
        Nombre: ${name}
        Email: ${email}
        Servicio: ${service}
        Presupuesto estimado: ${budget || 'No especificado'}
        Descripción:
        ${description}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #F24659; border-bottom: 2px solid #F24659; padding-bottom: 10px;">Nueva Solicitud de Presupuesto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Servicio:</strong> ${service}</p>
            <p><strong>Presupuesto estimado:</strong> ${budget || 'No especificado'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Descripción del Proyecto:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #F24659;">${description.replace(/\n/g, "<br>")}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: "¡Solicitud enviada con éxito! Te contactaremos pronto con tu presupuesto." };
    } catch (error) {
        console.error("Error sending budget email:", error);
        return { success: false, message: "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente." };
    }
}
