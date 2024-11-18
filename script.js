// Ensure the page starts at the top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Loading Screen and Content Animations
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const loadingScreenDisplayTime = 2; // Display time before fade-out (in seconds)
    const loadingScreenFadeOutTime = 0.5;  // Fade-out duration (in seconds)

    // Use GSAP Timeline for precise control
    const tl = gsap.timeline();

    // Animate the loading text (fade in and out)
    tl.to(loadingText, {
        opacity: 0.5,
        duration: 0.5,
        yoyo: true,
        repeat: (loadingScreenDisplayTime / 0.5) - 1,
        ease: 'power1.inOut'
    });

    // Fade out the loading screen and loading text together
    tl.to([loadingScreen, loadingText], {
        opacity: 0,
        duration: loadingScreenFadeOutTime,
        ease: 'power2.out',
        onComplete: () => {
            loadingScreen.style.display = 'none';
        }
    });

    // Start content animations after loading screen fade-out
    if (document.querySelector('.hero-content')) {
        // Animations for index.html
        tl.from('.hero-content h1', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        })
            .from('.hero-content p', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8') // Overlap by 0.8 seconds
            .from('.hero-buttons', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8')
            .from('.neocities-banner', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8')
            .from('.hero-credits', {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8');
    } else if (document.querySelector('.photography-section')) {
        // Animations for photography.html
        tl.from('.photography-section h2', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        })
            .from('.widget-container', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.5')
            .from('.qr-code-container', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.5')
            .from('.button1', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.5');
    }

    // Section Reveal Animations (for scrolling)
    gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
        });
    });
});
