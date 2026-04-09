/* 1. INIZIALIZZAZIONE GOOGLE TRANSLATE */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'it', 
        includedLanguages: 'en,fr,es,de', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // <-- La virgola qui è fondamentale!
        autoDisplay: false 
    }, 'google_translate_element');
}

/* 2. CARICAMENTO DELLO SCRIPT DI GOOGLE */
(function() {
    var gt = document.createElement('script');
    gt.type = 'text/javascript';
    gt.async = true;
    gt.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gt, s);
})();

/* 3. PULIZIA LAYOUT E CAMBIO TESTO */
document.addEventListener('DOMContentLoaded', function() {
    var observer = new MutationObserver(function() {
        // 1. Forza la rimozione del banner di Google
        var banner = document.querySelector('.goog-te-banner-frame');
        if (banner) banner.remove();
        document.body.style.top = '0px';

        // 2. Cerca TUTTI gli span dentro il widget e forza il testo
        var spans = document.querySelectorAll('.goog-te-menu-value span');
        if (spans.length > 0) {
            spans[0].textContent = '🌐 LANGUAGE'; // Cambia il testo principale
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
