import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { CONFIG, waURL } from "../config";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const bgY = useTransform(scrollYProgress, [0, 0.4], ["0%", "25%"]);

    const headline = "Cansado da sua área externa quente e mal aproveitada?";
    const words = headline.split(" ");

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 px-6">
            {/* Background Parallax */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[var(--bg)] pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Badge */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="mb-8 inline-block px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] text-sm font-medium tracking-wide"
                >
                    ⚡ Orçamento Express em até 12h úteis
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white"
                >
                    {words.map((word, i) => (
                        <motion.span key={i} className="inline-block mr-[0.22em]"
                            variants={{
                                hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
                                visible: {
                                    opacity: 1, y: 0, filter: "blur(0px)",
                                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}>
                            {word}
                        </motion.span>
                    ))}
                    <motion.div variants={fadeUp} className="text-[var(--gold)] mt-2">
                        Temos a solução ideal.
                    </motion.div>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Forro de bambu sob medida transforma área esquecida em espaço que você
                    usa todo dia — com sombra real, estilo natural e instalação profissional.
                </motion.p>

                {/* CTA Area */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-4 w-full"
                >
                    <a
                        href={waURL(CONFIG.wa.msgHero)}
                        target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto overflow-hidden relative"
                        style={{ animation: "ctaPulse 3s infinite" }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {CONFIG.wa.ctaHero}
                        </span>
                    </a>

                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-2">
                        <CheckCircle2 size={16} className="text-[var(--accent)]" />
                        <span>Sem compromisso · Resposta em até 12h úteis · Sob medida</span>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="mt-16 flex items-center gap-3 text-sm font-medium text-white/80"
                >
                    <span className="text-[var(--gold)] text-lg tracking-widest">⭐⭐⭐⭐⭐</span>
                    <span>+200 projetos realizados em SP</span>
                </motion.div>
            </div>
        </section>
    );
}
