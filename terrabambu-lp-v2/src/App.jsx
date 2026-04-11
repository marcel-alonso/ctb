import { useScroll, motion } from "framer-motion";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HeroEmocional from "./components/HeroEmocional";
import ProvaVisualEmocional from "./components/ProvaVisualEmocional";
import SolucoesEmocional from "./components/SolucoesEmocional";
import DepoimentosEmocional from "./components/DepoimentosEmocional";
import FAQEmocional from "./components/FAQEmocional";
import CTAFinalEmocional from "./components/CTAFinalEmocional";

export default function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#7EC850] z-[100] origin-left"
                style={{ scaleX: scrollYProgress }} />
            <WhatsAppFloat />
            <main>
                <HeroEmocional />
                <ProvaVisualEmocional />
                <SolucoesEmocional />
                <DepoimentosEmocional />
                <FAQEmocional />
                <CTAFinalEmocional />
            </main>
        </>
    );
}
