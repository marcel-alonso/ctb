// ============================================================================
// Header Scroll Effect - Dynamic sizing and styling
// Uses requestAnimationFrame for optimal performance and smooth animations
// Mobile menu won't break because header height changes are transitioned smoothly
// ============================================================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let rafId = null;
    let lastScrollY = window.scrollY;
    const SCROLL_THRESHOLD = 10;

    function updateHeader() {
        const shouldBeScrolled = window.scrollY >= SCROLL_THRESHOLD;
        const isCurrentlyScrolled = header.classList.contains('is-scrolled');

        // Only update if state has changed to avoid unnecessary repaints
        if (shouldBeScrolled !== isCurrentlyScrolled) {
            header.classList.toggle('is-scrolled', shouldBeScrolled);
        }

        rafId = null;
    }

    // Optimized scroll listener with requestAnimationFrame throttling
    function onScroll() {
        lastScrollY = window.scrollY;
        
        if (!rafId) {
            rafId = requestAnimationFrame(updateHeader);
        }
    }

    // Set initial state on load based on current scroll position
    updateHeader();

    // Add listener with passive flag for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Smooth scrolling for navigation links
// ============================================================================
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header scroll effect
    initHeaderScroll();

    // Mobile menu removed: no mobile menu toggle or nav in simplified header

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Tratamento para caso de href="#" apenas
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Fecha o menu mobile se estiver aberto e for um link simples para o topo
                if (nav && nav.classList.contains('active') && mobileMenuToggle) {
                     nav.classList.remove('active');
                     mobileMenuToggle.classList.remove('active');
                }
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (nav && nav.classList.contains('active') && mobileMenuToggle) {
                    nav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Mostrar botão do WhatsApp quando seção #sobre (Soluções) estiver visível
    const whatsappBtn = document.querySelector('.whatsapp-float');
    const sobreSection = document.querySelector('#sobre');
    const WHATSAPP_SHOW_DELAY = 600; // ms
    let whatsappTimeout = null;
    let whatsappShown = false; // flag para manter visível após aparecer

    if (whatsappBtn && sobreSection && 'IntersectionObserver' in window) {
        const sobreObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !whatsappShown) {
                    // Aguarda um pequeno delay antes de exibir
                    whatsappTimeout = setTimeout(() => {
                        whatsappBtn.classList.add('visible');
                        whatsappShown = true; // marca como exibido para não esconder
                        // não precisamos mais observar a seção
                        try { sobreObserver.unobserve(sobreSection); } catch(e){}
                    }, WHATSAPP_SHOW_DELAY);
                } else {
                    // Se ainda não apareceu, cancelar timeout quando sair da seção
                    if (!entry.isIntersecting && whatsappTimeout && !whatsappShown) {
                        clearTimeout(whatsappTimeout);
                        whatsappTimeout = null;
                    }
                    // NÃO removemos a classe 'visible' quando sair — deve permanecer após aparecer
                }
            });
        }, { threshold: 0.35 }); // quando ~35% da seção estiver visível

        sobreObserver.observe(sobreSection);
    } else if (whatsappBtn) {
        // Fallback: exibe o botão após um delay simples se IntersectionObserver não suportado
        setTimeout(() => whatsappBtn.classList.add('visible'), 1200);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1, // Inicia a animação quando 10% do elemento está visível
        rootMargin: '0px 0px -50px 0px' // Antecipa a animação em 50px da parte inferior
    };

    const observerCallback = function(entries, observerInstance) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerInstance.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.benefit-card, .specialty-card, .animated-item');
    elementsToAnimate.forEach(card => {
        observer.observe(card);
    });

    // Intersection Observer para o efeito de zoom no banner
    const imagineBanner = document.querySelector('.imagine-banner');
    const zoomObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imagineBanner.classList.add('active');
            } else {
                imagineBanner.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do banner estiver visível
    });

    if (imagineBanner) {
        zoomObserver.observe(imagineBanner);
    }

    // WhatsApp tracking (optional)
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track WhatsApp click event
            // console.log('WhatsApp button clicked: ' + this.href); // Removido console.log de produção
            // You can add analytics tracking here, e.g., gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': this.href});
        });
    });

    // O código de Lazy loading para imagens foi removido pois não está sendo utilizado no HTML atual.
    // Se for necessário no futuro, pode ser reintroduzido.
    /*
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries, imgObserver) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                    imgObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    */

    /* ===== Media transitions: fade-in media when they enter the viewport ===== */
    (function(){
      try {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const targets = [];
        const heroBg = document.querySelector('.hero-background');
        const heroImg = document.querySelector('.imagine-bg-image');

        if (heroBg) {
          heroBg.classList.add('media-fade-in');
          targets.push(heroBg);
        }
        if (heroImg) {
          heroImg.classList.add('media-fade-in');
          targets.push(heroImg);
        }

        if (targets.length === 0) return;

        const io = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              obs.unobserve(entry.target); // anima uma vez
            }
          });
        }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

        targets.forEach(t => io.observe(t));
      } catch (e) {
        // fail silently; não é crítico
        console.error('media transitions init failed', e);
      }
    })();
});
