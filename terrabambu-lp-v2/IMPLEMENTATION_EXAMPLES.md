# 🎯 Exemplos de Implementação - Premium Design System

Guia prático com exemplos de código para implementar a skill premium em cada seção.

---

## 1️⃣ Refatorar Hero

### Arquivo Original
`src/components/Hero.jsx`

### Versão Premium Refatorada
```jsx
import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow, parallax } from "../shared/animations.premium";
import { CONFIG, trackAndOpenWA } from "../config";
import { MapPin } from "lucide-react";
import { Button, Badge, Section, Container } from "./base";
import ScrollIndicator from "./ScrollIndicator";
import heroImg from "@assets/images/hero-ultra-luxo.png";

export default function HeroPremium() {
  return (
    <Section variant="dark" className="min-h-screen flex items-center">
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
      <Container className="relative z-20 text-center pt-20 pb-48 md:pb-12">
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
            className="text-lg md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10"
          >
            Evolua sua área externa para máximo conforto térmico.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUpPremium}>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                trackAndOpenWA("Olá! Vi o Hero e gostaria de orçamento.")
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
```

---

## 2️⃣ Refatorar Solução

Veja `src/components/SolucaoPremium.jsx` (já criado)

**Highlights:**
- ✅ Componentes base reutilizáveis
- ✅ Animações premium `fadeUpPremium` + `staggerSlow`
- ✅ Cards com hover effects
- ✅ Badges com variantes
- ✅ Buttons com múltiplas variantes

---

## 3️⃣ Refatorar Autoridade

### Versão Premium
```jsx
import { motion } from "framer-motion";
import { Award, Zap, Shield } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card, Grid } from "./base";

const autoridades = [
  {
    icon: Award,
    title: "10+ Anos de Experiência",
    desc: "Especialistas em bambu premium com histórico comprovado"
  },
  {
    icon: Zap,
    title: "1.000+ Projetos Executados",
    desc: "Desde residências até comerciais de alta complexidade"
  },
  {
    icon: Shield,
    title: "Garantia de 5 Anos",
    desc: "Cobertura completa em material e mão de obra"
  }
];

export default function AutoridadePremium() {
  return (
    <Section variant="gradient">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Nossa Autoridade no Mercado
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            Somos referência em qualidade e inovação
          </motion.p>
        </motion.div>

        <Grid cols={{ default: 1, md: 3 }} gap="gap-8">
          {autoridades.map((item) => (
            <motion.div key={item.title} variants={fadeUpPremium}>
              <Card interactive elevated>
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6 text-[var(--accent)]">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
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
    </Section>
  );
}
```

---

## 4️⃣ Refatorar Depoimentos

### Versão Premium
```jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card } from "./base";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Transformou completamente minha varanda. O conforto térmico é incrível!",
    avatar: "👨‍💼"
  },
  {
    name: "Mariana Costa",
    location: "Guarujá, SP",
    rating: 5,
    text: "Qualidade premium, equipe profissional, entrega perfeita.",
    avatar: "👩‍💼"
  },
  {
    name: "Roberto Alves",
    location: "Campinas, SP",
    rating: 5,
    text: "Melhor investimento que fizemos na casa. Recomendo!",
    avatar: "👨‍💼"
  }
];

export default function DepoimentosPremium() {
  return (
    <Section variant="dark">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            O que nossos clientes dizem
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card interactive elevated className="flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--gold)] text-[var(--gold)]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white mb-6 flex-1 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{t.avatar}</div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {t.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

---

## 5️⃣ Refatorar FAQ

### Versão Premium
```jsx
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container } from "./base";

const faqs = [
  {
    q: "Qual é o tempo de instalação?",
    a: "A instalação leva entre 2 a 5 dias, dependendo do tamanho."
  },
  {
    q: "O bambu é resistente?",
    a: "Sim! Nosso bambu é tratado e certificado para durar 20+ anos."
  },
  {
    q: "Vocês fazem projetos personalizados?",
    a: "Claro! Cada projeto é customizado para suas necessidades."
  }
];

export default function FAQPremium() {
  const [open, setOpen] = useState(0);

  return (
    <Section variant="light" className="text-[var(--text-dark)]">
      <Container size="sm">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="text-5xl md:text-6xl font-black text-center mb-12"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full bg-white/80 hover:bg-white rounded-2xl px-6 py-4 transition-all flex items-center justify-between border border-[var(--accent)]/20"
              >
                <span className="font-bold text-left">{item.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white/50 px-6 py-4 rounded-b-2xl"
                  >
                    <p className="text-[var(--text-dark)]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

---

## 6️⃣ Refatorar CTA Final

### Versão Premium
```jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Button, Section, Container } from "./base";
import { CONFIG, trackAndOpenWA } from "../config";

export default function CTAFinalPremium() {
  return (
    <Section variant="dark">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="relative rounded-3xl overflow-hidden p-16 md:p-24"
        >
          {/* Gradient BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--gold)]/10 border border-[var(--accent)]/30 rounded-3xl" />

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--accent)]/20 rounded-full blur-[100px]" />

          {/* Content */}
          <motion.div
            className="relative z-10 text-center max-w-3xl mx-auto"
            variants={staggerSlow}
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-5xl md:text-6xl font-black text-white mb-6"
            >
              Pronto para transformar sua área?
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-xl text-[var(--text-muted)] mb-12"
            >
              Solicite uma análise técnica gratuita e descubra a melhor solução
              para seu espaço.
            </motion.p>

            <motion.div
              variants={fadeUpPremium}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() =>
                  trackAndOpenWA(
                    "Olá! Gostaria de uma análise técnica para meu projeto."
                  )
                }
              >
                INICIAR AGORA
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  trackAndOpenWA("Tenho dúvidas antes de começar.")
                }
              >
                CONVERSAR COM CONSULTOR
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
```

---

## 📋 Atualizar App.jsx

### Versão Premium
```jsx
import { useScroll, motion } from "framer-motion";
import { progressBar } from "./shared/animations.premium";

// Importar componentes premium
import HeroPremium from "./components/HeroPremium";
import SolucaoPremium from "./components/SolucaoPremium";
import AutoridadePremium from "./components/AutoridadePremium";
import DepoimentosPremium from "./components/DepoimentosPremium";
import FAQPremium from "./components/FAQPremium";
import CTAFinalPremium from "./components/CTAFinalPremium";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent)] z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
        variants={progressBar}
      />

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Main */}
      <main>
        <HeroPremium />
        <SolucaoPremium />
        <AutoridadePremium />
        <DepoimentosPremium />
        <FAQPremium />
        <CTAFinalPremium />
      </main>
    </>
  );
}
```

---

## ✅ Checklist de Implementação

```
[ ] 1. Refatorar Hero → HeroPremium
[ ] 2. Refatorar Solução → SolucaoPremium
[ ] 3. Refatorar Autoridade → AutoridadePremium
[ ] 4. Refatorar Depoimentos → DepoimentosPremium
[ ] 5. Refatorar FAQ → FAQPremium
[ ] 6. Refatorar CTA Final → CTAFinalPremium
[ ] 7. Atualizar App.jsx
[ ] 8. Testar npm run dev
[ ] 9. Testar responsividade (mobile, tablet, desktop)
[ ] 10. Executar npm run build
[ ] 11. Validar bundle size
[ ] 12. Deploy
```

---

**Pronto para implementar! 🚀**
