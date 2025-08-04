// FAQ functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('faq-search');
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    const questions = document.querySelectorAll('.faq-question');
    
    // Search functionality
    searchInput?.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Toggle active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            faqItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Accordion functionality
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other answers
            questions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current answer
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
            
            // Track view in analytics
            if (!isExpanded) {
                trackFaqView(question.textContent);
            }
        });
    });
    
    // Feedback system
    const feedbackButtons = document.querySelectorAll('.feedback-btn');
    feedbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            const feedback = button.dataset.feedback;
            const questionId = button.closest('.faq-item').dataset.id;
            
            // Track feedback in analytics
            trackFaqFeedback(questionId, feedback);
            
            // Show thank you message
            const feedbackSection = button.closest('.faq-feedback');
            feedbackSection.innerHTML = '<p>Obrigado pelo feedback!</p>';
        });
    });
});

// Analytics tracking functions
function trackFaqView(question) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_view', {
            'event_category': 'FAQ',
            'event_label': question
        });
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'FAQView', {
            question: question
        });
    }
}

function trackFaqFeedback(questionId, feedback) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_feedback', {
            'event_category': 'FAQ',
            'event_label': questionId,
            'feedback': feedback
        });
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'FAQFeedback', {
            questionId: questionId,
            feedback: feedback
        });
    }
}

// Smooth scroll to top
const scrollToTop = document.querySelector('.scroll-to-top');
if (scrollToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
    });

    scrollToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
