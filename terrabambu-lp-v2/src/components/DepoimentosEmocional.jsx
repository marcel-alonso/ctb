import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { useRef, useState } from "react";
import { fadeUpPremium, staggerSlow } from "../shared/animations.premium";
import { Section, Container, Card } from "./base";

const testimonials = [
  {
    name: "Ricardo S.",
    location: "Alphaville, SP",
    rating: 5,
    text: "O conforto termico mudou completamente nossa varanda. Alem de lindo, o atendimento foi impecavel.",
    initials: "RS"
  },
  {
    name: "Mariana L.",
    location: "Interior de SP",
    rating: 5,
    text: "Equipe extremamente limpa e rapida. O bambu trancado deu o toque de luxo que faltava no nosso spa.",
    initials: "ML"
  },
  {
    name: "Andre M.",
    location: "Sao Paulo, SP",
    rating: 5,
    text: "Superou as expectativas. O acabamento artesanal e diferenciado. Vale cada centavo.",
    initials: "AM"
  }
];

function VideoTestimonial() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (navigator.vibrate) navigator.vibrate(10);

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => setIsPlaying(false);

  return (
    <motion.div
      variants={fadeUpPremium}
      className="relative max-w-3xl mx-auto mb-16 rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer"
      onClick={handlePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}videos/depoimento.mp4`}
        className="w-full aspect-video object-cover"
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {/* Overlay — fades out when playing */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Play Button — glass morphism */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl"
        >
          <Play size={36} className="text-white ml-1.5 fill-white" />
        </motion.div>

        {/* Label */}
        <p className="mt-5 text-sm md:text-base font-bold text-white/80 uppercase tracking-[0.2em]">
          Assistir depoimento
        </p>
      </div>

      {/* Bottom info — always visible */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
            <span className="text-xs font-black text-[var(--accent)]">★</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Depoimento Real</p>
            <p className="text-white/50 text-xs font-medium">Cliente Conexão Terra Bambu</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DepoimentosEmocional() {
  return (
    <Section variant="dark" className="overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="text-center mb-14 relative"
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            O que dizem nossos <span className="text-[var(--accent)]">clientes</span>
          </motion.h2>

          {/* Video Testimonial — Cinema Card */}
          <VideoTestimonial />
        </motion.div>

        {/* Desktop: grid 3 colunas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={fadeUpPremium}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll (stories pattern) */}
        <div className="md:hidden -mx-6 relative z-10">
          <div
            className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="flex-shrink-0 w-[85vw] snap-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--accent)]' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(126,200,80,0.05),transparent_50%)] pointer-events-none" />
    </Section>
  );
}

function TestimonialCard({ t }) {
  return (
    <Card interactive elevated className="flex flex-col h-full p-7 md:p-8 bg-white/[0.02]">
      <div className="flex gap-1 mb-5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
        ))}
      </div>

      <p className="text-base md:text-lg text-white mb-6 flex-1 italic leading-relaxed">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author — iniciais estilizadas */}
      <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/5">
        <div className="w-11 h-11 rounded-full bg-[var(--accent)]/15 flex items-center justify-center">
          <span className="text-sm font-black text-[var(--accent)] tracking-tight">
            {t.initials}
          </span>
        </div>
        <div>
          <p className="font-bold text-white text-base">{t.name}</p>
          <p className="text-xs text-[var(--text-muted)] font-medium">{t.location}</p>
        </div>
      </div>
    </Card>
  );
}
