// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Chiudi menu quando clicchi su un link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
});

let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
    updateActiveLangButton();
    localStorage.setItem('preferredLanguage', lang);
}

// Aggiorna il testo della pagina
function updatePageLanguage() {
    document.documentElement.lang = currentLanguage;
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = translations[currentLanguage][key];
        
        if (text) {
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = text;
            } else if (key === 'footer_copyright') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Evidenzia il pulsante lingua attivo
function updateActiveLangButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Event listeners per i pulsanti lingua
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Cookie Banner Functions
function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.add('show');
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookieBanner();
}

function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    hideCookieBanner();
}

// Cookie Banner Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const acceptBtn = document.getElementById('cookieAccept');
    const rejectBtn = document.getElementById('cookieReject');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', acceptCookies);
    }
    if (rejectBtn) {
        rejectBtn.addEventListener('click', rejectCookies);
    }

    // Mostra banner se non ancora accettato
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === null) {
        showCookieBanner();
    }

    // CTA Button scroll to menu
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Carica lingua preferita al caricamento
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) {
        changeLanguage(saved);
    } else {
        updatePageLanguage();
        updateActiveLangButton();
    }
});

// Smooth scroll per i link di navigazione
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
