import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Camera, ClipboardCheck, CalendarCheck, ArrowRight } from "lucide-react";

export default function ComoFunciona() {
    const steps = [
        {
            num: "01",
            title: "Snapshot Instantâneo",
            desc: "Você nos envia apenas 2 fotos do espaço e uma medida aproximada. Sem burocracia, sem visitas demoradas agora.",
            Icon: Camera,
            Detail: "Direto pelo WhatsApp"
        },
        {
            num: "02",
            title: "Orientação Estratégica",
            desc: "Em até 12h úteis, você recebe um diagnóstico completo: material ideal, processo de obra e o valor exato.",
            Icon: ClipboardCheck,
            Detail: "Transparência total"
        },
        {
            num: "03",
            title: "Execução Master",
            desc: "Agendamos a instalação. Nossa equipe entra, transforma seu espaço com método e sai deixando tudo limpo.",
            Icon: CalendarCheck,
            Detail: "Rapidez e Limpeza"
        }
    ];

    return (
        <section className="bg-[var(--bg)] py-32 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-28"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest mb-6"
                    >
                        Método Ágil
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">
                        Do sonho ao projeto em <br className="hidden md:block" /> <span className="text-[var(--accent)]">tempo recorde</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto font-medium">
                        Eliminamos a complicação das obras tradicionais. Nosso processo é 100% focado em entregar resultado com o mínimo de atrito possível.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Decorative Arrow for Desktop */}
                    <div className="hidden md:block absolute top-1/4 left-1/3 w-1/6 border-t-2 border-dashed border-white/10 z-0" />
                    <div className="hidden md:block absolute top-1/4 left-2/3 w-1/6 border-t-2 border-dashed border-white/10 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                            className="group relative flex flex-col items-center text-center p-10 bg-[var(--bg-2)] border border-white/5 rounded-[2.5rem] hover:border-[var(--accent)]/30 transition-all duration-500 shadow-2xl"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-[var(--accent)]/20 rotate-3 group-hover:rotate-0 transition-transform">
                                {step.num}
                            </div>

                            <div className="mb-8 mt-4 text-[var(--gold)]">
                                <step.Icon size={48} strokeWidth={1.2} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6 font-medium">
                                {step.desc}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.2em]">
                                    {step.Detail}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
