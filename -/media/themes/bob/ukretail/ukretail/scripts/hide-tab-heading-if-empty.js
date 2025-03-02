
/*hide-tab-heading-if-empty start*/
jQuery(function () {hideTabULTagIfEmpty});

function hideTabULTagIfEmpty() {
    var boolAnyLiHaveText = false;
    var thisElement;
    jQuery(".tabs-heading li").each(function () {
        thisElement = jQuery(this);
        if (jQuery(this).text().trim() != "") {
            boolAnyLiHaveText = true;
        }
    });

    if (!boolAnyLiHaveText) {
        jQuery(thisElement).closest('ul').remove();
    }
}
/*hide-tab-heading-if-empty end*/