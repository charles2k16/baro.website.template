jQuery(document).ready(function() {
    jQuery(".baroda-connect-btn").click(function(){
     
        alert("This product is no longer available other than for existing loan linked accounts, and services are restricted as set out below.");
    });

    var winW = jQuery(window).width();
    jQuery(document).on('click', '.bob-logincc-div .bob-cust-drop-click', function() {
        jQuery('body').removeClass('bob-cust-drop-body-open');
        jQuery('.bob-custom-drop-popup-div').removeClass('active-drop');
        jQuery('.bob-logincc-div').removeClass('bob-open-dropdown bob-open-current-drop');
        jQuery('body').addClass('bob-cust-drop-body-open');
        jQuery(this).parents('.bob-logincc-div').find('.bob-custom-drop-popup-div').addClass('active-drop');
        jQuery(this).parents('.bob-logincc-div').addClass('bob-open-current-drop');
    });
    if (winW < 767) {
        jQuery(document).on('click', '.lang_li ', function() {
            jQuery(this).find('.up-front-lang').slideToggle();
        });
    }
    jQuery(document).on('click', function(e) {
        var container = jQuery(".bob-logincc-div");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('body').removeClass('bob-cust-drop-body-open');
            jQuery('.bob-custom-drop-popup-div').removeClass('active-drop');
            jQuery('.bob-logincc-div').removeClass('bob-open-dropdown bob-open-current-drop');
        }
    });
    jQuery(document).on('click', '.bob-custom-drop-popup-div .closed-pp', function() {
        jQuery('body').removeClass('bob-cust-drop-body-open');
        jQuery('.bob-custom-drop-popup-div').removeClass('active-drop');
        jQuery('.bob-logincc-div').removeClass('bob-open-dropdown bob-open-current-drop');
    });
    jQuery('.bob-logincc-div input').keypress(function(e) {
        e.preventDefault();
        jQuery(this).blur();
        return false;
    });
    jQuery(".bob-notification-data ul").mCustomScrollbar({
        scrollbarPosition: "outside"
    });
    jQuery(document).on('click', '.notification_svg_h', function() {
        jQuery('body').addClass('notification-open');
    });
    jQuery(document).on('click', '.bob-notification-data .closed-pp', function() {
        jQuery('body').removeClass('notification-open');
    });
    jQuery(document).on('click', '.font-big-small li', function() {
        jQuery('html').removeClass('fontnormal fontpluse fontminus');
        jQuery('html').addClass(jQuery(this).attr('data-class'));
    });
    jQuery(document).on('click', '.color-mode li', function() {
        jQuery('html').removeClass('light-mode dark-mode');
        jQuery('html').addClass(jQuery(this).attr('data-class'));
        if (jQuery(this).attr('data-class') == "dark-mode") {
            fnCreateCookie("dark-mode", "true", 60 * 365 * 12);
        } else {
            fnDeleteCookie("dark-mode");
        }

    });
    if (fnReadCookie("dark-mode") != "") { jQuery('html').addClass("dark-mode"); }

    jQuery(document).on('click', '.bob-middle-navbar .bob-middle-first-link li a', function() {
        jQuery('html').removeClass('fontminus fontnormal fontpluse');
        if (typeof jQuery(this).attr('href') != "undefiend") {
            if (jQuery(this).attr('href').toLowerCase().indexOf("/senior-citizen") != -1) {
                fnCreateCookie("senior-citizene", "true", 60 * 365 * 12);
            } else {
                fnDeleteCookie("senior-citizene");
            }
        }
    });
    if (document.location.href.indexOf("/senior-citizen") != -1) {
        fnCreateCookie("senior-citizene", "true", 60 * 365 * 12);
    } else {
        fnDeleteCookie("senior-citizene");
    }
    setTimeout(function() {
        if (fnReadCookie("senior-citizene") != "") { jQuery(".font-big-small ul li:eq(1)").click(); }
    }, 200);
});

jQuery(".bob-nav-inner-list .navcol .bob-inner-list-nav h6").each(function() {
    if (jQuery(this).text().length <= 1) {
        jQuery(this).siblings(".bob-inner-menu-expand").find("ul").addClass("bob-no-list-type-ul");
        jQuery(this).siblings(".bob-inner-menu-expand").removeClass("bob-inner-menu-expand");
        jQuery(this).hide();
    }
});