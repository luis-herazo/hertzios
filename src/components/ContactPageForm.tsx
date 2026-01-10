"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { sendEmail } from "@/actions/email";

interface EmailState {
    success: boolean;
    message: string;
}

const initialState: EmailState = {
    success: false,
    message: "",
};

export default function ContactPageForm() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <Card className="border-border/40 shadow-sm">
            <CardContent className="p-6">
                <form action={formAction} className="space-y-6">
                    {state.message && (
                        <div className={`p-4 rounded-md text-sm font-medium ${state.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                            {state.message}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Nombre
                            </label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Correo Electrónico
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="tu.email@ejemplo.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Asunto
                        </label>
                        <Input
                            id="subject"
                            name="subject"
                            placeholder="¿Sobre qué te gustaría hablar?"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Mensaje
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Describe tu proyecto o consulta aquí..."
                            rows={6}
                            required
                            className="resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        {isPending ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
