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

export async function sendConsultingRequest(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const painPoint = formData.get("painPoint") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !painPoint) {
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

        // Recipient is Marcelo García
        const primaryRecipient = "mgarcia845@gmail.com";
        // Also send copy to Hertzios if EMAIL_TO is set
        const ccRecipient = process.env.EMAIL_TO || "";

        const mailOptions = {
            from: `"${fromName}" <${fromEmail}>`,
            to: primaryRecipient,
            cc: ccRecipient && ccRecipient !== primaryRecipient ? ccRecipient : undefined,
            subject: `Sesión de Diagnóstico Inicial: ${name} - ${company || 'Particular'}`,
            text: `
        Nueva Solicitud de Diagnóstico Inicial (Consultoría TI & Operaciones)
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Empresa: ${company || 'No especificada'}
        Dolor Principal: ${painPoint}
        
        Detalles / Mensaje:
        ${message || 'Sin comentarios adicionales.'}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #298CEE; border-bottom: 2px solid #298CEE; padding-bottom: 10px;">Solicitud de Sesión de Diagnóstico Inicial</h2>
            <p><strong>Consultor:</strong> Marcelo García</p>
            <p><strong>Nombre del Lead:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Dolor Operativo Principal:</strong> <span style="background-color: #e6f4ea; color: #137333; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${painPoint}</span></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Detalles adicionales:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #298CEE;">${(message || 'Sin comentarios adicionales.').replace(/\n/g, "<br>")}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: "¡Solicitud enviada con éxito! Marcelo García se pondrá en contacto contigo pronto para agendar tu diagnóstico." };
    } catch (error) {
        console.error("Error sending consulting request email:", error);
        return { success: false, message: "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos por WhatsApp." };
    }
}

export async function sendLuisConsultingRequest(prevState: EmailState, formData: FormData): Promise<EmailState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !projectType) {
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

        // Recipient is Luis Herazo
        const primaryRecipient = "luis.herazo.c@gmail.com";
        // Also send copy to Hertzios if EMAIL_TO is set
        const ccRecipient = process.env.EMAIL_TO || "";

        const mailOptions = {
            from: `"${fromName}" <${fromEmail}>`,
            to: primaryRecipient,
            cc: ccRecipient && ccRecipient !== primaryRecipient ? ccRecipient : undefined,
            subject: `Sesión Estratégica: ${name} - ${company || 'Particular'}`,
            text: `
        Nueva Solicitud de Sesión Estratégica (Luis Herazo - CEO)
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Empresa: ${company || 'No especificada'}
        Tipo de Proyecto / Servicio: ${projectType}
        
        Detalles / Mensaje:
        ${message || 'Sin comentarios adicionales.'}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #F24659; border-bottom: 2px solid #F24659; padding-bottom: 10px;">Solicitud de Sesión Estratégica - Luis Herazo</h2>
            <p><strong>Nombre del Lead:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Tipo de Proyecto:</strong> <span style="background-color: #fce8e6; color: #c5221f; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${projectType}</span></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Detalles adicionales:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #F24659;">${(message || 'Sin comentarios adicionales.').replace(/\n/g, "<br>")}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: "¡Solicitud enviada con éxito! Luis Herazo se pondrá en contacto contigo pronto para agendar tu sesión." };
    } catch (error) {
        console.error("Error sending Luis consulting request email:", error);
        return { success: false, message: "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos por WhatsApp." };
    }
}


