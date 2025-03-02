/*JS append-id-and-popup start*/
jQuery(function () {
    fnAppendId();
});

/* Appends id to existing href*/
function fnAppendId() {   
    if (typeof glblCurrentPageID != "undefined") {
        var applyOnlineID = '';
        jQuery('.appendid').each(function () {
            var href = jQuery(this).attr('href');
            if (href) {
                if (typeof jQuery(this).closest(".listing-section").data("id") != "undefined" && jQuery(this).closest(".listing-section").data("id") != "") {
                    applyOnlineID = jQuery(this).closest(".listing-section").data("id");
                } else {
                    applyOnlineID = glblCurrentPageID;
                }
            }
            jQuery(this).attr('href', href + "?id=" + applyOnlineID);
        });
    }
}

jQuery(document).on('click', '.nri-popup', function (e) {
    e.preventDefault();
    var this_href = jQuery(this).attr('href');
    jQuery('body').addClass('bob-nri-popup-open');
    jQuery('.nri-popup-div .yes-btn-a').attr('href', this_href);
});
jQuery(document).on('click', '.nri-popup-div .bob-closed-btn,.nri-popup-div .no-btn-a', function (e) {
    jQuery('body').removeClass('bob-nri-popup-open');
});


jQuery(document).on('click', '.external-popup', function (e) {
    e.preventDefault();
    var this_href = jQuery(this).attr('href');
    jQuery('body').addClass('bob-external-popup-open');
    jQuery('.external-popup-div .yes-btn-a').attr('href', this_href);
});
jQuery(document).on('click', '.external-popup-div .bob-closed-btn,.external-popup-div .no-btn-a', function (e) {
    jQuery('body').removeClass('bob-external-popup-open');
});


jQuery(document).on('click', '.insurancepopup', function (e) {
    e.preventDefault();

    var applyOnlineID = "";
    var hrefNO = jQuery(".insurance-no-anchor").attr('href');
    if (hrefNO) {
        if (typeof jQuery(this).closest(".listing-section").data("id") != "undefined" && jQuery(this).closest(".listing-section").data("id") != "") {
            applyOnlineID = jQuery(this).closest(".listing-section").data("id");
        } else {
            applyOnlineID = glblCurrentPageID;
        }
    }
    jQuery(".insurance-external-anchor").attr('href', jQuery(this).attr("href"));
    jQuery(".insurance-no-anchor").attr('href', hrefNO + "?id=" + applyOnlineID);
   
    jQuery('body').addClass('insurancepopup-open');
     jQuery('body').addClass('insurancepopup-open');
    jQuery('.insurance-popup-div .bob-popup-inner-content-div').removeClass('showStage');
});
jQuery(document).on('click', '.bob-closed-btn, .insurance-popup-div .ino-btn-a', function (e) {
    jQuery('body').removeClass('insurancepopup-open');
});
jQuery(document).on('click', '.iyes-btn-a', function (e) {
    jQuery('.insurance-popup-div .bob-popup-inner-content-div').addClass('showStage');
});

jQuery(document).on('click', '.ino-btn-a', function (e) {  
    jQuery('.insurance-popup-div .bob-popup-inner-content-div').addClass('showStage');
});
jQuery(document).on('click', '.stage2 .insurance-external-anchor', function (e) {  
    jQuery('body').removeClass('insurancepopup-open');
});



/*JS append-id-and-popup end*/


