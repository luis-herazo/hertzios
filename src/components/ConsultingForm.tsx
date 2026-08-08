"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendConsultingRequest } from "@/actions/email";
import { Sparkles, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
    success: boolean;
    message: string;
}

const initialState: FormState = {
    success: false,
    message: "",
};

export default function ConsultingForm() {
    const [state, formAction, isPending] = useActionState(sendConsultingRequest, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();

            // Google Analytics Lead Event Tracking
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "generate_lead", {
                    event_category: "Engagement",
                    event_label: "Diagnostico Inicial Marcelo Garcia",
                    value: 1.0
                });
            }
        }
    }, [state.success]);

    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1e3d]/80 p-6 shadow-2xl backdrop-blur-md md:p-8">
            {/* Ambient background light */}
            <div className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

            <div className="mb-6 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 mb-2">
                    <Sparkles className="h-3 w-3" />
                    Diagnóstico Inicial Grato
                </div>
                <h3 className="text-2xl font-bold text-white">Agende su sesión</h3>
                <p className="text-sm text-slate-300 mt-1">
                    Complete el formulario y Marcelo García lo contactará en menos de 24 horas hábiles.
                </p>
            </div>

            {state.message && (
                <div 
                    className={`mb-6 flex items-start gap-3 rounded-lg p-4 text-sm font-medium animate-in ${
                        state.success 
                            ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" 
                            : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                    }`}
                >
                    {state.success ? (
                        <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-emerald-400" />
                    ) : (
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-400" />
                    )}
                    <div>{state.message}</div>
                </div>
            )}

            <form action={formAction} ref={formRef} className="space-y-4">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Nombre Completo *
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Ej. Juan Pérez"
                        required
                        autoComplete="name"
                        className="bg-white/5 border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-cyan-400 transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                            Correo Electrónico *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="juan@empresa.com"
                            required
                            autoComplete="email"
                            className="bg-white/5 border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-cyan-400 transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                            Teléfono de Contacto *
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Ej. +58 416 1234567"
                            required
                            autoComplete="tel"
                            className="bg-white/5 border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-cyan-400 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Empresa / Organización
                    </label>
                    <Input
                        id="company"
                        name="company"
                        placeholder="Nombre de su empresa"
                        className="bg-white/5 border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-cyan-400 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Principal Necesidad u Obstáculo *
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                        {[
                            { value: "Fugas de Inventario", label: "Fugas de Inventario & Pérdida de Activos" },
                            { value: "Desorganización de Datos", label: "Bases de Datos Desorganizadas / Sin Gobierno" },
                            { value: "Falta de KPIs", label: "Falta de KPIs & Tableros de Control Confiables" },
                            { value: "Otro", label: "Otro Caos Operativo / Procesos Ineficientes" },
                        ].map((option) => (
                            <label 
                                key={option.value}
                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 hover:border-cyan-400/50 transition-all"
                            >
                                <input 
                                    type="radio" 
                                    name="painPoint" 
                                    value={option.value} 
                                    required
                                    className="h-4 w-4 accent-cyan-400 border-white/20 bg-transparent text-cyan-400 focus:ring-offset-[#0d1e3d]" 
                                />
                                <span className="text-sm font-medium text-slate-200">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Cuéntenos brevemente la situación actual
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Ej. Tenemos diferencias constantes en los cierres de inventario físicos contra el sistema, o queremos estructurar nuestros datos gerenciales..."
                        rows={4}
                        className="resize-none bg-white/5 border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-cyan-400 transition-all"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 disabled:bg-cyan-800 disabled:text-slate-400 py-3 rounded-lg text-base shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                    {isPending ? "Procesando Solicitud..." : "Confirmar Mi Sesión Gratuita"}
                </Button>

                <p className="text-[10px] text-center text-slate-400 mt-2">
                    Sus datos están protegidos y solo serán utilizados para coordinar la sesión de diagnóstico inicial.
                </p>
            </form>
        </div>
    );
}
