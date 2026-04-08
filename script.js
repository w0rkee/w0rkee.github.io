/* FUNZIONE PER INIZIALIZZARE GOOGLE TRANSLATE */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'it', // Lingua originale del tuo sito
        includedLanguages: 'en,fr,es,de', // Lingue in cui vuoi tradurre
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
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
