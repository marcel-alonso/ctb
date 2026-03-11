import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeUp, stagger } from "../shared/animations";

const AnimatedCounter = ({ target, suffix = "" }) => {
    const count = useMotionValue(0);
    const spring = useSpring(count, { stiffness: 70, damping: 18 });
    const rounded = useTransform(spring, v => Math.round(v));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            spring.set(target);
        }
    }, [isInView, spring, target]);

    return (
        <span ref={ref} className="font-bold">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

export default function ProvaVisual() {
    const images = [
        "/assets/lp/forros-bambu/aplicacao-forro-01-1600.webp",
        "/assets/lp/forros-bambu/entrelaçado-instalado-01-1600.webp",
        "/assets/lp/forros-bambu/filepa-instalado-01-1600.webp",
        "/assets/lp/forros-bambu/rolico-instalado-01-1600.webp"
    ];

    return (
        <section className="py-24 bg-[var(--bg-light)] text-[var(--text-dark)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Numbers */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
                >
                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-[var(--accent)] mb-2">
                            +<AnimatedCounter target={200} />
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            Projetos em SP
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-[var(--accent)] mb-2">
                            <AnimatedCounter target={100} suffix="%" />
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            Sob Medida
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-[var(--accent)] mb-2">
                            <AnimatedCounter target={12} suffix="h" />
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            Orçamento Express
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-[var(--accent)] mb-2">
                            <AnimatedCounter target={5} />
                            <span className="text-[var(--gold)] ml-1">★</span>
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
                            Avaliação Média
                        </div>
                    </motion.div>
                </motion.div>

                {/* Gallery */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={src}
                                alt={`Projeto Terra Bambu ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
