import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CONFIG, trackAndOpenWA } from "../config";

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3"
                >
                    {/* Tooltip de urgência/ajuda */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3 }}
                        className="bg-white text-[var(--bg)] text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl border border-black/5 whitespace-nowrap mb-1"
                    >
                        Pode enviar fotos aqui? 👇
                    </motion.div>

                    <button
                        onClick={() => trackAndOpenWA(CONFIG.wa.msgFloat, 'Float_WA_Click')}
                        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 md:px-6 md:py-4 rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{ animation: 'waPulse 3s infinite' }}
                        aria-label="Falar no WhatsApp"
                    >
                        <MessageCircle size={24} fill="currentColor" />
                        <span className="hidden md:block font-bold text-sm uppercase tracking-wider">
                            {CONFIG.wa.ctaFloat}
                        </span>

                        {/* Red dot notification */}
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
