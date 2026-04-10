import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { trackAndOpenWA, CONFIG } from "../config";
import { Button, Section, Container, Badge } from "./base";

export default function CTAFinalPremium() {
  return (
    <footer className="relative bg-[var(--bg)] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Dynamic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerSlow}
           className="px-6"
        >
          {/* Badge */}
          <motion.div variants={fadeUpPremium} className="flex justify-center mb-8">
            <Badge 
              icon={ShieldCheck} 
              label="Presença Nacional · Foco em Excelência" 
              variant="gold" 
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-white"
          >
            Seu projeto em boas mãos, <br className="hidden md:block" /> 
            <span className="text-[var(--accent)]">em qualquer lugar do Brasil.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpPremium}
            className="text-center text-xl md:text-2xl text-[var(--text-muted)] mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Unimos agilidade digital com a força de equipes de campo extremamente preparadas. <br className="hidden md:block" />
            <span className="text-white"> Dê o primeiro passo para sua análise técnica e orientação personalizada.</span>
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div 
            variants={fadeUpPremium} 
            className="flex flex-col items-center justify-center gap-8 mb-24"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Final_CTA_Click')}
              className="w-full md:w-auto shadow-2xl py-6 px-12 text-lg"
            >
              {CONFIG.wa.ctaFinal}
            </Button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[var(--accent)]" /> 
                  <span>Equipes de Campo Próprias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[var(--accent)]" /> 
                  <span>Brasil e Interior de SP</span>
                </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Brand Bar / Footer Bottom */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {new Date().getFullYear()} Conexão Terra Bambu</p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
            <p>CNPJ: 54.340.235/0001-08</p>
          </div>
          <p className="text-center md:text-right">ATENDIMENTO NACIONAL · FOCO EM SP · ALPHAVILLE · INTERIOR</p>
        </div>
      </Container>
    </footer>
  );
}
