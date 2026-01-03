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

// Carica lingua preferita al caricamento
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) {
        changeLanguage(saved);
    } else {
        updatePageLanguage();
        updateActiveLangButton();
    }
});
