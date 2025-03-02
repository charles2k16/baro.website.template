jQuery(document).ready(function() {
    if (document.location.href.indexOf("/ar-ae") != -1) {
        jQuery('html').attr('dir', 'rtl');
    }
    setTimeout(function() {
        jQuery('.promo').removeClass('promo');
    }, 100);
});