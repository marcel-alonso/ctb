import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeUp, stagger, fadeIn } from "../shared/animations";
import { Star } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";
import gourmetImg from "@assets/images/gourmet-churrasqueira.jpg";
import pergolaoImg from "@assets/images/pergolado-black-grid.jpg";
import tetoImg from "@assets/images/teto-ventilador.jpg";
import revestimentoImg from "@assets/images/bambu-paralelo-ecobans.jpg";

const AnimatedCounter = ({ target, suffix = "", delay = 0 }) => {
    const count = useMotionValue(0);
    const spring = useSpring(count, { stiffness: 70, damping: 18 });
    const rounded = useTransform(spring, v => Math.round(v));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                spring.set(target);
            }, delay * 1000);
        }
    }, [isInView, spring, target, delay]);

    return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
};

export default function ProvaVisual() {
    const images = [
        { url: gourmetImg, label: "Área Gourmet Churrasqueira" },
        { url: pergolaoImg, label: "Pergolado Contemporâneo" },
        { url: tetoImg, label: "Forro com Ventilador" },
        { url: revestimentoImg, label: "Acabamento Ecobans" }
    ];

    return (
        <section className="bg-[var(--bg-light)] text-[var(--text-dark)] py-20 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Prova Social em Números - Gatilho de Escala */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20"
                >
                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="w-16 h-1 w-full bg-[var(--accent)]/30 rounded-full mb-6" />
                        <h3 className="text-4xl md:text-6xl font-black text-[var(--bg)] mb-2 tracking-tighter">
                            <AnimatedCounter target={3000} delay={0.1} suffix="m²" />
                        </h3>
                        <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[var(--accent-dark)] text-center">Transformados</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="w-16 h-1 w-full bg-[var(--accent)]/30 rounded-full mb-6" />
                        <h3 className="text-4xl md:text-6xl font-black text-[var(--bg)] mb-2 tracking-tighter">
                            <AnimatedCounter target={10} delay={0.2} suffix="+" />
                        </h3>
                        <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[var(--accent-dark)] text-center">No Mercado</p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="w-16 h-1 w-full bg-[var(--accent)]/30 rounded-full mb-6" />
                        <h3 className="text-4xl md:text-6xl font-black text-[var(--bg)] mb-2 tracking-tighter">
                            Ecológico
                        </h3>
                        <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[var(--accent-dark)] text-center">Design Premium e Sustentável</p>
                    </motion.div>
                </motion.div>

                {/* Faixa Extra de Destaque */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-28 py-8 border-y border-[var(--accent)]/10"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-3xl md:text-5xl font-black text-[var(--accent-dark)]">10</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">de Garantia <br/> em Áreas Cobertas</span>
                    </div>
                </motion.div>

                {/* Galeria de Alta Aspiração */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-2xl mx-auto md:mx-0">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-[var(--accent-dark)] font-bold uppercase tracking-widest text-xs">
                                <Star size={16} fill="currentColor" />
                                <span>Excelência em Execução</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[1.1]">Inspirando <span className="text-[var(--accent-dark)]">novos momentos</span></h2>
                            <p className="text-lg md:text-xl opacity-70 leading-relaxed font-medium">Cada projeto é uma peça única, desenhada para se integrar harmonicamente à sua arquitetura e ao seu estilo de vida.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="relative aspect-[3/4] overflow-hidden rounded-3xl group shadow-2xl"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img.url}
                                    alt={img.label}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="text-white">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-1 text-[var(--accent)]">Projeto Real</p>
                                        <h4 className="text-xl font-bold">{img.label}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="mt-20">
                    <ScrollIndicator color="var(--accent-dark)" label="Depoimentos Reais" />
                </div>
            </div>
        </section>
    );
}
