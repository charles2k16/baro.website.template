jQuery(document).ready(function() {
    var winW = jQuery(window).width();
    fnBobDirectorDetailsPopup();
    setTimeout(function() {
        jQuery(".view-profile-popup-content-box").mCustomScrollbar({});
        if (winW > 1025) {
            jQuery(".navigation-main-horizontal nav,.bob-blue-top-div .bob-tags").mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollButtons: {
                    enable: true,
                    scrollAmount: 50,
                    scrollType: "stepless"
                }
            });
            if(jQuery('.navigation-main-horizontal').length > 0){
                var this_scroll_active = jQuery('.navigation-main-horizontal nav ul li.active').offset().left;
                jQuery(".navigation-main-horizontal nav").mCustomScrollbar("scrollTo",this_scroll_active - 60);
            }
            if(jQuery('.bob-blue-top-div .bob-tags').length > 0){
                var this_scroll_active = jQuery('.bob-blue-top-div .bob-tags li a.active').parents('li').offset().left;
                jQuery(".bob-blue-top-div .bob-tags").mCustomScrollbar("scrollTo",this_scroll_active - 0);
            }
        }

    }, 0);
});


function fnBobDirectorDetailsPopup() {
    jQuery(".board-of-director-page .bob-arrow-button").click(function() {
        /*Clear first*/
        jQuery("#bob-bod-image").attr("src", "");
        jQuery("#bob-bod-content").html("");
        jQuery("#bob-bod-heading").html("");

        jQuery("#bob-bod-image").attr("src", jQuery(this).parents(".director-detail-box, .director-intro-box").find("img").attr("src"));
        jQuery("#bob-bod-content").html(jQuery(this).attr("data-content"));
        jQuery("#bob-bod-heading").html(jQuery(this).parents(".direor-dctetail-box").find("h3").html());

        jQuery(".popupOverlay").show();
        jQuery(".board-of-director-view-profile-popup").show();

    });

    jQuery(".popupCloseBtn").click(function() {
        jQuery(".popupOverlay").hide();
        jQuery(".board-of-director-view-profile-popup").hide();
    });

}