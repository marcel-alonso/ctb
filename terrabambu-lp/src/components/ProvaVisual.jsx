import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeUp, stagger, fadeIn } from "../shared/animations";

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
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800"
    ];

    return (
        <section className="bg-[var(--bg-light)] text-[var(--text-dark)] py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Números Animados */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    <motion.div variants={fadeUp} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--accent-dark)] mb-2">
                            +<AnimatedCounter target={200} />
                        </h3>
                        <p className="text-sm md:text-base font-medium opacity-80">Projetos Entregues</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--accent-dark)] mb-2">
                            <AnimatedCounter target={12} delay={0.1} suffix="h" />
                        </h3>
                        <p className="text-sm md:text-base font-medium opacity-80">Orçamento Express</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--accent-dark)] mb-2">
                            <AnimatedCounter target={100} delay={0.2} suffix="%" />
                        </h3>
                        <p className="text-sm md:text-base font-medium opacity-80">Sob Medida</p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--accent-dark)] mb-2">
                            <AnimatedCounter target={10} delay={0.3} suffix="+" />
                        </h3>
                        <p className="text-sm md:text-base font-medium opacity-80">Anos de Experiência</p>
                    </motion.div>
                </motion.div>

                {/* Galeria */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformação Real</h2>
                        <p className="text-lg opacity-70">Deslize pelas nossas execuções recentes de forros de bambu em áreas de lazer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="relative h-64 md:h-80 overflow-hidden rounded-xl group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <img
                                    src={img}
                                    alt={`Projeto Conexão Terra Bambu ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
