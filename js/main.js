// ===== NAVIGATION MOBILE =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Fermer le menu mobile quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // ===== SMOOTH SCROLLING =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== LIVRE DES ÂMES =====
    const openBookBtn = document.getElementById('openBookBtn');
    const closeBookBtn = document.getElementById('closeBookBtn');
    const bookOpened = document.getElementById('bookOpened');

    if (openBookBtn && closeBookBtn && bookOpened) {
        openBookBtn.addEventListener('click', function() {
            bookOpened.style.display = 'block';
            bookOpened.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        closeBookBtn.addEventListener('click', function() {
            bookOpened.style.display = 'none';
        });
    }
}); 

// ===== ARCHIVES INTERACTIVES =====
function toggleArchiveCard(buttonElement) {
    const archiveCard = buttonElement.closest('.archive-card');
    const archiveFull = archiveCard.querySelector('.archive-card-full');
    const toggleText = buttonElement.querySelector('.toggle-text');
    const isOpen = archiveFull.style.display === 'block';
    
    if (isOpen) {
        // Fermer le contenu
        archiveFull.style.display = 'none';
        buttonElement.classList.remove('active');
        toggleText.textContent = 'Lire la suite';
    } else {
        // Ouvrir le contenu
        archiveFull.style.display = 'block';
        buttonElement.classList.add('active');
        toggleText.textContent = 'Réduire';
        
        // Scroll vers le contenu ouvert
        archiveCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}