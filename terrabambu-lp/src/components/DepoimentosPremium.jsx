import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card } from "./base";

const testimonials = [
  {
    name: "Ricardo S.",
    location: "Alphaville",
    rating: 5,
    text: "O conforto térmico mudou completamente nossa varanda. Além de lindo, o atendimento foi impecável.",
    avatar: "👤"
  },
  {
    name: "Mariana L.",
    location: "Interior de SP",
    rating: 5,
    text: "Equipe extremamente limpa e rápida. O bambu trançado deu o toque de luxo que faltava no nosso spa.",
    avatar: "👤"
  },
  {
    name: "André M.",
    location: "São Paulo, SP",
    rating: 5,
    text: "Superou as expectativas. O acabamento artesanal é diferenciado. Vale cada centavo.",
    avatar: "👤"
  }
];

export default function DepoimentosPremium() {
  return (
    <Section variant="dark" className="overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="text-center mb-16 relative"
        >
          <motion.div 
            variants={fadeUpPremium}
            className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 text-[var(--accent)]"
          >
            <Quote size={120} />
          </motion.div>
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            O que dizem nossos <span className="text-[var(--accent)]">clientes</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card interactive elevated className="flex flex-col h-full p-10 bg-white/[0.02]">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[var(--gold)] text-[var(--gold)]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg text-white mb-8 flex-1 italic leading-relaxed">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-2xl grayscale">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{t.name}</p>
                    <p className="text-sm text-[var(--text-muted)] font-medium">
                      {t.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(126,200,80,0.05),transparent_50%)] pointer-events-none" />
    </Section>
  );
}
