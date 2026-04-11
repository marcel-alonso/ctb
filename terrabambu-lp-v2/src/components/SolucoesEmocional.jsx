import { motion } from "framer-motion";
import { Check, ArrowRight, UserCheck } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { trackAndOpenWA } from "../config";
import ScrollIndicator from "./ScrollIndicator";
import { Button, Card, Badge, Section, Container } from "./base";

import forroRetoImg from "@assets/images/forro-reto.png";
import panelTrancadoImg from "@assets/images/panel-trancado.jpg";
import pergolaoImg from "@assets/images/pergolado-black-grid.jpg";
import revestimentoImg from "@assets/images/bambu-paralelo-ecobans.jpg";

export default function SolucoesEmocional() {
  const products = [
    {
      title: "Forro Reto",
      badge: "Design Artesanal",
      features: ["Bambu rolico inteiro", "Conforto termico nobre", "Acabamento artesanal"],
      img: forroRetoImg
    },
    {
      title: "Painel Trancado",
      badge: "O Mais Escolhido",
      features: ["Bambu ripado e trancado", "Conforto Termico e Acustico", "Durabilidade Premium"],
      img: panelTrancadoImg
    },
    {
      title: "Pergolado Completo",
      badge: "Solucao Completa",
      features: ["Estrutura de madeira ou metal", "+ Revestimento escolhido", "Instalacao especializada"],
      img: pergolaoImg
    },
    {
      title: "Lamina Prime",
      badge: "Tendencia",
      features: ["Ripas aparelhadas", "Execucao profissional", "Design biofilico"],
      img: revestimentoImg
    }
  ];

  return (
    <Section variant="dark" id="solucoes">
      <Container>
        {/* Header — fala da DOR, nao do produto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-14"
        >
          <Badge
            icon={UserCheck}
            label="Equipes de campo especializadas"
            variant="gold"
            className="mb-6 justify-center"
          />

          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter"
          >
            Recupere sua{" "}
            <span className="text-[var(--accent)]">area externa</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Diga adeus ao calor excessivo. Nossas solucoes de bambu reduzem a
            temperatura e trazem o conforto que sua varanda ou pergolado merece.
          </motion.p>
        </motion.div>

        {/* Products — mobile: 1 col, md: 2 col, lg: 4 col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={fadeUpPremium}>
              <Card interactive elevated>
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/20 to-transparent opacity-80" />

                  <div className="absolute top-5 left-5">
                    <Badge label={product.badge} variant="dark" className="text-[9px]" />
                  </div>

                  <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-black text-white z-10">
                    {product.title}
                  </h3>
                </div>

                {/* Features + CTA */}
                <div className="p-6 pb-7 flex flex-col flex-1">
                  <ul className="space-y-3.5 mb-7 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-[var(--accent)]" />
                        </div>
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="secondary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() =>
                      trackAndOpenWA(
                        `Ola! Tenho interesse no ${product.title}. Pode me passar um orcamento?`,
                        `Product_Click_${product.title.replace(" ", "_")}`
                      )
                    }
                    className="tracking-[0.2em]"
                  >
                    Solicitar Orcamento
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <ScrollIndicator color="var(--accent-dark)" label="Clientes Satisfeitos" />
        </div>
      </Container>
    </Section>
  );
}
