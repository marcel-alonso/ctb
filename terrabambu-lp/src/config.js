export const CONFIG = {
    wa: {
        phone: "5511992908488",
        msgHero: "Olá! Vi o site e quero um orçamento para forros de bambu.",
        msgFloat: "Olá! Tenho interesse em forros de bambu.",
        msgFaq: "Olá! Tenho uma dúvida sobre os forros:",
        msgFinal: "Olá! Quero meu orçamento agora. Como envio as fotos?",
        ctaHero: "SOLICITAR ORÇAMENTO GRÁTIS",
        ctaFloat: "Falar com Consultor",
        ctaFinal: "QUERO MEU ORÇAMENTO AGORA",
    },
    prazo: "12h úteis",
    area: "Atendimento em todo o Brasil · Foco em SP",
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
