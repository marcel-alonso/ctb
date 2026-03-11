import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { trackAndOpenWA, CONFIG } from "../config";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`border-b border-white/5 transition-colors ${isOpen ? 'bg-white/[0.02]' : ''}`}>
            <button
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg md:text-xl font-bold pr-4 transition-colors ${isOpen ? 'text-[var(--accent)]' : 'text-white/90 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[var(--accent)] border-[var(--accent)] text-white rotate-180' : 'text-[var(--accent)]'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
            >
                <p className="pb-8 text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "Vocês atendem minha cidade?",
            a: "Atendemos São Paulo, Grande SP, Interior e Litoral. Também organizamos logística dedicada para projetos em qualquer região do Brasil. Onde houver um projeto de alto padrão, nossa equipe chega."
        },
        {
            q: "Como funciona a consultoria?",
            a: "Unimos tecnologia e atendimento humano. Você envia fotos e medidas, nossa engenharia analisa e em até 12h úteis você tem uma proposta técnica e comercial clara. Após aprovado, nossas equipes de campo assumem o projeto presencialmente."
        },
        {
            q: "O bambu é resistente?",
            a: "Sim. Utilizamos bambu com tratamento industrial de alta tecnologia. Nossas equipes são treinadas para garantir que cada instalação suporte as condições climáticas da sua região, mantendo a durabilidade por anos."
        },
        {
            q: "A equipe de instalação é própria?",
            a: "Sim. Temos equipes de campo comprometidas, extremamente preparadas e uniformizadas. Não terceirizamos a execução, garantindo o padrão Terra Bambu em cada detalhe presencial."
        }
    ];

    return (
        <section className="bg-[var(--bg-2)] py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-[var(--gold)] font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                        <ShieldCheck size={18} />
                        <span>Segurança e Transparência</span>
                    </div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                        Tecnologia na gestão, <br className="hidden md:block" /> <span className="text-[var(--accent)]">excelência no campo.</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="border-t border-white/5"
                >
                    {faqs.map((item, i) => (
                        <AccordionItem
                            key={i}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mt-20 p-10 rounded-3xl bg-[var(--bg)] border border-white/5 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Pronto para iniciar seu projeto?</h3>
                    <button
                        onClick={() => trackAndOpenWA(CONFIG.wa.msgFaq, 'FAQ_CTA_Click')}
                        className="inline-flex items-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-black py-4 px-10 rounded-full transition-all duration-300 group tracking-wider"
                    >
                        FALAR COM CONSULTOR AGORA
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
