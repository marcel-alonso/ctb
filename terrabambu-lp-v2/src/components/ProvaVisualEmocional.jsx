import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card, Badge } from "./base";
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

export default function ProvaVisualEmocional() {
    const images = [
        { url: restaurantImg, label: "Arquitetura e Gastronomia" },
        { url: poolImg, label: "Lounge com Piscina" },
        { url: spaImg, label: "Área de Spa" },
        { url: varandaImg, label: "Varanda e Estilo de Vida" }
    ];

    const stats = [
        { target: 3000, prefix: "+", suffix: "m²", label: "Transformados", delay: 0 },
        { target: 10, suffix: "+", label: "Anos no Mercado", delay: 0.3 },
        { target: 0, label: "Ecológico", subLabel: "Design Premium e Sustentável", isLabel: true, delay: 0.6 },
        { target: 10, label: "Anos de Garantia", isSimple: true, delay: 0.9 }
    ];

    return (
        <Section variant="light" className="!pt-6 !pb-12 md:!pt-8 md:!pb-16 overflow-hidden">
            <Container>
                {/* Stats — cascade de anticipation (cada numero aparece 0.3s apos o anterior) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerSlow}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 py-5 border-y border-[var(--accent)]/10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUpPremium}
                                className="flex flex-row items-center justify-center gap-3"
                            >
                                <h3 className="text-3xl md:text-4xl font-black text-[var(--bg)] tracking-tighter whitespace-nowrap">
                                    {stat.isLabel ? (
                                        stat.label
                                    ) : stat.isSimple ? (
                                        stat.target
                                    ) : (
                                        <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} delay={stat.delay} />
                                    )}
                                </h3>
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[var(--accent-dark)] text-left opacity-80 leading-snug">
                                    {stat.isLabel ? stat.subLabel : stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerSlow}
                >
                    <div className="text-center md:text-left mb-12">
                        <motion.div variants={fadeUpPremium} className="flex justify-center md:justify-start">
                            <Badge icon={Star} label="Excelência em Execução" variant="gold" className="mb-6" />
                        </motion.div>
                        <motion.h2 variants={fadeUpPremium} className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-[var(--text-dark)]">
                            Inspirando <span className="text-[var(--accent-dark)]">novos momentos</span>
                        </motion.h2>
                        <motion.p variants={fadeUpPremium} className="text-lg md:text-xl opacity-70 leading-relaxed font-medium text-[var(--text-dark)] max-w-2xl">
                            Cada projeto é uma peça única, desenhada para se integrar harmonicamente à sua arquitetura e ao seu estilo de vida.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Gallery — mobile: horizontal scroll (1.5 cards visiveis = convite ao swipe) */}
                {/* Desktop: grid normal 4 colunas */}
                <div className="hidden md:grid md:grid-cols-4 gap-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <GalleryCard img={img} />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: horizontal swipeable carousel */}
                <div className="md:hidden -mx-6">
                    <motion.div
                        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="flex-shrink-0 w-[75vw] snap-center"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GalleryCard img={img} />
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* Swipe hint dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--accent-dark)]' : 'bg-[var(--accent-dark)]/30'}`} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <ScrollIndicator color="var(--accent-dark)" label="Veja Nossas Solucoes" />
                </div>
            </Container>
        </Section>
    );
}

/* Gallery Card — titulo sempre visivel em mobile, hover-reveal em desktop */
function GalleryCard({ img }) {
    return (
        <Card interactive elevated className="relative aspect-[3/4] p-0 group overflow-hidden border-none rounded-[2.5rem]">
            <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
            />
            {/* Gradient — always visible on mobile for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 md:opacity-60 md:group-hover:opacity-80 transition-opacity duration-500" />

            {/* Title — always visible on mobile (no hover), reveal on desktop */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">{img.label}</h4>
            </div>
        </Card>
    );
}
