import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, fadeIn } from "../shared/animations";
import { Compass, Ruler, Zap, Hammer, Leaf, PhoneCall, Award } from "lucide-react";

export default function Autoridade() {
    const differentials = [
        {
            Title: "Diagnóstico Honesto",
            Text: "Não vendemos o que você não precisa. Recomendamos a solução que realmente funciona para a incidência de sol do seu espaço.",
            Icon: Compass,
            Gatilho: "Ética"
        },
        {
            Title: "Sob Medida Real",
            Text: "Nada de peças prontas ou genéricas. Cada bambu é selecionado, cortado e ajustado milimetricamente para o seu projeto.",
            Icon: Ruler,
            Gatilho: "Exclusividade"
        },
        {
            Title: "Orçamento em 12h",
            Text: "Sabemos que você tem pressa. Nosso processo digital permite enviar fotos e receber seu valor exato em tempo recorde.",
            Icon: Zap,
            Gatilho: "Velocidade"
        },
        {
            Title: "Instalação com Método",
            Text: "Equipe própria treinada em montagem silenciosa e limpa. Cronograma seguido à risca, sem 'surpresas' de última hora.",
            Icon: Hammer,
            Gatilho: "Segurança"
        },
        {
            Title: "Material Tratado",
            Text: "Utilizamos bambu com tratamento industrial de alta durabilidade. Resistente a pragas e com acabamento premium de longa vida.",
            Icon: Leaf,
            Gatilho: "Qualidade"
        },
        {
            Title: "Acompanhamento Real",
            Text: "Damos suporte total após a entrega. Nossa relação com o cliente não termina quando a última peça é instalada.",
            Icon: PhoneCall,
            Gatilho: "Cuidado"
        }
    ];

    return (
        <section className="bg-[var(--bg)] py-32 px-6 relative overflow-hidden">

            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[150px] pointer-events-none opacity-30" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--gold)]/10 rounded-full blur-[150px] pointer-events-none opacity-30" />

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
                        className="inline-flex items-center gap-2 mb-6 text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]"
                    >
                        <Award size={18} />
                        <span>O Padrão Terra Bambu</span>
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">
                        Por que confiar seu espaço <br className="hidden md:block" /> à <span className="text-[var(--gold)]">Terra Bambu</span>?
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto leading-relaxed">
                        Unimos o conhecimento ancestral do bambu com métodos modernos de engenharia e atendimento express. O resultado? Uma obra impecável e sem dor de cabeça.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {differentials.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-[var(--bg-2)] border border-white/5 p-8 rounded-[2rem] flex flex-col items-start hover:border-[var(--accent)]/40 transition-all duration-500 shadow-xl"
                        >
                            <div className="mb-8 p-4 rounded-2xl bg-[var(--bg)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-500 shadow-inner">
                                <item.Icon size={32} strokeWidth={1.5} />
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[var(--gold)] text-[10px] font-bold uppercase tracking-widest bg-[var(--gold)]/10 px-2 py-0.5 rounded">
                                    {item.Gatilho}
                                </span>
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                                {item.Title}
                            </h4>
                            <p className="text-[var(--text-muted)] text-base leading-relaxed font-medium">
                                {item.Text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mensagem Final de Autoridade */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent w-full max-w-2xl mb-12" />
                    <p className="text-[var(--text-muted)] italic text-lg max-w-2xl mx-auto">
                        "Nossa missão não é apenas instalar um forro, é criar a atmosfera ideal para as melhores memórias da sua família."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
