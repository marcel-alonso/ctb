import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Quote } from "lucide-react";

export default function Depoimentos() {
    const reviews = [
        { text: "A área externa era um forno. Hoje é onde a família fica todo fim de semana.", author: "Família Rodrigues", city: "Alphaville" },
        { text: "Perguntei para 3 empresas. A Terra Bambu foi a única que respondeu rápido e com clareza.", author: "Carlos M.", city: "Barueri" },
        { text: "Tinha medo do bambu apodrecer. Explicaram tudo, fizeram certo. Impecável há 2 anos.", author: "Ana P.", city: "Jundiaí" },
        { text: "Área gourmet que ninguém usava. Hoje recebo toda semana com orgulho.", author: "Marcos T.", city: "Campinas" },
        { text: "Instalação limpinha. Sem bagunça, sem surpresa. Melhor do que esperava.", author: "Renata S.", city: "São Paulo" },
        { text: "Orçamento em menos de 12h como prometido. Isso já diz tudo da empresa.", author: "Pedro L.", city: "Barueri" }
    ];

    return (
        <section className="bg-[var(--bg-light)] text-[var(--text-dark)] py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                        A satisfação é o nosso <span className="text-[var(--accent-dark)]">melhor portfólio</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg opacity-80 font-medium">
                        Histórias de varandas transformadas pela Conexão Terra Bambu.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                            className="break-inside-avoid bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-black/5 relative"
                        >
                            <Quote size={32} className="text-[var(--accent)]/20 absolute top-6 right-6" />
                            <p className="font-medium text-lg leading-snug mb-6 w-[90%]">&ldquo;{rev.text}&rdquo;</p>
                            <div>
                                <strong className="block text-sm font-bold">{rev.author}</strong>
                                <span className="text-xs font-medium opacity-60">{rev.city}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
