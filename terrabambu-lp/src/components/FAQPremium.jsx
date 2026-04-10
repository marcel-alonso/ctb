import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container } from "./base";

const faqs = [
  {
    q: "O bambu atrai bichos ou apodrece?",
    a: "Não. Utilizamos bambu com tratamento industrial profundo que imuniza o material contra brocas, cupins e fungos. Com manutenção básica, ele dura décadas."
  },
  {
    q: "Quanto tempo demora a instalação?",
    a: "A maioria das instalações de forro é concluída em 1 a 3 dias. Nosso método é focado em rapidez, precisão e limpeza extrema do canteiro de obras."
  },
  {
    q: "Vocês atendem em quais regiões?",
    a: "Atendemos em todo o estado de São Paulo (Capital, Alphaville, Interior e Litoral) e também realizamos projetos selecionados em todo o território nacional."
  },
  {
    q: "O bambu esquenta o ambiente?",
    a: "Pelo contrário! O bambu é um dos melhores isolantes térmicos naturais que existem. Ele ajuda a manter a temperatura amena mesmo em dias de sol forte."
  }
];

export default function FAQPremium() {
  const [open, setOpen] = useState(0);

  return (
    <Section variant="light" className="text-[var(--text-dark)] bg-[var(--bg-light)]">
      <Container size="sm">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerSlow}
           className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Dúvidas <span className="text-[var(--accent)]">Frequentes</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpPremium}
            className="text-lg opacity-70"
          >
            Tudo o que você precisa saber sobre o forro de bambu premium.
          </motion.p>
        </motion.div>

        <div className="space-y-4 relative z-10">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className={`w-full text-left px-8 py-6 rounded-3xl transition-all duration-300 flex items-center justify-between border ${
                  open === i 
                    ? "bg-white border-[var(--accent)] shadow-xl shadow-[var(--accent)]/5" 
                    : "bg-white/40 border-black/5 hover:border-black/10 hover:bg-white/60"
                }`}
              >
                <span className="font-bold text-xl md:text-2xl pr-8">{item.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  open === i ? "bg-[var(--accent)] text-white" : "bg-black/5 text-black/40"
                }`}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 py-8 bg-white/60 rounded-b-3xl -mt-4 border-x border-b border-[var(--accent)]/10">
                      <p className="text-lg leading-relaxed opacity-80">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
      
      {/* Aesthetic touches */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[80px] -mb-32 -mr-32 pointer-events-none" />
    </Section>
  );
}
