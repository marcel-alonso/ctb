import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Check, ArrowRight, UserCheck } from "lucide-react";
import { CONFIG, trackAndOpenWA } from "../config";

export default function Solucao() {
    const products = [
        {
            title: "Forro Reto",
            badge: "🏆 O Mais Escolhido",
            desc: "Perfeito para varandas e garagens já cobertas. Traz conforto térmico imediato e esconde vigamentos com elegância.",
            features: ["Instalação especializada", "Conforto térmico nobre", "Acabamento artesanal"],
            img: "/lp/forros-bambu/assets/images/forro-reto.png"
        },
        {
            title: "Pergolado Completo",
            badge: "✨ Alto Padrão",
            desc: "Estrutura robusta montada por especialistas. Sombreamento natural projetado pela nossa engenharia.",
            features: ["Engenharia de campo", "Sombra arquitetônica", "Valorização estética"],
            img: "/lp/forros-bambu/assets/images/pergolado.png"
        },
        {
            title: "Revestimento Vertical",
            badge: "🌿 Tendência",
            desc: "Transformação de muros e fachadas. Equipes preparadas para lidar com grandes superfícies e detalhes.",
            features: ["Privacidade absoluta", "Execução profissional", "Design biofílico"],
            img: "/lp/forros-bambu/assets/images/revestimento.png"
        }
    ];

    return (
        <section className="bg-[var(--bg)] py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 text-[var(--accent)] font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                        <UserCheck size={18} />
                        <span>Equipes de campo especializadas</span>
                    </div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-6">
                        Projetos sob medida em <span className="text-[var(--accent)]">qualquer região</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Desenvolvemos soluções que unem a beleza natural do bambu à excelência em execução, transformando seu espaço em um refúgio único.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
                >
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            variants={fadeUp}
                            className="bg-[var(--bg-2)] border border-[var(--border)] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col group"
                        >
                            {/* Imagem */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                                    {product.badge}
                                </span>
                                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white z-10 leading-tight">
                                    {product.title}
                                </h3>
                            </div>

                            {/* Info */}
                            <div className="p-8 flex flex-col flex-1">
                                <p className="text-[var(--text-muted)] mb-8 text-base leading-relaxed h-[4.5rem] overflow-hidden font-medium">
                                    {product.desc}
                                </p>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {product.features.map(f => (
                                        <li key={f} className="flex items-center gap-3">
                                            <Check size={16} className="text-[var(--accent)]" />
                                            <span className="text-sm font-bold text-white/80 uppercase tracking-wide">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => trackAndOpenWA(`Olá! Tenho interesse no ${product.title}. Pode me passar um orçamento?`, `Product_Click_${product.title.replace(' ', '_')}`)}
                                    className="w-full bg-white/5 hover:bg-[var(--accent)] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-[var(--accent)] group/btn"
                                >
                                    SOLICITAR ORÇAMENTO
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
