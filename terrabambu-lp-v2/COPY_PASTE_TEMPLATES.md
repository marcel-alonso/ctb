# 📋 Copy-Paste Templates - Premium Design System

Componentes prontos para copiar e colar em seus projetos.

---

## 🎯 Template: Seção Básica

```jsx
import { motion } from "framer-motion";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card } from "./base";

export default function MinhaSecao() {
  return (
    <Section variant="dark" id="minha-secao">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpPremium} className="text-5xl md:text-6xl font-black text-white mb-6">
            Meu Título
          </motion.h2>
          <motion.p variants={fadeUpPremium} className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Minha descrição
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Cards aqui */}
        </motion.div>
      </Container>
    </Section>
  );
}
```

---

## 🃏 Template: Card com Conteúdo

```jsx
<motion.div variants={fadeUpPremium}>
  <Card interactive elevated>
    <div className="mb-6">
      <h3 className="text-xl font-bold text-white mb-3">Título do Card</h3>
      <p className="text-[var(--text-muted)]">Descrição do card aqui</p>
    </div>
  </Card>
</motion.div>
```

---

## 🎨 Template: Card com Imagem

```jsx
<motion.div variants={fadeUpPremium}>
  <Card interactive elevated>
    {/* Image */}
    <div className="relative h-64 overflow-hidden mb-6">
      <motion.img
        src={imagemUrl}
        alt="descricao"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-60" />
    </div>

    {/* Content */}
    <h3 className="text-2xl font-black text-white mb-4">Título</h3>
    <p className="text-[var(--text-muted)] mb-6">Descrição</p>
    <Button variant="secondary">Ação</Button>
  </Card>
</motion.div>
```

---

## 🏆 Template: Autoridade/Números

```jsx
import { Award, Zap, Shield } from "lucide-react";

const stats = [
  { icon: Award, title: "10+ Anos", desc: "De experiência" },
  { icon: Zap, title: "1.000+", desc: "Projetos executados" },
  { icon: Shield, title: "5 Anos", desc: "De garantia" }
];

return (
  <Section variant="dark">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={fadeUpPremium}>
            <Card>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6 text-[var(--accent)]">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">{stat.title}</h3>
              <p className="text-[var(--text-muted)]">{stat.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  </Section>
);
```

---

## ⭐ Template: Depoimentos

```jsx
const testimonials = [
  { name: "João Silva", text: "Melhor escolha!", rating: 5, avatar: "👨‍💼" },
  { name: "Maria Costa", text: "Excelente qualidade!", rating: 5, avatar: "👩‍💼" }
];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {testimonials.map((t) => (
      <motion.div key={t.name} variants={fadeUpPremium}>
        <Card interactive>
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-white mb-6 italic">"{t.text}"</p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="text-3xl">{t.avatar}</div>
            <p className="font-bold text-white">{t.name}</p>
          </div>
        </Card>
      </motion.div>
    ))}
  </div>
);
```

---

## ❓ Template: FAQ

```jsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "Pergunta 1?", a: "Resposta 1" },
  { q: "Pergunta 2?", a: "Resposta 2" }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full bg-white/10 hover:bg-white/20 rounded-2xl px-6 py-4 transition-all flex items-center justify-between"
          >
            <span className="font-bold text-white text-left">{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/5 px-6 py-4 rounded-b-2xl"
              >
                <p className="text-[var(--text-muted)]">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎬 Template: Call-to-Action Grande

```jsx
<Section variant="dark">
  <Container>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerSlow}
      className="relative rounded-3xl overflow-hidden p-16 md:p-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--gold)]/10 border border-[var(--accent)]/30" />
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--accent)]/20 rounded-full blur-[100px]" />

      {/* Content */}
      <motion.div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2 variants={fadeUpPremium} className="text-5xl md:text-6xl font-black text-white mb-6">
          Título do CTA
        </motion.h2>
        <motion.p variants={fadeUpPremium} className="text-xl text-[var(--text-muted)] mb-12">
          Descrição motivadora
        </motion.p>

        <motion.div variants={fadeUpPremium} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Botão Principal
          </Button>
          <Button variant="secondary" size="lg">
            Botão Secundário
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  </Container>
</Section>
```

---

## 🎨 Template: Seção com Duas Colunas

```jsx
<Section variant="dark">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Esquerda */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerSlow}
      >
        <motion.h2 variants={fadeUpPremium} className="text-5xl font-black text-white mb-6">
          Título Esquerdo
        </motion.h2>
        <motion.p variants={fadeUpPremium} className="text-lg text-[var(--text-muted)] mb-8">
          Descrição aqui
        </motion.p>
        <motion.div variants={fadeUpPremium}>
          <Button variant="primary">Ação</Button>
        </motion.div>
      </motion.div>

      {/* Direita */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={imagemUrl} alt="imagem" className="rounded-3xl" />
      </motion.div>
    </div>
  </Container>
</Section>
```

---

## 🎭 Template: Feature Grid 3x

```jsx
const features = [
  { title: "Feature 1", desc: "Descrição 1", icon: Icon1 },
  { title: "Feature 2", desc: "Descrição 2", icon: Icon2 },
  { title: "Feature 3", desc: "Descrição 3", icon: Icon3 }
];

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
        <motion.h2 variants={fadeUpPremium} className="text-5xl font-black text-white">
          Nossas Features
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerSlow}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((f) => (
          <motion.div key={f.title} variants={fadeUpPremium}>
            <Card interactive>
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6 text-[var(--accent)]">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-[var(--text-muted)]">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </Section>
);
```

---

## 📱 Template: Responsivo - Texto sobre Imagem Mobile

```jsx
<Section variant="dark" className="min-h-screen flex items-center">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Mobile: Imagem em cima, Texto embaixo */}
      {/* Desktop: Lado a lado */}
      
      <motion.div initial="hidden" whileInView="visible" variants={staggerSlow}>
        <motion.h2 variants={fadeUpPremium} className="text-5xl font-black text-white mb-6">
          Título
        </motion.h2>
      </motion.div>

      <motion.img
        src={imagemUrl}
        alt="imagem"
        className="rounded-3xl w-full h-auto md:h-96 object-cover"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </Container>
</Section>
```

---

## ✨ Template: Badge + Heading (Seção Inteira)

```jsx
<Section variant="dark">
  <Container>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerSlow}
      className="text-center"
    >
      <Badge
        icon={MapPin}
        label="Seu badge aqui"
        variant="gold"
        className="mb-6 justify-center"
      />

      <motion.h2 variants={fadeUpPremium} className="text-5xl md:text-6xl font-black text-white mb-6">
        Seu Título com <span className="text-[var(--accent)]">Destaque</span>
      </motion.h2>

      <motion.p variants={fadeUpPremium} className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto mb-12">
        Sua descrição aqui
      </motion.p>

      <motion.div variants={fadeUpPremium}>
        <Button variant="primary" size="lg">
          Call to Action
        </Button>
      </motion.div>
    </motion.div>
  </Container>
</Section>
```

---

## 🎯 Template: Buttons em Diferentes Estados

```jsx
{/* Primary */}
<Button variant="primary" size="lg" onClick={handleClick}>
  Principal
</Button>

{/* Secondary */}
<Button variant="secondary" size="lg">
  Secundário
</Button>

{/* Ghost */}
<Button variant="ghost">
  Ghost
</Button>

{/* Com Ícone */}
<Button variant="primary" icon={ArrowRight}>
  Com Ícone
</Button>

{/* Disabled */}
<Button variant="primary" disabled>
  Desativado
</Button>

{/* Tamanhos */}
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>
<Button size="xl">Extra Grande</Button>
```

---

## 🔧 Como Usar Este Template

1. **Copie o código** que você precisa
2. **Cole** em seu componente JSX
3. **Adapte**:
   - Mude os textos
   - Troque as imagens
   - Ajuste as cores (usar tokens CSS)
   - Customize onClick handlers
4. **Teste** com `npm run dev`

---

## 💡 Tips Importantes

### Sempre use `whileInView` com `viewport`
```jsx
whileInView="visible"
viewport={{ once: true, margin: "-80px" }}
```

### Sempre use `variants` para animações consistentes
```jsx
// ❌ Não:
animate={{ opacity: 1, y: 0 }}

// ✅ Sim:
variants={fadeUpPremium}
```

### Sempre use componentes base
```jsx
// ❌ Não:
<div className="bg-white/10 border...">

// ✅ Sim:
<Card interactive elevated>
```

### Sempre responda temas
```jsx
// ❌ Não:
className="md:text-5xl"

// ✅ Sim:
className="text-4xl md:text-5xl lg:text-6xl"
```

---

**Todos esses templates estão prontos para usar. Copie, cole, customize e aproveite!** 🚀
