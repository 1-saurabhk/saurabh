document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Animate Power Grid Progress Bars
       ========================================== */
    const progressSpans = document.querySelectorAll('.progress-line span');

    progressSpans.forEach(span => {
        // Store target width from HTML inline style
        const targetWidth = span.style.width;
        
        // Reset to zero for smooth entry animation
        span.style.width = '0%';
        span.style.transition = 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)';

        // Trigger animation after slight delay
        setTimeout(() => {
            span.style.width = targetWidth;
        }, 300);
    });

    /* ==========================================
       2. Entrance Fade & Slide Up Animation
       ========================================== */
    const heroProfile = document.querySelector('.hero-profile');
    if (heroProfile) {
        heroProfile.style.opacity = '0';
        heroProfile.style.transform = 'translateY(25px)';
        heroProfile.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            heroProfile.style.opacity = '1';
            heroProfile.style.transform = 'translateY(0)';
        }, 150);
    }

    /* ==========================================
       3. 3D Card Tilt & Interactive Arc Reactor Glow
       ========================================== */
    const imageContainer = document.querySelector('.profile-image-container');
    const arcGlow = document.querySelector('.arc-reactor-glow');

    if (imageContainer) {
        imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate tilt angle (-10 deg to +10 deg)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            // Apply 3D perspective rotation
            imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            imageContainer.style.transition = 'transform 0.1s ease-out';

            // Light pulse follows cursor position
            if (arcGlow) {
                arcGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 210, 255, 0.5) 0%, transparent 65%)`;
            }
        });

        // Reset to original flat position on mouse leave
        imageContainer.addEventListener('mouseleave', () => {
            imageContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            imageContainer.style.transition = 'transform 0.5s ease';

            if (arcGlow) {
                arcGlow.style.background = 'radial-gradient(circle at 50% 40%, rgba(0, 210, 255, 0.3) 0%, transparent 60%)';
            }
        });
    }
});