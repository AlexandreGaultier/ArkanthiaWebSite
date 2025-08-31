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
            // Afficher la première page par défaut
            document.getElementById('pageCircé').style.display = 'block';
            document.getElementById('pageAzael').style.display = 'none';
            bookOpened.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        closeBookBtn.addEventListener('click', function() {
            bookOpened.style.display = 'none';
        });
    }

    // ===== NAVIGATION ENTRE LES PAGES DU LIVRE =====
    const nextPageBtn = document.getElementById('nextPageBtn');
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn2 = document.getElementById('nextPageBtn2');
    const previousPageBtn2 = document.getElementById('previousPageBtn2');
    const closeBookBtn2 = document.getElementById('closeBookBtn2');

    if (nextPageBtn && previousPageBtn && nextPageBtn2 && previousPageBtn2 && closeBookBtn2) {
        // Navigation depuis la page Circé
        nextPageBtn.addEventListener('click', function() {
            document.getElementById('pageCircé').style.display = 'none';
            document.getElementById('pageAzael').style.display = 'block';
        });

        previousPageBtn.addEventListener('click', function() {
            document.getElementById('pageCircé').style.display = 'block';
            document.getElementById('pageAzael').style.display = 'none';
        });

        // Navigation depuis la page Azael
        nextPageBtn2.addEventListener('click', function() {
            document.getElementById('pageAzael').style.display = 'none';
            document.getElementById('pageCircé').style.display = 'block';
        });

        previousPageBtn2.addEventListener('click', function() {
            document.getElementById('pageAzael').style.display = 'none';
            document.getElementById('pageCircé').style.display = 'block';
        });

        // Fermer le livre depuis la page Azael
        closeBookBtn2.addEventListener('click', function() {
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