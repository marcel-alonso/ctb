import { motion } from "framer-motion";
import { Award, Zap, Shield, CheckCircle2 } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card, Grid } from "./base";

const autoridades = [
  {
    icon: Award,
    title: "10+ Anos no Mercado",
    desc: "Referência nacional em projetos sustentáveis com bambu tratado."
  },
  {
    icon: Zap,
    title: "+3.000m² Transformados",
    desc: "Histórico sólido de execução impecável em áreas internas e externas."
  },
  {
    icon: Shield,
    title: "10 Anos de Garantia",
    desc: "Segurança total no material e na durabilidade da instalação."
  }
];

export default function AutoridadePremium() {
  return (
    <Section variant="gradient">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpPremium} className="flex justify-center mb-4 text-[var(--gold)]">
             <CheckCircle2 size={32} />
          </motion.div>
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            O Padrão <span className="text-[var(--accent)]">Terra Bambu</span>
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            Unimos o conhecimento artesanal com técnicas modernas de engenharia para resultados extraordinários.
          </motion.p>
        </motion.div>

        <Grid cols={{ default: 1, md: 3 }} gap="gap-8">
          {autoridades.map((item) => (
            <motion.div 
              key={item.title} 
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card interactive elevated className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-8 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />
    </Section>
  );
}
