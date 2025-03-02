jQuery(".search-box-input").on("keypress paste", function (event) {
    // Prevent pasting
    if (event.type === 'paste') {
        event.preventDefault();
        return;
    }
 var regex = new RegExp("^[a-zA-Z0-9 ]+$"); // Regex to allow only alphanumeric characters
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

jQuery(function () {  
    jQuery(".search-result-list").each(function () {
        jQuery(this).parents().find("li").each(function () {
            jQuery(this).parents().find("a").addClass("bob-line-arrow-orange-link");
        });
    });  
    setTimeout(function () {
        if (jQuery(".search-box-input.tt-input").val() == "") {
            jQuery(".search-result-list").addClass("nodisplay");
            jQuery(".bob-search-popup-div").removeClass("search-loaded");
            jQuery(".search-box-input.tt-input").val("");
            jQuery(".search-results").addClass("nodisplay");
            setLabelsOnGlobalSerah();           
        }

        jQuery(".bob-search-popup-div .bob-global-search-result-wrap").mCustomScrollbar({
            scrollbarPosition: "outside"
        });
    }, 2000);
    jQuery(".bob-search-popup-div .input-group-append span .closed2_svg").on("click", function () {
        jQuery(".bob-search-popup-div").removeClass("addclosed search-loaded");
        jQuery(".search-box-input.tt-input").val("");
        jQuery(".search-box-input.tt-input").focus();
        jQuery(".search-result-list").addClass("nodisplay");
        history.replaceState({}, document.title, window.location.pathname + window.location.search);
    });

    var objVoiceToSearch = new fnVoiceToSearch();
    objVoiceToSearch.micButtonElement = ".mic-icon";
    objVoiceToSearch.searchTextBoxElement = ".search-box-input.tt-input";
    objVoiceToSearch.searchButtonElement = ".search-box-button";
    objVoiceToSearch.welcomeAudioId = "welcomeaudio";
    objVoiceToSearch.clickAudioId = "clickaudio";
    objVoiceToSearch.initialise();


    /*Remove class form global navigation*/
    jQuery(".main-nav-ddl-list .navcol").each(function () {
        if (jQuery(this).find(".bob-simple-btn").length > 0) {
            jQuery(this).parents().find(".main-nav-ddl-list").removeClass("nav-no-button");
        }
    });
    // jQuery(document).on('click', function(e) {
    //     var container = jQuery(".blog .bob-newsletter-search-wrap");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         jQuery(".bob-global-search-result-section").fadeOut();

    //     }
    // });

});


jQuery(document).on('click', '.bob-closed-btn', function () {
    setTimeout(function () {
        history.replaceState({}, document.title, window.location.pathname + window.location.search);
        jQuery(".search-box-input.tt-input").val("");
        jQuery(".search-result-list").addClass("nodisplay");
        jQuery(".bob-search-popup-div").removeClass("search-loaded");
    },200);
});

var globalSearchTimer;
jQuery(".search-box-input").on('keyup', function () {
    var serachText = jQuery(this).val();
    clearTimeout(globalSearchTimer);
    globalSearchTimer = setTimeout(function () {
        if (serachText.length > 0) {
            jQuery(".bob-search-popup-div").addClass("addclosed ");

        }
        if (serachText == "" || jQuery(".search-result-list").html() == "") {
            jQuery(".bob-search-popup-div").removeClass("search-loaded");
        }

        if (serachText == "") {
            jQuery(".search-result-list").addClass("nodisplay");
            jQuery(".bob-search-popup-div").removeClass("addclosed");
        } else {
            jQuery(".search-result-list").removeClass("nodisplay");
            jQuery(".search-box-button").trigger("click");
            jQuery(".bob-search-popup-div").addClass("search-loaded");
            console.log("serarch trgggered " + serachText);
        }
    }, 1000);

    AOS.refresh();
});


XA.component.search.vent.on("results-loaded", function () {
    jQuery(".bob-search-popup-div").addClass("search-loaded");
    jQuery(".search-results").removeClass("nodisplay");
    setLabelsOnGlobalSerah();
});


function setLabelsOnGlobalSerah() {
    if (document.getElementsByClassName('search-box-input tt-hint').length > 0) {
        document.getElementsByClassName('search-box-input tt-hint')[0].setAttribute("aria-label", "Search Hint");
    }
    if (document.getElementsByClassName('search-box-input tt-input').length > 0) {
        document.getElementsByClassName('search-box-input tt-input')[0].setAttribute("aria-label", "Search");
    }
}