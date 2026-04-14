import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow, parallax } from "../shared/animations.premium";
import { trackAndOpenWA } from "../config";
import { MapPin } from "lucide-react";
import { Button, Badge, Section, Container } from "./base";
import ScrollIndicator from "./ScrollIndicator";
import heroImg from "@assets/images/hero-ultra-luxo.webp";

export default function HeroEmocional() {
  return (
    <Section variant="dark" className="min-h-screen flex items-center !pt-0 overflow-hidden">
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={parallax}
      >
        <div className="absolute inset-0 bg-black/55 z-10" />
        <img
          src={heroImg}
          alt="Ambiente externo acolhedor com bambu"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
      </motion.div>

      {/* Content — mobile-first: compact subtitle, generous CTA area */}
      <Container className="relative z-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          {/* Badge — primeira semente de confiança */}
          <motion.div variants={fadeUpPremium}>
            <Badge
              icon={MapPin}
              label="Atendimento em Todo o Brasil"
              variant="light"
              className="mb-8"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.08] mb-3 text-white tracking-tighter"
          >
            REVESTIMENTOS DE BAMBU
          </motion.h1>
          <motion.p
            variants={fadeUpPremium}
            className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 tracking-tight"
          >
            <span className="text-[var(--accent)] drop-shadow-md">Conforto térmico e design orgânico</span>
          </motion.p>

          {/* Subtitle — mobile: mais compacto, desktop: completo */}
          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Evolua sua área externa para o máximo conforto térmico{" "}
            <br className="hidden md:block" />
            com o toque artesanal do bambu premium.
          </motion.p>

          {/* CTA — porta aberta, sem pressão */}
          <motion.div variants={fadeUpPremium} className="flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                trackAndOpenWA("Olá! Vi o site e gostaria de um orçamento para forros de bambu.")
              }
              className="w-full sm:w-auto shadow-2xl"
            >
              SOLICITAR ORÇAMENTO GRÁTIS
            </Button>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
              Sem compromisso - Resposta em poucas horas
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator — convida a descer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <ScrollIndicator color="white" label="Conheça Nosso Trabalho" />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
    </Section>
  );
}
