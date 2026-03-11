import { motion } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { Quote, Star, CheckCircle } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

export default function Depoimentos() {
    const reviews = [
        {
            name: "Ricardo A.",
            role: "Arquiteto",
            text: "O acabamento superou minhas expectativas. O detalhamento do bambu paralelo trouxe uma sofisticação que poucos materiais conseguem.",
            rating: 5
        },
        {
            name: "Mariana S.",
            role: "Proprietária em Alphaville",
            text: "A equipe foi impecável. Instalação rápida, limpa e o resultado final transformou meu espaço gourmet em um refúgio.",
            rating: 5
        },
        {
            name: "Lucas M.",
            role: "Engenheiro Civil",
            text: "Impressionado com a gestão do projeto. Tudo digital, transparente e executado com maestria técnica.",
            rating: 5
        }
    ];

    return (
        <section className="bg-[var(--bg-light)] text-[var(--text-dark)] py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="flex justify-center mb-6">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="var(--accent-dark)" className="text-[var(--accent-dark)]" />)}
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-6">O que dizem nossos <span className="text-[var(--accent-dark)]">clientes</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-8 text-[var(--accent-dark)]/10" size={48} />
                            <p className="text-lg text-[var(--bg)] italic mb-8 relative z-10 font-medium">"{rev.text}"</p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center font-bold text-[var(--accent-dark)]">
                                    {rev.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--bg)]">{rev.name}</h4>
                                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest">{rev.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    className="text-center opacity-60"
                >
                    <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Referência em Alphaville, Barueri e Grande SP</p>
                </motion.div>

                <div className="mt-16">
                    <ScrollIndicator color="var(--accent-dark)" label="Dúvidas Frequentes" />
                </div>
            </div>
        </section>
    );
}
