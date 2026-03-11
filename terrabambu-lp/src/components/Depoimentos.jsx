import { motion } from "framer-motion";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { Quote, Star, CheckCircle } from "lucide-react";

export default function Depoimentos() {
    const reviews = [
        { text: "A área externa era um forno. Hoje é onde a família fica todo fim de semana. O bambu trouxe vida nova para nossa varanda.", author: "Família Rodrigues", city: "Alphaville", stars: 5 },
        { text: "Perguntei para 3 empresas. A Terra Bambu foi a única que respondeu rápido e com clareza. Instalação impecável.", author: "Carlos M.", city: "Barueri", stars: 5 },
        { text: "Tinha medo do bambu apodrecer. Explicaram tudo, fizeram certo. Está impecável há 2 anos, mesmo com as chuvas.", author: "Ana P.", city: "Jundiaí", stars: 5 },
        { text: "Área gourmet que ninguém usava pela temperatura. Hoje recebo toda semana com orgulho. Recomendo muito!", author: "Marcos T.", city: "Campinas", stars: 5 },
        { text: "Instalação limpinha. Sem bagunça, sem surpresa. O resultado estético superou as expectativas da minha arquiteta.", author: "Renata S.", city: "São Paulo", stars: 5 },
        { text: "Orçamento em menos de 12h como prometido no site. Isso já diz tudo sobre a seriedade da empresa. Nota 10.", author: "Pedro L.", city: "Barueri", stars: 5 }
    ];

    return (
        <section className="bg-[var(--bg-light)] text-[var(--text-dark)] py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-24"
                >
                    <motion.div
                        variants={fadeUp}
                        className="flex items-center justify-center gap-2 mb-4 text-[var(--accent-dark)] font-bold text-xs uppercase tracking-[0.3em]"
                    >
                        <CheckCircle size={18} />
                        <span>100% Clientes Satisfeitos</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
                        Vozes de quem já vive essa <br className="hidden md:block" /> <span className="text-[var(--accent-dark)]">transformação</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-xl opacity-75 max-w-2xl mx-auto font-medium leading-relaxed">
                        Não é apenas sobre instalar bambu — é sobre devolver o prazer de conviver nas áreas externas da sua casa.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                            className="break-inside-avoid bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 relative flex flex-col items-start"
                        >
                            <div className="flex text-[var(--gold)] mb-6">
                                {[...Array(rev.stars)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                            </div>

                            <Quote size={40} className="text-[var(--accent)]/10 absolute top-8 right-8" />

                            <p className="font-semibold text-lg md:text-xl leading-relaxed mb-8 text-[var(--bg)] italic">
                                &ldquo;{rev.text}&rdquo;
                            </p>

                            <div className="mt-auto flex flex-col">
                                <strong className="text-base font-black tracking-tight">{rev.author}</strong>
                                <span className="text-xs font-bold uppercase tracking-widest opacity-50">{rev.city}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer de Prova Social */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-20 flex flex-col items-center justify-center"
                >
                    <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Referência em Alphaville, Barueri e Grande SP</p>
                </motion.div>
            </div>
        </section>
    );
}
