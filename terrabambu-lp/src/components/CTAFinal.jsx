import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { trackAndOpenWA, CONFIG } from "../config";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function CTAFinal() {
    return (
        <footer className="bg-[var(--bg)] text-white pt-32 pb-12 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-black uppercase tracking-[0.2em]"
                    >
                        <ShieldCheck size={16} fill="currentColor" />
                        <span>Presença Nacional · Foco em Excelência</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        Seu projeto em boas mãos, <br className="hidden md:block" /> <span className="text-[var(--accent)]">em qualquer lugar do Brasil.</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl md:text-2xl text-[var(--text-muted)] mb-14 max-w-3xl mx-auto font-medium"
                    >
                        Unimos agilidade digital com a força de equipes de campo extremamente preparadas. <span className="text-white">Receba sua orientação técnica personalizada hoje mesmo.</span>
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 mb-24 w-full">
                        <button
                            onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Final_CTA_Click')}
                            className="group relative flex items-center justify-center gap-4 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-xl md:text-2xl font-black py-8 px-12 rounded-2xl transition-all duration-500 shadow-[0_20px_40px_rgba(126,200,80,0.3)] hover:shadow-[0_25px_50px_rgba(126,200,80,0.5)] transform hover:scale-105 active:scale-95 w-full md:w-auto"
                        >
                            {CONFIG.wa.ctaFinal}
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-black uppercase tracking-widest text-[var(--text-muted)] mt-4">
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Equipes de Campo Próprias</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[var(--accent)]" />Brasil e Interior de SP</div>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Brand Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    <div className="flex items-center gap-6">
                        <p>© {new Date().getFullYear()} Conexão Terra Bambu</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
                        <p>CNPJ: 54.340.235/0001-08</p>
                    </div>
                    <p>ATENDIMENTO NACIONAL · FOCO EM SP · ALPHAVILLE · INTERIOR</p>
                </div>
            </div>
        </footer>
    );
}
