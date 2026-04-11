import { motion } from "framer-motion";
import { Check, ArrowRight, UserCheck } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { CONFIG, trackAndOpenWA } from "../config";
import ScrollIndicator from "./ScrollIndicator";

// Importar componentes base premium
import { Button, Card, Badge, Section, Container, Grid } from "./base";

import forroRetoImg from "@assets/images/forro-reto.png";
import gourmetImg from "@assets/images/gourmet-churrasqueira.jpg";
import panelTrancadoImg from "@assets/images/panel-trancado.jpg";
import pergolaoImg from "@assets/images/pergolado-black-grid.jpg";
import revestimentoImg from "@assets/images/bambu-paralelo-ecobans.jpg";

export default function SolucaoPremium() {
  const products = [
    {
      title: "Forro Reto",
      badge: "🎨 Design Artesanal",
      desc: "",
      features: ["Bambu roliço inteiro", "Conforto térmico nobre", "Acabamento artesanal"],
      img: forroRetoImg
    },
    {
      title: "Painel Trançado",
      badge: "🏆 O Mais Escolhido",
      desc: "",
      features: ["Bambu ripado e trançado", "Conforto Térmico e Acústico", "Durabilidade Premium"],
      img: panelTrancadoImg
    },
    {
      title: "Pergolado Completo",
      badge: "✨ Solução Completa",
      desc: "",
      features: ["Estrutura de madeira ou metal", "+ Revestimento escolhido", "Instalação especializada"],
      img: pergolaoImg
    },
    {
      title: "Lâmina Prime",
      badge: "🌿 Tendência",
      desc: "",
      features: ["Ripas aparelhadas", "Execução profissional", "Design biofílico"],
      img: revestimentoImg
    }
  ];

  return (
    <Section variant="dark" id="solucoes">
      <Container>
        {/* Header Premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <Badge
            icon={UserCheck}
            label="Equipes de campo especializadas"
            variant="gold"
            className="mb-6 justify-center"
          />

          <motion.h2
            variants={fadeUpPremium}
            className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter"
          >
            Recupere sua{" "}
            <span className="text-[var(--accent)]">área externa</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Diga adeus ao calor excessivo. Nossas soluções de bambu reduzem a
            temperatura e trazem o conforto que sua varanda ou pergolado merece.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div key={product.title} variants={fadeUpPremium}>
              <Card interactive elevated>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/20 to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge
                      label={product.badge}
                      variant="dark"
                      className="text-[9px]"
                    />
                  </div>

                  {/* Title Overlay */}
                  <h3 className="absolute bottom-8 left-8 text-2xl font-black text-white z-10">
                    {product.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 pb-8 flex flex-col flex-1">
                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                          <Check
                            size={12}
                            className="text-[var(--accent)]"
                          />
                        </div>
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="secondary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() =>
                      trackAndOpenWA(
                        `Olá! Tenho interesse no ${product.title}. Pode me passar um orçamento?`,
                        `Product_Click_${product.title.replace(" ", "_")}`
                      )
                    }
                    className="tracking-[0.2em]"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <ScrollIndicator
            color="var(--accent-dark)"
            label="Ver nossa autoridade"
          />
        </div>
      </Container>
    </Section>
  );
}
