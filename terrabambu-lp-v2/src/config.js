export const CONFIG = {
    wa: {
        phone: "5511992908488",
        msgHero: "Olá! Vi o site e quero um orçamento para forros de bambu.",
        msgFloat: "Olá! Tenho interesse em forros de bambu.",
        msgFaq: "Olá! Tenho uma dúvida sobre os forros:",
        msgFinal: "Olá! Gostaria de uma análise técnica e orçamento para meu projeto.",
        ctaHero: "SOLICITAR ORÇAMENTO GRÁTIS",
        ctaFloat: "Falar com Consultor",
        ctaFinal: "SOLICITAR ANÁLISE TÉCNICA",
    },
    prazo: "imediata",
    area: "Atendimento em todo o Brasil",
    pixelId: "",
};

export const waURL = (msg = CONFIG.wa.msgHero) =>
    `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;

/**
 * Função central de Tracking e Redirecionamento
 */
export const trackAndOpenWA = (msg, eventName = 'WhatsApp_Lead') => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', eventName, {
            content_name: 'WhatsApp Click',
            content_category: 'Lead Generation'
        });
    }
    console.log(`[PIXEL_TRACKING] Evento disparado: ${eventName}`);
    setTimeout(() => {
        window.open(waURL(msg), '_blank', 'noopener,noreferrer');
    }, 100);
};
