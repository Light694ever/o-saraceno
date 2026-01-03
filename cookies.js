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
});
