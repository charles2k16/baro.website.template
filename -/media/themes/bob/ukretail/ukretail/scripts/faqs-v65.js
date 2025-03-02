jQuery(document).ready(function () {
    var winW = jQuery(window).width();
    // faqs page start Header
    // if (jQuery('.grid').length > 0) {
    jQuery(document).on('click', '.no-q', function () {
        jQuery(this).parents('.faq-question-yes-no-div').find('.popup-yes-div').remove();
        if (jQuery(this).parents('.faq-question-yes-no-div').find('.popup-no-div').length > 0) { } else {

            var get_html = jQuery('.popup-no-div').html();
            jQuery(this).parents('.faq-question-yes-no-div').append('<div class="popup-faqs-div popup-no-div">' + get_html + '</div>');
            var get_top = jQuery(this).position().top;
            var get_left = jQuery(this).position().left;
            var set_left = (300 - get_left) / 2;
            jQuery('.popup-no-div').css('left', set_left + 25);
            // glblRefreshLayout();

        }
    });
    jQuery(document).on('click', '.yes-q', function () {
        jQuery(this).parents('.faq-question-yes-no-div').find('.popup-no-div').remove();
        if (jQuery(this).parents('.faq-question-yes-no-div').find('.popup-yes-div').length > 0) { } else {

            var get_html = jQuery('.popup-yes-div').html();
            jQuery(this).parents('.faq-question-yes-no-div').append('<div class="popup-faqs-div popup-yes-div">' + get_html + '</div>');
            var get_top = jQuery(this).position().top;
            var get_left = jQuery(this).position().left;
            var set_left = (300 - get_left) / 2;
            jQuery('.popup-yes-div').css('left', set_left - 25);
            // glblRefreshLayout();

        }
    });


    jQuery('.bob-faqs-main-div .bob-report-list-div .bob-report-d-div .button-share-div .bob-line-arrow-orange-link').on('click', function (e) {
        jQuery(this).parents('.bob-report-list-div').find('.col-sm-3').removeClass('width-100');
        jQuery(this).parents('.col-sm-3').addClass('width-100');
        glblRefreshLayout();
    });
    jQuery('.bob-faqs-main-div .bob-press-div .col-sm-3 .bob-closed-btn').on('click', function () {
        jQuery(this).parents('.col-sm-3').removeClass('width-100');
        glblRefreshLayout();
    });



    jQuery(document).on('click', '.popup-faqs-div .closed-pp,.popup-faqs-div .bob-comman-white-btn', function () {

        jQuery(this).parents('.faq-question-yes-no-div').find('.popup-faqs-div').remove();
    });
    // faqs page end here
    if (jQuery(".bob-accordion-div .accordion ul.items>li").length <= 5) {
        jQuery(".bob-load-more-btn.bob-loan-faq-load-more-div li").fadeOut('slow');
    }
    jQuery(".bob-accordion-div .accordion ul.items>li").slice(0, 5).show();
    jQuery(".bob-load-more-btn.bob-loan-faq-load-more-div a").on('click', function (e) {
        // e.preventDefault();
        jQuery(".bob-accordion-div .accordion ul.items>li:hidden").slice(0, 5).slideDown();
        if (jQuery(".bob-accordion-div .accordion ul.items>li:hidden").length == 0) {
            jQuery(".bob-load-more-btn.bob-loan-faq-load-more-div li.item0").fadeOut('slow');
            jQuery(".bob-load-more-btn.bob-loan-faq-load-more-div li.item1").fadeIn('slow');
        }
        // jQuery('html,body').animate({
        //     scrollTop: jQuery(this).offset().top
        // }, 1500);
    });

    var glblGrid, glblGrid1;


    if (winW > 767) {
        setTimeout(function () {
            if (jQuery(".grid .item").length > 0) {
                glblGrid = new Muuri('.grid', {
                    items: '.item',
                    layoutOnResize: 200,
                    layoutDuration: 400,
                    layoutEasing: 'ease',
                    layout: {
                        fillGaps: false,
                        horizontal: false,
                        alignRight: false,
                        alignBottom: false,
                        rounding: false
                    },
                });
            }
            // if (jQuery(".loan-level-1 .bob-small-page-list.page-list ul.items .item").length > 0) {
            //     glblGrid1 = new Muuri('.loan-level-1 .bob-small-page-list.page-list ul.items', {
            //         items: '.loan-level-1 .bob-small-page-list.page-list ul.items .item',
            //         layoutOnResize: 200,
            //         layoutDuration: 400,
            //         layoutEasing: 'ease',
            //         layout: {
            //             fillGaps: true,
            //             horizontal: false,
            //             alignRight: false,
            //             alignBottom: false,
            //             rounding: true
            //         },
            //     });
            // }
            // if (jQuery(".bob-home-loan .bob-page-list-box ul.items .item").length > 0) {
            //     glblGrid1 = new Muuri('.bob-home-loan .bob-page-list-box ul.items', {
            //         items: '.bob-home-loan .bob-page-list-box ul.items .item',
            //         layoutOnResize: 200,
            //         layoutDuration: 400,
            //         layoutEasing: 'ease',
            //         layout: {
            //             fillGaps: true,
            //             horizontal: false,
            //             alignRight: false,
            //             alignBottom: false,
            //             rounding: true
            //         },
            //     });
            // }

        }, 200);

        // if (jQuery(".atm-view-grid .bob-grid-view-div>.row:nth-child(2) ").length > 0) {
        //     glblGrid1 = new Muuri('.atm-view-grid .bob-grid-view-div>.row:nth-child(2)', {
        //         items: '.atm-view-grid .bob-grid-view-div>.row:nth-child(2) .col-sm-4',
        //         layoutOnResize: 200,
        //         layoutDuration: 400,
        //         layoutEasing: 'ease',
        //     });
        // }
    }



    function glblRefreshLayout() {
        glblGrid.refreshItems().layout();
    }

    function glblRefreshLayout2() {
        glblGrid1.refreshItems().layout();
    }

    jQuery(".filterby .bob-custom-dropdown .bob-custom-dropdown-list li").click(function () {
        if (jQuery(".bob-faq-filder-data-div").length > 0) {
        } else {

            setTimeout(function () {
                if (jQuery(".muuri-item").length > 0) {
                    glblRefreshLayout2();
                };
            }, 150);

        }

    });

    jQuery(".search-class").keydown(function (event) {
        if (jQuery(".bob-faq-filder-data-div").length > 0) {
        } else {

            setTimeout(function () {
                console.log(event.which);
                if (jQuery(".muuri-item").length > 0) {
                    glblRefreshLayout2();
                };
            }, 150);

        }

    });



    jQuery(".faq-pages-views-click .accordion .field-heading").click(function () {
        if (!jQuery(this).closest("li.item").hasClass("active")) {
            glblFnCapturePageViewsCount(jQuery(this).closest("li.item").data("trackingid"), "ukrglobalfaqs");
        }
    });

    /*If categoryid dropdown is selected */
    jQuery("#faqPageDDLFilter ul li").on('click', function () {
        var categoryID = jQuery(this).data("value");
        jQuery(".accordion.filter-data").each(function () {
            if (categoryID == jQuery(this).data("categoryid")) {
                jQuery(this).removeClass("nodisplay")
            } else {
                jQuery(this).addClass("nodisplay")
            }
        });
    });


    setTimeout(function () {
        /*If categoryid present then select dropdown */
        if (fnGetURLParameterValueByName("subcategoryid") != "") {
            jQuery("#faqPageDDLFilter li").each(function () {
                if (jQuery(this).data("value") == fnGetURLParameterValueByName("subcategoryid")) {
                    jQuery(this).click();
                }
            });
        }
    }, 200);

    /*If faq id matched then click the accordian heading*/
    if (fnGetURLParameterValueByName("id") != "") {
        setTimeout(function () {
            jQuery(".accordion.filter-data li.item").each(function () {
                if (jQuery(this).data("id") == fnGetURLParameterValueByName("id")) {
                    jQuery(this).click();
                    jQuery(this).find(".toggle-content").show();
                }
            });
        }, 300);
    }

});