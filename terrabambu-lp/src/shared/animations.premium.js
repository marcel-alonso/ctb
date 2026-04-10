// ════════════════════════════════════════════════════
// PREMIUM ANIMATIONS - Forros Bambu
// Inspirado em Apple, Google, Meta
// ════════════════════════════════════════════════════

// ─── FADE UP (APPLE STYLE) ───
export const fadeUpPremium = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// ─── SCALE REVEAL (GOOGLE STYLE) ───
export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

// ─── FADE IN ───
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

// ─── SLIDE LEFT ───
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// ─── SLIDE RIGHT ───
export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// ─── STAGGER CONTAINER ───
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// ─── STAGGER SLOW ───
export const staggerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

// ─── GLOW PULSE (META STYLE) ───
export const glowPulse = {
  initial: { boxShadow: '0 0 0 0 rgba(126,200,80,0.4)' },
  animate: {
    boxShadow: '0 0 0 20px rgba(126,200,80,0)',
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

// ─── GLOW PULSE GOLD ───
export const glowPulseGold = {
  initial: { boxShadow: '0 0 0 0 rgba(212,168,66,0.3)' },
  animate: {
    boxShadow: '0 0 0 20px rgba(212,168,66,0)',
    transition: {
      duration: 2.5,
      repeat: Infinity
    }
  }
};

// ─── HOVER LIFT ───
export const hoverLift = {
  initial: { y: 0, boxShadow: 'var(--shadow-sm)' },
  whileHover: {
    y: -8,
    boxShadow: 'var(--shadow-lg)',
    transition: { duration: 0.3 }
  }
};

// ─── HOVER SCALE ───
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: {
    scale: 0.98
  }
};

// ─── FLOAT SUBTLE ───
export const floatSubtle = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
};

// ─── ROTATE SUBTLE ───
export const rotateSubtle = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity
    }
  }
};

// ─── BOUNCE ENTER ───
export const bounceEnter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      duration: 0.6
    }
  }
};

// ─── EXPAND ───
export const expand = {
  hidden: {
    opacity: 0,
    height: 0,
    overflow: 'hidden'
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// ─── BLUR IN ───
export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6 }
  }
};

// ─── SHIMMER ───
export const shimmer = {
  animate: {
    backgroundPosition: ['-1000px 0', '1000px 0'],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

// ─── SCROLL INDICATOR ───
export const scrollIndicator = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

// ─── TEXT REVEAL ───
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// ─── PARALLAX ───
export const parallax = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut'
    }
  }
};

// ─── BACKDROP FADE ───
export const backdropFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// ─── MODAL SCALE ───
export const modalScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

// ─── SLIDE DOWN ───
export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

// ─── SLIDE UP ───
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

// ─── COMBO: FADE + SCALE + STAGGER ───
export const containerFadeScale = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemFadeScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// ─── PROGRESS BAR ───
export const progressBar = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 }
};
