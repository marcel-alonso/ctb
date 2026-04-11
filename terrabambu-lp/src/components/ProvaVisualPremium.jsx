import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Grid, Card, Badge } from "./base";
import ScrollIndicator from "./ScrollIndicator";

import restaurantImg from "@assets/images/gallery-restaurant.jpg";
import poolImg from "@assets/images/gallery-pool.jpg";
import spaImg from "@assets/images/gallery-spa.jpg";
import varandaImg from "@assets/images/gallery-varanda.jpg";

const AnimatedCounter = ({ target, prefix = "", suffix = "", delay = 0 }) => {
    const count = useMotionValue(0);
    const spring = useSpring(count, { stiffness: 60, damping: 20 });
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

    return <span ref={ref}>{prefix}<motion.span>{rounded}</motion.span>{suffix}</span>;
};

export default function ProvaVisualPremium() {
    const images = [
        { url: restaurantImg, label: "Arquitetura e Gastronomia", tag: "Design" },
        { url: poolImg, label: "Lounge com Piscina", tag: "Lazer" },
        { url: spaImg, label: "Área de Spa", tag: "Bem-estar" },
        { url: varandaImg, label: "Varanda e Estilo de Vida", tag: "Conforto" }
    ];

    const stats = [
        { target: 3000, prefix: "+", suffix: "m²", label: "Transformados" },
        { target: 10, suffix: "+", label: "Anos no Mercado" },
        { target: 0, label: "Ecológico", subLabel: "Design Premium e Sustentável", isLabel: true },
        { target: 10, label: "Anos de Garantia", isSimple: true }
    ];

    return (
        <Section variant="light" className="overflow-hidden">
            <Container>
                {/* Stats Grid Premium */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerSlow}
                >
                    <Grid cols={{ default: 1, md: 4 }} gap="gap-4" className="mb-10 py-6 border-y border-[var(--accent)]/10">
                        {stats.map((stat, i) => (
                            <motion.div key={i} variants={fadeUpPremium} className="flex flex-row items-center justify-center gap-3">
                                <h3 className="text-3xl md:text-4xl font-black text-[var(--bg)] tracking-tighter whitespace-nowrap">
                                    {stat.isLabel ? (
                                        stat.label
                                    ) : stat.isSimple ? (
                                        stat.target
                                    ) : (
                                        <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} delay={i * 0.1} />
                                    )}
                                </h3>
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[var(--accent-dark)] text-left opacity-80 leading-tight">
                                    {stat.isLabel ? stat.subLabel : stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </Grid>
                </motion.div>

                {/* Galeria Premium */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerSlow}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
                        <div className="max-w-2xl mx-auto md:mx-0">
                            <motion.div variants={fadeUpPremium}>
                                <Badge icon={Star} label="Excelência em Execução" variant="gold" className="mb-6 justify-center md:justify-start" />
                            </motion.div>
                            <motion.h2 variants={fadeUpPremium} className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-[var(--text-dark)]">
                                Inspirando <span className="text-[var(--accent-dark)]">novos momentos</span>
                            </motion.h2>
                            <motion.p variants={fadeUpPremium} className="text-xl opacity-70 leading-relaxed font-medium text-[var(--text-dark)]">
                                Cada projeto é uma peça única, desenhada para se integrar harmonicamente à sua arquitetura e ao seu estilo de vida.
                            </motion.p>
                        </div>
                    </div>

                    <Grid cols={{ default: 1, sm: 2, lg: 4 }} gap="gap-6">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUpPremium}
                            >
                                <Card interactive elevated className="relative aspect-[3/4] p-0 group overflow-hidden border-none rounded-[2.5rem]">
                                    <img
                                        src={img.url}
                                        alt={img.label}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                    
                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-2xl md:text-3xl font-bold leading-tight text-white">{img.label}</h4>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </Grid>
                </motion.div>

                <div className="mt-16 flex justify-center">
                    <ScrollIndicator color="var(--accent-dark)" label="Depoimentos Reais" />
                </div>
            </Container>
        </Section>
    );
}
