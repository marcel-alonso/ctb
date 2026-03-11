import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Check } from "lucide-react";

export default function Solucao() {
    const products = [
        {
            title: "Forro Reto",
            desc: "Perfeito para aplicar em varandas e garagens já cobertas. Traz conforto térmico e esconde vigas.",
            features: ["Instalação rápida", "Isolamento térmico", "Visual clean"]
        },
        {
            title: "Pergolado Completo",
            desc: "Estrutura robusta com forro de bambu sombreador. Cria um ambiente novo onde antes batia sol direto.",
            features: ["Estrutura de madeira", "Sombra projetada", "Maior impacto visual"]
        },
        {
            title: "Revestimento Vertical",
            desc: "Aplicação em paredes, muros ou fachadas para decoração ou privacidade no quintal.",
            features: ["Privacidade", "Textura natural", "Aconchego imediato"]
        }
    ];

    return (
        <section className="bg-[var(--bg)] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                        A solução ideal para <span className="text-[var(--accent)]">cada espaço</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        Adaptamos o bambu para diferentes necessidades arquitetônicas, garantindo o melhor resultado estético e funcional.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                            className="bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-8 shadow-xl shadow-black/20"
                        >
                            <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                            <p className="text-[var(--text-muted)] mb-6 min-h-[5rem]">{product.desc}</p>

                            <ul className="space-y-3">
                                {product.features.map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--surface)] flex items-center justify-center text-[var(--accent)]">
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        <span className="text-sm font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
