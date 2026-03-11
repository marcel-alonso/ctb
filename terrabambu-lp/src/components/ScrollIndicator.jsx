import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({ label = "Continuar Lendo", color = "var(--accent)" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="flex flex-col items-center justify-center py-8 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color }}>{label}</span>
            <ChevronDown size={20} style={{ color }} />
        </motion.div>
    );
}
