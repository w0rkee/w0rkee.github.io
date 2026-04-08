/* FUNZIONE PER INIZIALIZZARE GOOGLE TRANSLATE */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'it', // Lingua originale del tuo sito
        includedLanguages: 'en,fr,es,de', // Lingue in cui vuoi tradurre
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        autoDisplay: false // Evita che appaia la barra in alto automaticamente
    }, 'google_translate_element');
}

/* CARICAMENTO DELLO SCRIPT DI GOOGLE */
(function() {
    var gt = document.createElement('script');
    gt.type = 'text/javascript';
    gt.async = true;
    gt.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gt, s);
})();

/* 3. PULIZIA LAYOUT */
document.addEventListener('DOMContentLoaded', function() {
    var observer = new MutationObserver(function(mutations) {
        // Rimuove la barra superiore
        var banner = document.querySelector('.goog-te-banner-frame');
        if (banner) banner.style.display = 'none';
        
        // Blocca il salto del sito verso il basso
        if (document.body.style.top !== '0px') {
            document.body.style.top = '0px';
        }

        // Rende il testo più compatto
        var gadgetText = document.querySelector('.goog-te-menu-value span:first-child');
        if (gadgetText && (gadgetText.innerText === 'Seleziona lingua' || gadgetText.innerText === 'Select Language')) {
            gadgetText.innerText = 'LINGUA'; 
        }
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});
