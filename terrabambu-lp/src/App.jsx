import { useScroll, motion } from "framer-motion";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HeroPremium from "./components/HeroPremium";
import ProvaVisualPremium from "./components/ProvaVisualPremium";
import SolucaoPremium from "./components/SolucaoPremium";
import AutoridadePremium from "./components/AutoridadePremium";
import DepoimentosPremium from "./components/DepoimentosPremium";
import FAQPremium from "./components/FAQPremium";
import CTAFinalPremium from "./components/CTAFinalPremium";

export default function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#7EC850] z-[100] origin-left"
                style={{ scaleX: scrollYProgress }} />
            <WhatsAppFloat />
            <main>
                <HeroPremium />
                <ProvaVisualPremium />
                <SolucaoPremium />
                <AutoridadePremium />
                <DepoimentosPremium />
                <FAQPremium />
                <CTAFinalPremium />
            </main>
        </>
    );
}
