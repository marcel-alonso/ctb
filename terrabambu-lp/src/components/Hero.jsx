import { motion } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { CONFIG, trackAndOpenWA } from "../config";
import { MapPin } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background com Parallax Suave */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/lp/forros-bambu/assets/images/hero-ultra-luxo.png"
                    alt="Área externa de luxo com forro de bambu ultra-realista"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Conteúdo Central */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20 pb-12">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.div
                        variants={fadeIn}
                        className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest"
                    >
                        <MapPin size={14} className="text-[var(--accent)]" />
                        <span>Atendimento em SP e em todo o Brasil</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-7xl font-black leading-tight mb-6 text-white tracking-tight"
                    >
                        Cansado da sua área externa <br className="hidden md:block" />
                        <span className="text-[var(--accent)] text-shadow-lg">quente e mal aproveitada?</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-base md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                    >
                        Temos a solução ideal para transformar seu espaço em um refúgio fresco, elegante e extremamente confortável com o toque artesanal do bambu.
                    </motion.p>

                    <motion.div variants={fadeUp} className="w-full md:w-auto flex flex-col items-center">
                        <button
                            onClick={() => trackAndOpenWA("Olá! Vi o Hero do site e gostaria de um orçamento para meu projeto.")}
                            className="group relative w-full md:w-auto bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--bg)] px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all shadow-[0_15px_30px_rgba(126,200,80,0.3)] hover:scale-105 active:scale-95 uppercase tracking-wider"
                        >
                            SOLICITAR ORÇAMENTO GRÁTIS
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                <ScrollIndicator color="white" label="Explorar Projetos" />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
