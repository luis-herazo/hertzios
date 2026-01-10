"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/email";

interface EmailState {
    success: boolean;
    message: string;
}

const initialState: EmailState = {
    success: false,
    message: "",
};

export default function HomeContactForm() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <form action={formAction} className="space-y-4">
            {state.message && (
                <div className={`p-4 rounded-md text-sm font-medium ${state.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {state.message}
                </div>
            )}

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tu nombre
                </label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    required
                    className="bg-white/10 border-white/20 focus:bg-white/20"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tu email
                </label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-white/10 border-white/20 focus:bg-white/20"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tu mensaje
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí"
                    required
                    className="h-32 bg-white/10 border-white/20 focus:bg-white/20"
                />
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="w-full text-white hover:bg-primary/80"
            >
                {isPending ? "Enviando..." : "Enviar mensaje"}
            </Button>
        </form>
    );
}
