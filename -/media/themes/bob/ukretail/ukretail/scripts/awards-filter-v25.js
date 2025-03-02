function fnAwardsFilter() {

    var year = "";
    var month = "";
    var isLikedChecked = jQuery('input:checkbox[id=awardsLikedBy]').attr('checked')==undefined?false:true;
    if ($xa("#drp_media_years li.active").attr("value") != undefined) {
        year = $xa.trim($xa("#drp_media_years li.active").attr("value").toLowerCase());
    }
    if ($xa("#drp_media_months li.active").attr("value") != undefined) {
        month = $xa.trim($xa("#drp_media_months li.active").attr("value").toLowerCase());
    }

    if (year != "" || month != "" || isLikedChecked) {
        if ($xa('.row.awards-list').length > 0) {
            $xa('.row.awards-list').hide();
            $xa('.row.awards-list').removeClass("d-flex");
            $xa(".row.awards-list").each(function (index) {
                if (isLikedChecked) {
                    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('span small').text("Month");
                    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
                    $xa("#drp_media_months").addClass('active');
                    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('span small').text("Year");
                    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
                    $xa("#drp_media_years").addClass('active');
                    if (fnReadCookie("LikedByItems").toLowerCase().indexOf($xa(this).attr("data-id")) != -1) {
                        $xa(this).show();
                        $xa(this).addClass("d-flex");
                    }
                    else {
                        $xa(this).hide();
                        $xa(this).removeClass("d-flex");
                    }
                }
                else {
                    if (year != "" && month != "" && $xa(this).attr('data-year').toLowerCase() == year && $xa(this).attr('data-month-word').toLowerCase() == month) {
                        $xa(this).show();
                        $xa(this).addClass("d-flex");
                    }
                    else if (year != "" && month == "" && $xa(this).attr('data-year').toLowerCase() == year) {
                        $xa(this).show();
                        $xa(this).addClass("d-flex");
                    }
                    else if (year == "" && month != "" && $xa(this).attr('data-month-word').toLowerCase() == month) {
                        $xa(this).show();
                        $xa(this).addClass("d-flex");
                    }
                }

            });
        }
    }
    else {
        $xa('.row.awards-list').show();
        $xa('.row.awards-list').addClass("d-flex");
    }


    if ($xa(".loadmore-btn").length > 0) {
        $xa(".bob-report-load-more").hide();
    }
    AOS.refresh(); 

}

function fnAwardSearch() {
    if ($xa("#search_media").val() != undefined && $xa("#search_media").val() != null && $xa("#search_media").val() != "") {
        var searchText = jQuery("#search_media").val();
        if (searchText != "") {
            var flagFound = false;
            jQuery('.row.awards-list').hide();
            jQuery('.row.awards-list').removeClass("d-flex");
            jQuery(".row.awards-list").each(function () {
                var allText = "";
                allText = jQuery(this).find("h4").text() + "-" + jQuery(this).find(".expandable-content").text();
                if (allText.toLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1) {
                    flagFound = true;
                    jQuery('.loadmore-btn').hide();
                    $xa(this).show();
                    $xa(this).addClass("d-flex");

                }
            });



            if (flagFound) {

            }
        } else {

            jQuery('.row.awards-list').hide();
            jQuery('.row.awards-list').removeClass("d-flex");

        }
    }
    AOS.refresh(); 
}



function fnResetAwardFilter() {
    $xa("#search_media").val("");
    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('span small').text("Month");
    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
    $xa("#drp_media_months").addClass('active');
    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('span small').text("Year");
    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
    $xa("#drp_media_years").addClass('active');

    $xa(".row.awards-list").show();
    jQuery('.row.awards-list').addClass("d-flex");

    if ($xa(".loadmore-btn").length > 0) {
        $xa(".bob-report-load-more").show();
    }
    jQuery('input:checkbox[id=awardsLikedBy]').attr('checked',false);
    AOS.refresh();
}


jQuery(function () {

    jQuery('#awardsLikedBy').change(function(){ 
        var isLikedChecked = jQuery('input:checkbox[id=awardsLikedBy]').attr('checked');
        jQuery('input:checkbox[id=awardsLikedBy]').attr('checked',isLikedChecked=='checked'?false:true);
        fnAwardsFilter();
    });
    jQuery("#search_media").keydown(function () {
        fnAwardSearch();
    });

    $xa(document).click(function (evet) {
        $xa(".bob-newsletter-search-wrap .search-results .search-result-list").html("");
        $xa(".bob-newsletter-search-wrap .no-results").hide();
        $xa(".bob-newsletter-search-wrap .search-box-input").val("");
    });
    $xa(".bob-newsletter-search-wrap, .bob-newsletter-search-wrap .search-box-input").click(function (event) {
        event.stopPropagation();
    });

});

