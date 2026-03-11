import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, slideRight } from "../shared/animations";
import { XCircle, CheckCircle2, ShieldCheck, Ruler, Clock, Hammer, Leaf, PhoneCall } from "lucide-react";

export default function DorResolucao() {
    const differentials = [
        {
            icon: <ShieldCheck size={28} className="text-[var(--accent)]" />,
            title: "Diagnóstico honesto",
            desc: "Recomendamos só o que funciona pro seu caso."
        },
        {
            icon: <Ruler size={28} className="text-[var(--accent)]" />,
            title: "Sob medida real",
            desc: "Nenhuma peça genérica. Tudo calculado pro seu espaço."
        },
        {
            icon: <Clock size={28} className="text-[var(--accent)]" />,
            title: "Orçamento em 12h",
            desc: "Você envia fotos, a gente responde rápido."
        },
        {
            icon: <Hammer size={28} className="text-[var(--accent)]" />,
            title: "Instalação com método",
            desc: "Equipe treinada, execução planejada, sem improviso."
        },
        {
            icon: <Leaf size={28} className="text-[var(--accent)]" />,
            title: "Material premium tratado",
            desc: "Bambu que dura (não o que apodreceu no vizinho)."
        },
        {
            icon: <PhoneCall size={28} className="text-[var(--accent)]" />,
            title: "Acompanhamento pós-obra",
            desc: "Não sumimos depois. Suporte real se precisar."
        }
    ];

    return (
        <section className="py-24 bg-[var(--bg)] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        O medo da dor de cabeça <br className="hidden md:block" /> não precisa adiar seu projeto.
                    </h2>
                    <p className="text-lg text-[var(--text-muted)]">
                        Sabemos que entrar em uma "obra" gera ansiedade. Por isso, criamos um
                        método focado em paz de espírito do início ao fim.
                    </p>
                </motion.div>

                {/* Dor vs Resolução */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
                    {/* The Pain */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="bg-red-950/20 border border-red-900/30 p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-3">
                            <XCircle size={24} />
                            O padrão do mercado
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/70">
                                <span className="mt-1 text-red-500/70">✕</span>
                                <div><strong className="text-white/90">Preço surpresa.</strong> O orçamento inicial dobra no meio da instalação.</div>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <span className="mt-1 text-red-500/70">✕</span>
                                <div><strong className="text-white/90">Bagunça infinita.</strong> Sem planejamento, a casa fica suja por semanas.</div>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <span className="mt-1 text-red-500/70">✕</span>
                                <div><strong className="text-white/90">Bambu não tratado.</strong> Em 6 meses, brocas e mofo destroem sua área externa.</div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* The Resolution */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="bg-[#7EC850]/10 border border-[#7EC850]/20 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#7EC850]/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="text-xl font-bold text-[var(--accent)] mb-6 flex items-center gap-3 relative z-10">
                            <CheckCircle2 size={24} />
                            O Método Terra Bambu
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 size={20} className="mt-1 text-[var(--accent)] shrink-0" />
                                <div><strong className="text-white">Transparência total.</strong> Valores definidos antes de começar, sem adicionais mágicos.</div>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 size={20} className="mt-1 text-[var(--accent)] shrink-0" />
                                <div><strong className="text-white">Instalação clínica.</strong> Método pensado para ser rápido, limpo e respeitoso com sua rotina.</div>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 size={20} className="mt-1 text-[var(--accent)] shrink-0" />
                                <div><strong className="text-white">Tratamento Premium.</strong> Proteção real contra pragas para durabilidade estendida.</div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* 6 Diferenciais de Autoridade */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {differentials.map((diff, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-xl flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#7EC850]/10 flex items-center justify-center">
                                {diff.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white mb-2">{diff.title}</h4>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{diff.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
