export const CONFIG = {
    wa: {
        phone: "5511992908488",
        msgHero: "Olá! Vi a página e quero um orçamento para minha área externa 😊",
        msgFloat: "Olá! Tenho interesse em forros de bambu.",
        msgFaq: "Olá! Tenho uma dúvida antes de pedir orçamento:",
        msgFinal: "Olá! Quero meu orçamento express. Posso enviar as fotos?",
        ctaHero: "Quero meu orçamento grátis →",
        ctaFloat: "Orçamento Express",
        ctaFinal: "Sim, quero resolver isso agora →",
    },
    prazo: "12h úteis",
    area: "Barueri · Alphaville · Grande SP · Interior SP",
};

export const waURL = (msg = CONFIG.wa.msgHero) =>
    `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;
