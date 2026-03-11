import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { waURL, CONFIG } from "../config";
import { CheckCircle2 } from "lucide-react";

export default function CTAFinal() {
    return (
        <footer className="bg-[var(--bg)] text-white pt-24 pb-8 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Sua área externa pode ser diferente. E pode ser rápido.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
                    >
                        Manda 2 fotos + medida aproximada. Em até 12h úteis: orientação
                        clara e preço justo.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex justify-center mb-16">
                        <a
                            href={waURL(CONFIG.wa.msgFinal)}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-xl font-bold py-5 px-10 rounded-full transition-all duration-300 w-full md:w-auto"
                            style={{ animation: "ctaPulse 3s infinite" }}
                        >
                            {CONFIG.wa.ctaFinal}
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[var(--text-muted)] font-medium mb-24"
                    >
                        <div className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Sem compromisso de compra</div>
                        <div className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Resposta em até 12h úteis</div>
                        <div className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Material natural — sem cara de plástico</div>
                        <div className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Instalação profissional com método</div>
                    </motion.div>

                </motion.div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)]">
                    <p>© {new Date().getFullYear()} Conexão Terra Bambu. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Atendimento: Barueri · Alphaville · Grande SP · Interior SP</p>
                </div>
            </div>
        </footer>
    );
}
