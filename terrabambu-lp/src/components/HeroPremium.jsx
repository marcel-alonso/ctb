import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow, parallax } from "../shared/animations.premium";
import { trackAndOpenWA } from "../config";
import { MapPin } from "lucide-react";
import { Button, Badge, Section, Container } from "./base";
import ScrollIndicator from "./ScrollIndicator";
import heroImg from "@assets/images/hero-ultra-luxo.png";

export default function HeroPremium() {
  return (
    <Section variant="dark" className="min-h-screen flex items-center pt-0 overflow-hidden">
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={parallax}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={heroImg}
          alt="Área externa de luxo"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <Container className="relative z-20 text-center pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          className="flex flex-col items-center"
        >
          {/* Badge com ícone */}
          <motion.div variants={fadeUpPremium}>
            <Badge
              icon={MapPin}
              label="Atendimento em SP e todo Brasil"
              variant="light"
              className="mb-8"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpPremium}
            className="text-6xl md:text-7xl font-black leading-tight mb-6 text-white"
          >
            Design que respira, <br className="hidden md:block" />
            <span className="text-[var(--accent)]">natureza que acolhe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12"
          >
            Evolua sua área externa para o máximo conforto térmico com o toque artesanal do bambu premium.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUpPremium}>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                trackAndOpenWA("Olá! Vi o Hero v2 e gostaria de um orçamento.")
              }
              className="w-full md:w-auto"
            >
              SOLICITAR ORÇAMENTO GRÁTIS
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <ScrollIndicator color="white" label="Explorar Projetos" />
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
    </Section>
  );
}
