// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // On récupère toutes les cartes
    const cards = document.querySelectorAll('.card');
    
    // Fonction qui s'exécute quand on scroll
    function handleScroll() {
        // Pour chaque carte
        cards.forEach(function(card, index) {
            // On récupère la position de la carte
            const cardRect = card.getBoundingClientRect();
            const cardTop = cardRect.top;
            
            // Distance depuis le haut de la fenêtre
            const scrollProgress = Math.max(0, -cardTop);
            
            // On calcule l'échelle (la carte rétrécit légèrement)
            const scale = Math.max(0.85, 1 - (scrollProgress / 3000));
            
            // On calcule le décalage vertical (les cartes se décalent)
            const translateY = Math.min(scrollProgress / 50, 20);
            
            // On récupère le contenu de la carte
            const cardContent = card.querySelector('.card-content');
            
            // On applique les transformations
            if (cardTop <= 0) {
                cardContent.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                cardContent.style.opacity = scale;
            } else {
                cardContent.style.transform = 'scale(1) translateY(0)';
                cardContent.style.opacity = '1';
            }
        });
    }
    
    // On écoute l'événement scroll
    window.addEventListener('scroll', handleScroll);
    
    // On lance une première fois au chargement
    handleScroll();
});

// Animation des particules de poussière dans le hero
        function createDustParticles() {
            const hero = document.querySelector('.hero');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('dust-particle');
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;
                particle.style.animationDelay = Math.random() * 2 + 's';
                hero.appendChild(particle);
            }
        }

        createDustParticles();

        // Observer pour les animations au scroll
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observer tous les éléments animés
        const animatedElements = document.querySelectorAll('.event-card, .about-image');
        animatedElements.forEach(function(element) {
            observer.observe(element);
        });

        // Scroll fluide
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Effet sur le header au scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animation du bouton CTA
//        const ctaButton = document.querySelector('.cta-button');
 //       ctaButton.addEventListener('click', function(e) {
//            e.preventDefault();
 //           alert('Merci pour votre intérêt ! Les inscriptions ouvriront bientôt. Nous vous tiendrons informé par email.');
 //       });
