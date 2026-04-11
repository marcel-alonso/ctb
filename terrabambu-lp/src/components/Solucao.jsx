import { motion } from "framer-motion";
import { fadeUp, stagger } from "../shared/animations";
import { Check, ArrowRight, UserCheck } from "lucide-react";
import { CONFIG, trackAndOpenWA } from "../config";
import ScrollIndicator from "./ScrollIndicator";
import forroRetoImg from "@assets/images/forro-reto.png";
import gourmetImg from "@assets/images/gourmet-churrasqueira.jpg";
import panelTrancadoImg from "@assets/images/panel-trancado.jpg";
import pergolaoImg from "@assets/images/pergolado-completo.jpeg";
import revestimentoImg from "@assets/images/bambu-paralelo-ecobans.jpg";

export default function Solucao() {
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
            features: ["bambu ripado e trançado", "Conforto Térmico e Acústico", "Durabilidade Premium"],
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
        <section className="bg-[var(--bg)] py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-2 text-[var(--gold)] font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">
                        <UserCheck size={16} />
                        <span>Equipes de campo especializadas</span>
                    </div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter leading-tight">
                        Recupere sua <span className="text-[var(--accent)]">área externa</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Diga adeus ao calor excessivo. Nossas soluções de bambu reduzem a temperatura e trazem o conforto que sua varanda ou pergolado merece.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
                >
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            variants={fadeUp}
                            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-500 hover:border-[var(--accent)]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Imagem com Overlay Dinâmico */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/20 to-transparent opacity-80" />
                                
                                {/* Badge Flutuante Premium */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                        {product.badge}
                                    </span>
                                </div>

                                <h3 className="absolute bottom-8 left-8 text-2xl font-black text-white z-10 leading-none tracking-tighter group-hover:text-[var(--accent)] transition-colors">
                                    {product.title}
                                </h3>
                            </div>

                            {/* Info Wrapper com Flex para Alinhamento Perfeito */}
                            <div className="p-8 pb-10 flex flex-col flex-1 h-full">
                                {/* Lista de Benefícios - Sempre alinhada no topo do corpo */}
                                <ul className="space-y-5 mb-10 flex-1">
                                    {product.features.map(f => (
                                        <li key={f} className="flex items-start gap-3 group/item">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[var(--accent)] transition-colors duration-300">
                                                <Check size={12} className="text-[var(--accent)] group-hover/item:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-white/70 uppercase tracking-widest leading-normal pt-0.5">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Botão de Ação Minimalista e Premium */}
                                <button
                                    onClick={() => trackAndOpenWA(`Olá! Tenho interesse no ${product.title}. Pode me passar um orçamento?`, `Product_Click_${product.title.replace(' ', '_')}`)}
                                    className="relative w-full overflow-hidden bg-white/5 hover:bg-[var(--accent)] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 border border-white/10 hover:border-[var(--accent)] group/btn text-[10px] tracking-[0.2em]"
                                >
                                    <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
                                    <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20">
                    <ScrollIndicator color="var(--accent-dark)" label="Ver nossa autoridade" />
                </div>
            </div>
        </section>
    );
}
