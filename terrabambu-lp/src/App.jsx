import { useScroll, motion } from "framer-motion";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./components/Hero";
import ProvaVisual from "./components/ProvaVisual";
import Solucao from "./components/Solucao";
import Autoridade from "./components/Autoridade";
import ComoFunciona from "./components/ComoFunciona";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";

export default function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#7EC850] z-[100] origin-left"
                style={{ scaleX: scrollYProgress }} />
            <WhatsAppFloat />
            <main>
                <Hero />
                <ProvaVisual />
                <Solucao />
                <Autoridade />
                <ComoFunciona />
                <Depoimentos />
                <FAQ />
                <CTAFinal />
            </main>
        </>
    );
}
