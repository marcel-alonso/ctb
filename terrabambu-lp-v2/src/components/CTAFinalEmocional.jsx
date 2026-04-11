import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Heart } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { trackAndOpenWA, CONFIG } from "../config";
import { Button, Container, Badge } from "./base";

export default function CTAFinalEmocional() {
  return (
    <footer className="relative bg-[var(--bg)] pt-28 md:pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerSlow}
           className="px-6 flex flex-col items-center text-center"
        >
          {/* Badge — selo de confianca final */}
          <motion.div variants={fadeUpPremium} className="flex justify-center mb-8">
            <Badge
              icon={ShieldCheck}
              label="Presenca Nacional - Foco em Excelencia"
              variant="gold"
            />
          </motion.div>

          {/* Heading — ACOLHIMENTO puro */}
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-white"
          >
            Seu projeto em boas maos, <br className="hidden md:block" />
            <span className="text-[var(--accent)]">em qualquer lugar do Brasil.</span>
          </motion.h2>

          {/* Subtitle — convite, nao venda */}
          <motion.p
            variants={fadeUpPremium}
            className="text-center text-lg md:text-2xl text-[var(--text-muted)] mb-10 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Unimos agilidade digital com a forca de equipes de campo extremamente preparadas.{" "}
            <br className="hidden md:block" />
            <span className="text-white">De o primeiro passo para sua analise tecnica e orientacao personalizada.</span>
          </motion.p>

          {/* CTA — porta aberta, sem pressao */}
          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col items-center justify-center gap-5 mb-10"
          >
            <Button
              variant="primary"
              size="xl"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Final_CTA_Click')}
              className="w-full sm:w-auto shadow-2xl"
            >
              {CONFIG.wa.ctaFinal}
            </Button>

            {/* Micro-copy de seguranca — sem compromisso */}
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 font-bold">
              Sem compromisso - Resposta em ate 2 horas
            </p>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--accent)]" />
              <span>Equipes de Campo Proprias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--accent)]" />
              <span>Brasil e Interior de SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-[var(--accent)]" />
              <span>Satisfacao Garantida</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer bar */}
        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} Conexao Terra Bambu</p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
            <p>CNPJ: 54.340.235/0001-08</p>
          </div>
          <p className="text-center md:text-right">ATENDIMENTO NACIONAL - FOCO EM SP - ALPHAVILLE - INTERIOR</p>
        </div>
      </Container>
    </footer>
  );
}
