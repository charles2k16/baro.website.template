
/*Disclaimer Popup*/
jQuery(function () {
    if (fnReadCookie("dis-popup") == "") {
        jQuery(".disc-box-right-div").removeClass("nodisplay");
    } else {
        jQuery(".disc-box-right-div").addClass("nodisplay");
    }
});

jQuery(".disc-box-right-div").click(function () {
    fnCreateCookie("dis-popup", "1", 60 * 365 * 12);
    jQuery(".disc-box-right-div").addClass("nodisplay");
});

/*Disclaimer Popup end*/