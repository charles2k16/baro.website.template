/* js language-switcher*/
jQuery(function () {
    fnSwitcLanguage();
});
function fnSwitcLanguage() {

    if (typeof glblCurrentLanguage != "undefined") {
        jQuery(".language-switcher li[data-value!=" + glblCurrentLanguage + "]").removeClass("active");
        jQuery(".language-switcher li[data-value=" + glblCurrentLanguage + "]").addClass("active");
    }

    jQuery(document).on('click', '.language-switcher li', function () {
        if (typeof glblCurrentLanguage != "undefined") {
            var switchLanguageTo = jQuery(this).data("value").toLowerCase();
            var tempLocationName = document.location.pathname.toLowerCase();
            if (switchLanguageTo != glblCurrentLanguage) {
                if (switchLanguageTo == "en") {
                    if (document.location.pathname == "/" + glblCurrentLanguage || document.location.pathname == "/" + glblCurrentLanguage + "/") {
                        tempLocationName = "/";
                    }
                    else {
                        tempLocationName = tempLocationName.replace("/" + glblCurrentLanguage + "/", "/");
                    }
                }
                else {                  
                    if (document.location.pathname == "" || document.location.pathname == "/") {                       
                        tempLocationName = switchLanguageTo;
                    }
                    else {
                        tempLocationName = switchLanguageTo + tempLocationName;
                    }
                }
                if (!tempLocationName.startsWith("/")) {
                    tempLocationName = "/" + tempLocationName;
                }
                window.location = tempLocationName.replace("/en/", "/") + document.location.search;
            }
        }
    });
}