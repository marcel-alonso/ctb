import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { CONFIG, trackAndOpenWA } from "../config";
import { CheckCircle2, ShieldCheck, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const bgY = useTransform(scrollYProgress, [0, 0.4], ["0%", "25%"]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 px-6">

            {/* Background Layer with Parallax */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/lp/forros-bambu/assets/images/hero-bambu.png"
                    alt="Área externa com forro de bambu de alto padrão"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center"
                initial="hidden"
                animate="visible"
                variants={stagger}
            >

                <motion.div
                    variants={fadeIn}
                    className="mb-6 flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest"
                >
                    <MapPin size={14} className="text-[var(--accent)]" />
                    <span>Atendimento em SP e em todo o Brasil</span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white tracking-tight"
                >
                    Excelência em Execução: <br />
                    <span className="text-[var(--accent)]">Inspirando novos momentos ao ar livre</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    Cada projeto é uma peça única, desenhada para se integrar harmonicamente à sua arquitetura e ao seu estilo de vida.
                </motion.p>

                {/* Action Button */}
                <motion.div
                    variants={fadeUp}
                    className="w-full flex flex-col items-center gap-6"
                >
                    <button
                        onClick={() => trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_CTA_Click')}
                        className="group relative flex items-center justify-center gap-4 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-xl md:text-2xl font-black py-8 px-12 rounded-2xl transition-all duration-500 shadow-[0_20px_40px_rgba(126,200,80,0.3)] hover:shadow-[0_25px_50px_rgba(126,200,80,0.5)] transform hover:scale-105 active:scale-95 w-full md:w-auto"
                        style={{ animation: "ctaPulse 3s infinite" }}
                    >
                        {CONFIG.wa.ctaHero}
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-[var(--text-muted)] font-bold">
                        <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Suporte Técnico Digital</div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Equipes de Campo Próprias</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
