import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft } from "../shared/animations";
import { Compass, Ruler, Zap, Hammer, Leaf, PhoneCall } from "lucide-react";

export default function Autoridade() {
    const differentials = [
        {
            Title: "Diagnóstico honesto",
            Text: "Recomendamos só o que funciona pro seu caso",
            Icon: Compass
        },
        {
            Title: "Sob medida real",
            Text: "Nenhuma peça genérica. Tudo calculado pro seu espaço",
            Icon: Ruler
        },
        {
            Title: "Orçamento em 12h",
            Text: "Você envia fotos, a gente responde rápido",
            Icon: Zap
        },
        {
            Title: "Instalação com método",
            Text: "Equipe treinada, execução planejada, sem improviso",
            Icon: Hammer
        },
        {
            Title: "Material tratado",
            Text: "Bambu que dura (não o que apodreceu no vizinho)",
            Icon: Leaf
        },
        {
            Title: "Acompanhamento pós-obra",
            Text: "Não sumimos depois. Suporte real se precisar",
            Icon: PhoneCall
        }
    ];

    return (
        <section className="bg-[var(--bg-2)] border-y border-[var(--border)] py-24 px-6 relative overflow-hidden">

            {/* Decoração de fundo sutil */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                        Por que escolher a <span className="text-[var(--gold)]">Terra Bambu</span>?
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        Tratamos a sua casa com o respeito que ela merece. Sem bagunça, sem material descartável, com método de ponta a ponta.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {differentials.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={slideLeft}
                            className="bg-[var(--surface)] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-[var(--border)] transition-colors"
                        >
                            <div className="bg-[#0D1810] p-3 rounded-xl shadow-inner text-[var(--accent)] flex-shrink-0">
                                <item.Icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">{item.Title}</h4>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.Text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
