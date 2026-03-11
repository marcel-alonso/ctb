import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Camera, ClipboardCheck, CalendarCheck } from "lucide-react";

export default function ComoFunciona() {
    const steps = [
        {
            num: "1",
            title: "Você manda 2 fotos + medida",
            desc: "Nem precisa ser preciso — a gente ajuda a entender o espaço.",
            Icon: Camera
        },
        {
            num: "2",
            title: "Recebe orientação clara em até 12h úteis",
            desc: "Qual material, qual processo, qual custo. Direto ao ponto.",
            Icon: ClipboardCheck
        },
        {
            num: "3",
            title: "Combina e agenda a instalação",
            desc: "Planejamos juntos. Sem surpresa de prazo ou valor no meio da obra.",
            Icon: CalendarCheck
        }
    ];

    return (
        <section className="bg-[var(--bg)] py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                        Como funciona o <span className="text-[var(--accent)]">Orçamento Express</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg">
                        Descomplicamos o processo para você resolver seu problema rápido.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-[2px] bg-[var(--border)] -translate-x-1/2 hidden md:block" />

                    <motion.div
                        className="absolute left-6 md:left-[50%] top-0 bottom-0 w-[2px] bg-[var(--accent)] -translate-x-1/2 origin-top hidden md:block"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.num}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-80px" }}
                                    variants={fadeUp}
                                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Ponto / Número */}
                                    <div className="absolute left-0 md:left-[50%] md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-bold text-xl z-20 shadow-[0_0_20px_rgba(126,200,80,0.3)]">
                                        {step.num}
                                    </div>

                                    {/* Spacer for timeline centering */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 bg-[var(--surface)] p-8 rounded-2xl border border-white/5 pl-16 md:pl-8 ${isEven ? "md:text-right" : "md:text-left"
                                        }`}>
                                        <div className={`flex items-center gap-3 mb-4 w-full ${isEven ? 'md:justify-end' : ''}`}>
                                            <step.Icon className="text-[var(--gold)] md:hidden" size={24} />
                                            <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                                            <step.Icon className="text-[var(--gold)] hidden md:block text-right" size={28} />
                                        </div>
                                        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
