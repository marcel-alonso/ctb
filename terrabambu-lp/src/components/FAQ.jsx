import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { waURL, CONFIG } from "../config";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-[var(--border)]">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg font-bold pr-4">{question}</span>
                <span className="text-[var(--accent)] flex-shrink-0 transition-transform duration-300">
                    {isOpen ? <Minus /> : <Plus />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
            >
                <p className="pb-6 text-[var(--text-muted)] leading-relaxed">
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
            q: "Bambu dura mesmo lá fora?",
            a: "Sim — quando instalado certo. Bambu tratado dura muitos anos em externo coberto. Evitamos cenários de risco na recomendação inicial."
        },
        {
            q: "E se ficar exposto à chuva?",
            a: "Externo coberto: sim, cenário mais seguro. Exposto à chuva direta: avaliamos caso a caso. Nunca recomendamos algo que vai dar problema."
        },
        {
            q: "Preciso de obra grande para instalar?",
            a: "Não. Grande impacto visual com pouca obra. A maioria não exige quebrar nada."
        },
        {
            q: "Quanto custa? Posso saber antes de entrar em contato?",
            a: "Depende da medida, altura e modelo. Por isso existe o Orçamento Express: 2 fotos + medida aproximada → valor real em até 12h úteis. Sem compromisso."
        },
        {
            q: "Vai dar cupim ou mofo?",
            a: "Prevenção faz parte do processo. Escolhemos acabamento compatível com o ambiente. Seguindo a orientação, não há surpresas."
        },
        {
            q: "Vocês atendem minha cidade?",
            a: "Grande SP, Barueri, Alphaville e interior de SP. Manda sua cidade no WhatsApp — confirmamos em minutos."
        },
        {
            q: "E se eu não gostar do resultado?",
            a: "Você aprova tudo antes de começar: material, modelo, processo. Surpresa negativa não faz parte do nosso método."
        },
        {
            q: "Quanto tempo leva para ficar pronto?",
            a: "Orçamento: até 12h úteis após envio das fotos. Instalação: maioria dos projetos concluída em 1 a 2 dias."
        }
    ];

    return (
        <section className="bg-[var(--bg-2)] py-24 px-6 border-b border-[var(--border)]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                        Dúvidas frequentes
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg">
                        Transparência total desde o primeiro contato.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
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
                    className="mt-16 text-center"
                >
                    <p className="text-lg font-medium mb-4">Ainda tem dúvida? Manda no WhatsApp — respondemos na hora.</p>
                    <a
                        href={waURL(CONFIG.wa.msgFaq)}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
                    >
                        Falar pelo WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
