document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.module-card, .identification-list li, .glass-panel, .bonus-card');
    
    // Initial setup
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    const revealElements = () => {
        const windowHeight = window.innerHeight;
        const revealTop = 100; // trigger point
        
        elementsToReveal.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if(elementTop < windowHeight - revealTop) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', revealElements);
    // Trigger on load
    revealElements();
});
