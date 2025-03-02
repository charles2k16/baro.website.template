window.BOBCookieConsent = window.BOBCookieConsent || {};
BOBCookieConsent.necessary = true;
BOBCookieConsent.consentid = create_UUID();
BOBCookieConsent.performance = false;
BOBCookieConsent.functionality = false;
BOBCookieConsent.targeting = false;
BOBCookieConsent.marketing = false;
BOBCookieConsent.analytics = false;
BOBCookieConsent.consentdate = new Date().toString();

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

var userConsentCooki = fnReadCookie("CookieConsent"); userConsentCooki = userConsentCooki != '' ? JSON.parse(userConsentCooki) : '';
if (userConsentCooki != "") {
    try {       
        window.BOBCookieConsent = window.BOBCookieConsent || {};
        BOBCookieConsent.consentid = userConsentCooki.consentid;
        BOBCookieConsent.performance = userConsentCooki.performance;
        BOBCookieConsent.functionality = userConsentCooki.functionality;
        BOBCookieConsent.targeting = userConsentCooki.targeting;
        BOBCookieConsent.marketing = userConsentCooki.marketing;
        BOBCookieConsent.analytics = userConsentCooki.analytics;
        BOBCookieConsent.consentdate = userConsentCooki.consentdate;

    }
    catch (err) {
        console.log("JOSN Error in cooki-consent");
    }
}

jQuery(function () {

    if (fnReadCookie("CookieConsent") == "") {
        fnDeleteCookie("privacy-notification");
    }


    setInterval(function () {
        fnDeleteCookieBasedOnConsent();
        fnDleteUnnecessaryCookies();
    }, 1000);
      

    jQuery(".cookie-floating-btn, .manage.cookie-btn").click(function () {
        glblFnCookiConsentOpenPopup();
    });

    jQuery('.cb-value').click(function () {
        var mainParent = jQuery(this).parent('.toggle-btn');
        if (jQuery(this).is(':checked')) {
            jQuery(mainParent).addClass('active');
        } else {
            jQuery(mainParent).removeClass('active');
        }
    });
    jQuery(".set > a").siblings(".accord-content").hide();
    jQuery(".set > a").on("click", function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active");
            jQuery(this).siblings(".accord-content")
                .slideUp(200);
            jQuery(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            jQuery(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            jQuery(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            jQuery(".set > a").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(".accord-content").slideUp(200);
            jQuery(this)
                .siblings(".accord-content")
                .slideDown(200);
        }
    });
});




jQuery('.cookie-popup .popup-content .closed-popup').on('click', function () {
    jQuery('.cookie-popup').removeClass('active-cookie');
});
var liCount = jQuery('.cookie-popup .popup-content .popup-inner-content li').length;
for (var i = 1; i <= liCount; i++) {
    jQuery('.cookie-popup .popup-content .popup-inner-content li span').append('<strong>' + i + '</strong>');
}
setTimeout(function () {
    jQuery('.cookie-popup .popup-content .popup-inner-content li').each(function () {
        jQuery(this).find('span strong:nth-child(' + (jQuery(this).index() + 1) + ')').addClass('active');
    });
}, 100);
jQuery(".cookie-popup .popup-content .popup-inner-content").mCustomScrollbar({
    axis: "y"
});




jQuery('.cookie-popup .popup-content .popup-footer .btn-all').on('click', function () {
    jQuery('.cookie-popup .cb-value').each(function () {
        jQuery(jQuery(this).parent('.toggle-btn')).addClass('active');
        jQuery(this).prop('checked', 'true');
    });
    glblCookieConsentAllowAll();
    jQuery('.cookie-popup').removeClass('active-cookie');
});

jQuery('.cookie-popup .popup-content .popup-footer .btn-save-pref').on('click', function () {
    glblCookieConsentSavePreference();
});



jQuery(".privacy-warning .AllowAll").click(function () {
    glblCookieConsentAllowAll();
});

jQuery(".privacy-warning .close").click(function () {
    BOBCookieConsent.consentdate = new Date().toString();
    fnCreateCookie("CookieConsent",JSON.stringify(BOBCookieConsent), 525600);
    glblGenerateCookiConsentReceipts();
});


function glblCookieConsentAllowAll() {
    window.BOBCookieConsent = window.BOBCookieConsent || {};
    BOBCookieConsent.performance = true;
    BOBCookieConsent.functionality = true;
    BOBCookieConsent.targeting = true;
    BOBCookieConsent.marketing = true;
    BOBCookieConsent.analytics = true;
    BOBCookieConsent.consentdate = new Date().toString();
    var js = JSON.stringify(BOBCookieConsent)
    fnCreateCookie("CookieConsent", JSON.stringify(BOBCookieConsent)  , 525600);
    XA.cookies.createCookie('privacy-notification', 1, 365); XA.cookies.removeCookieWarning();
    glblGenerateCookiConsentReceipts();
}

function glblCookieConsentSavePreference() {
    window.BOBCookieConsent = window.BOBCookieConsent || {};
    BOBCookieConsent.performance = jQuery(".cookie-popup input[name='performance']").is(":checked");
    BOBCookieConsent.functionality = jQuery(".cookie-popup input[name='functionality']").is(":checked");
    BOBCookieConsent.targeting = jQuery(".cookie-popup input[name='targeting']").is(":checked");
    BOBCookieConsent.marketing = jQuery(".cookie-popup input[name='marketing']").is(":checked");
    BOBCookieConsent.analytics = jQuery(".cookie-popup input[name='analytics']").is(":checked");
    BOBCookieConsent.consentdate = new Date().toString();
    fnCreateCookie("CookieConsent", JSON.stringify(BOBCookieConsent), 525600);
    XA.cookies.createCookie('privacy-notification', 1, 365); XA.cookies.removeCookieWarning();
    jQuery('.cookie-popup').removeClass('active-cookie');
    glblGenerateCookiConsentReceipts();
}

function glblFnCookiConsentOpenPopup() {
    var CookieConsent = fnReadCookie("CookieConsent");
    if (CookieConsent != "") {
        CookieConsent = JSON.parse(CookieConsent);
        if (CookieConsent.performance) {
            jQuery(".cookie-popup input[name='performance']").prop("checked", true);
            jQuery(".cookie-popup input[name='performance']").parent(".toggle-btn").addClass("active");
        }
        if (CookieConsent.functionality) {
            jQuery(".cookie-popup input[name='functionality']").prop("checked", true);
            jQuery(".cookie-popup input[name='functionality']").parent(".toggle-btn").addClass("active");
        }
        if (CookieConsent.targeting) {
            jQuery(".cookie-popup input[name='targeting']").prop("checked", true);
            jQuery(".cookie-popup input[name='targeting']").parent(".toggle-btn").addClass("active");
        }
        if (CookieConsent.marketing) {
            jQuery(".cookie-popup input[name='marketing']").prop("checked", true);
            jQuery(".cookie-popup input[name='marketing']").parent(".toggle-btn").addClass("active");
        }
        if (CookieConsent.analytics) {
            jQuery(".cookie-popup input[name='analytics']").prop("checked", true);
            jQuery(".cookie-popup input[name='analytics']").parent(".toggle-btn").addClass("active");
        }
    }

    jQuery('.cookie-popup').addClass('active-cookie');
}
function glblGenerateCookiConsentReceipts() {

    jQuery.ajax({
        dataType: "jsonp",
        url: "/handlers/bob/countrywebsites/ukretail/consentreceipts.ashx",
        type: "POST",
        async: true,
        success: function (result) { },
        error: function () {
            console.log("There has been an error on server views click count.");
        }
    });

    fnDeleteCookieBasedOnConsent();
}


function fnDeleteCookieBasedOnConsent() {
    try {       
        var arrFunctionality = ["LikedByItems", "dark-mode"];
        var ccookie = fnReadCookie("CookieConsent"); ccookie = ccookie != '' ? JSON.parse(ccookie) : '';
        if (ccookie != "") {
            if (!ccookie.functionality) {
                arrFunctionality.filter(function (item) {
                    fnDeleteCookie(item);
                });
                jQuery(".likes-li").hide();
            } else {
                jQuery(".likes-li").show();
            }

            jQuery(".cookie-floating-btn").show();

        } else {
            arrFunctionality.filter(function (item) {
                fnDeleteCookie(item);
            });

            jQuery(".cookie-floating-btn").hide();
        }
    }
    catch (err) {
        console.log("JOSN Error in fnDeleteCookieBasedOnConsent");
    }
}


function fnDleteUnnecessaryCookies() {
    var ccookie = fnReadCookie("CookieConsent"); ccookie = ccookie != '' ? JSON.parse(ccookie) : '';
    if (!ccookie.performance && !ccookie.functionality && !ccookie.targeting && !ccookie.marketing && !ccookie.analytics) {
        var necessaryCookies = ["ASP.NET_SessionId", "privacy-notification", "CookieConsent", "privacy-notification", "shell#lang", "jsloaded", "sxa_site"];
        var allCookies = document.cookie.split(";");
        for (var i = 0; i < allCookies.length; i++) {
            var cookieName = allCookies[i].split("=")[0].trim();
            if (!necessaryCookies.includes(cookieName)) {
                document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }
        }
    }
}


