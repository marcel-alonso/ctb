import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container } from "./base";

const faqs = [
  {
    q: "Qual a durabilidade do bambu tratado?",
    a: "O bambu tratado pode durar mais de 50 anos em area externa coberta. Usamos processos industriais profundos (autoclave) que transformam o bambu em um material extremamente resistente — comparavel a madeiras nobres, mas com muito mais leveza e sustentabilidade. Com o cuidado certo, seu investimento atravessa geracoes."
  },
  {
    q: "O bambu aguenta chuva e sol direto?",
    a: "Sim. O bambu tratado resiste bem a variacoes climaticas — chuva, sol, umidade e ate maresia. Para areas totalmente descobertas, aplicamos um verniz protetor adicional que mantem a cor e a integridade do material. Cada projeto recebe a protecao ideal para o seu ambiente especifico."
  },
  {
    q: "O bambu atrai bichos ou apodrece?",
    a: "Pode ficar tranquilo. Utilizamos bambu com tratamento industrial profundo que imuniza o material contra brocas, cupins e fungos. Com manutencao basica, ele dura decadas. Nos cuidamos de cada detalhe para que voce so aproveite."
  },
  {
    q: "Qual a garantia que voces oferecem?",
    a: "Oferecemos 10 anos de garantia contra defeitos estruturais e de instalacao. Somos uma empresa com mais de 10 anos de mercado e atendimento nacional — seu projeto fica em maos que conhecem profundamente o material e o clima do Brasil."
  },
  {
    q: "Preciso fazer manutencao especial?",
    a: "A manutencao e minima. Uma limpeza suave com pano umido a cada 3 ou 4 meses e, em areas descobertas, uma reaplicacao de verniz a cada 3-5 anos. So isso. Orientamos todo o passo a passo na entrega do projeto — sem complicacao, sem surpresas."
  },
  {
    q: "O bambu e realmente uma opcao sustentavel?",
    a: "Sim, e uma das mais sustentaveis que existem. O bambu cresce ate 1 metro por dia e se regenera sem replantio — captura ate 35% mais CO2 que arvores comuns. Ao escolher bambu, voce traz natureza para casa e contribui ativamente com o planeta."
  },
  {
    q: "O bambu esquenta o ambiente?",
    a: "Pelo contrario! O bambu e um dos melhores isolantes termicos naturais que existem. Ele ajuda a manter a temperatura amena mesmo em dias de sol forte. Voce vai sentir a diferenca desde o primeiro dia."
  },
  {
    q: "Quanto tempo demora a instalacao?",
    a: "A maioria das instalacoes de forro e concluida em 1 a 3 dias. Nosso metodo e focado em rapidez, precisao e limpeza extrema do canteiro de obras. Respeitamos seu tempo e seu espaco."
  },
  {
    q: "Voces atendem em quais regioes?",
    a: "Atendemos em todo o estado de Sao Paulo (Capital, Alphaville, Interior e Litoral) e tambem realizamos projetos selecionados em todo o territorio nacional. Onde voce estiver, a gente chega."
  }
];

export default function FAQEmocional() {
  const [open, setOpen] = useState(0);

  return (
    <Section variant="light" className="text-[var(--text-dark)] bg-[var(--bg-light)]">
      <Container size="sm">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerSlow}
           className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
          >
            Duvidas <span className="text-[var(--accent)]">Frequentes</span>
          </motion.h2>
          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-lg opacity-70"
          >
            Tudo o que voce precisa saber. Sem letras miudas, sem surpresas.
          </motion.p>
        </motion.div>

        <div className="space-y-3 relative z-10">
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
                onClick={() => {
                  setOpen(open === i ? -1 : i);
                  if (navigator.vibrate) navigator.vibrate(5);
                }}
                className={`w-full text-left px-6 md:px-8 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border touch-manipulation ${
                  open === i
                    ? "bg-white border-[var(--accent)] shadow-xl shadow-[var(--accent)]/5"
                    : "bg-white/40 border-black/5 hover:border-black/10 hover:bg-white/60 active:bg-white/80"
                }`}
              >
                <span className="font-bold text-lg md:text-2xl pr-6">{item.q}</span>
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
                    <div className="px-6 md:px-8 py-6 bg-white/60 rounded-b-2xl -mt-3 border-x border-b border-[var(--accent)]/10">
                      <p className="text-base leading-relaxed opacity-80">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[80px] -mb-32 -mr-32 pointer-events-none" />
    </Section>
  );
}
