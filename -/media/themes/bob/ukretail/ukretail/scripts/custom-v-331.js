
 // Replace the existing SVG with the new one on document ready
 jQuery(document).ready(function(){
    jQuery(".share-twitter a svg").replaceWith('<svg class="bob-tw-svg" width="20" height="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.2 35.2" style="enable-background:new 0 0 35.2 35.2;" xml:space="preserve"><style type="text/css">.st0{fill:#F26522;}.st1{fill:#FFFFFF;}</style><path class="st0" d="M17.6,0c9.7,0,17.6,7.9,17.6,17.6l0,0c0,9.7-7.9,17.6-17.6,17.6l0,0C7.9,35.2,0,27.3,0,17.6c0,0,0,0,0,0 C0,7.9,7.9,0,17.6,0C17.6,0,17.6,0,17.6,0z"></path><path class="st1" d="M19.4,16.2l6.9-8h-1.6l-6,6.9l-4.8-6.9H8.4l7.2,10.5L8.4,27H10l6.3-7.3l5,7.3h5.5L19.4,16.2L19.4,16.2z M17.1,18.7l-0.7-1l-5.8-8.3h2.5l4.7,6.7l0.7,1l6.1,8.7h-2.5L17.1,18.7L17.1,18.7z"></path></svg>');
});


var _rtl;
jQuery(window).on('load', function() {
    var winW = jQuery(window).width(),
        winH = jQuery(window).height();
    setTimeout(function() {
        var url_id = fnGetURLParameterValueByName("id");
        if (url_id.length > 0 && jQuery('.bob-faqs-main-div').length > 0) {
            jQuery('html,body').animate({
                scrollTop: jQuery('.items li[data-id="' + url_id + '"]').offset().top - 130
            }, 600);
        }

        jQuery('#content>.component:nth-child(2)').attr('id', 'second-scroll');

        jQuery('.only-content,.bob-loan-calculator').css({
            'height': jQuery('.carousel .slide .field-slideimage img').height() + 40,
            'min-height': jQuery('.carousel .slide .field-slideimage img').height() + 40
        });
        if (jQuery('.bob-assistance-form').length > 0) {
            jQuery('body').addClass('no-bob-assistance-form');
        }
        // if( jQuery('.only-content').length > 0){
        //     jQuery('body').addClass('bt-80');
        // }
        if (jQuery('.bob-loan-page-tab-div .tabs-heading').length > 0) {
            var tab_html = jQuery('.bob-loan-page-tab-div .tabs-heading').html();
            jQuery('.bob-loan-page-tab-div .tabs-heading').remove();
            jQuery('<div class="tab_scroll_div_n"><ul class="tabs-heading">' + tab_html + '</ul></div>').insertBefore('.tabs-inner .tabs-container');
        }
        jQuery('.bob-loan-page-tab-div .col-5').css({
            'width': jQuery('.bob-svg-text-link-div ul').width() + 40
        });
        // changes in home loan tab for mediaquery css crash becase of property are overlapped of width
        if (jQuery(window).width() <= 767) {
            jQuery('.bob-loan-page-tab-div .tabs-heading').css({
                'padding-right': '0',
                'width': '100%'
            });
        } else {
            jQuery('.bob-loan-page-tab-div .tabs-heading').css({
                'padding-right': '0',
                'width': winW - jQuery('.bob-loan-page-tab-div .col-5').width() + 15
            });
        }

        jQuery('.bob-loan-page-tab-div .tabs-heading .slick-arrow.bob-right-round-arrow-svg').css({
            'right': jQuery('.bob-svg-text-link-div ul').width() + 40
        });
    }, 500);
    setTimeout(function() {
        jQuery('.bob-loan-page-tab-div .tabs-heading').mCustomScrollbar({
            scrollbarPosition: "outside",
            autoExpandScrollbar: true,
            scrollInertia: 0,
            alwaysShowScrollbar: 1,
            axis: "x",
            scrollButtons: {
                enable: true,
                scrollAmount: 50,
                scrollType: "stepless"
            }
        });
    }, 1000);
});
jQuery(document).ready(function() {

    var winW = jQuery(window).width(),
        winH = jQuery(window).height();

    if (jQuery('html').attr('dir') == 'rtl') {
        _rtl = true;
    } else {
        _rtl = false;
    }



    jQuery('body').addClass(jQuery.browser.name);

    hideTabULTagIfEmpty();


    jQuery('.b-exchange-rate-div ul').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: _rtl,
        prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
        nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    jQuery('.bob-tags li a').on('click', function() {
        jQuery(this).parents('.bob-tags').find('a').removeClass('active');
        jQuery(this).addClass('active');
    });


    jQuery('.hr-wrapper .bob-arrow-button').on('click', function() {
        jQuery('.hr-wrapper').removeClass('open-text-hr');
        jQuery(this).parents('.hr-wrapper').addClass('open-text-hr');
        setTimeout(function() {
            jQuery('html,body').animate({
                scrollTop: jQuery('.open-text-hr').offset().top - 150
            }, 600);
        }, 100);
    });

    jQuery('.skip-main-content').on('click', function(e) {
        e.preventDefault();

        if (jQuery('.bob-search-inner-div').length > 0) {
            jQuery('html,body').animate({
                scrollTop: jQuery('#second-scroll').offset().top - 150
            }, 600);
        } else {
            jQuery('html,body').animate({
                scrollTop: jQuery('#second-scroll').offset().top - 45
            }, 600);
        }

    });

    // calculator grph start here
    if (jQuery('#year-grph').length > 0) {
        var options = {
            series: [{
                name: 'Principal Amount',
                data: [0, 5, 10, 15, 20]
            }, {
                name: 'Interest Amount',
                data: [0, 2, 4, 6, 8]
            }],

            chart: {
                height: 275,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                width: 1,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%',
                    endingShape: 'rounded'
                },
            },
            // fill: {
            //     colors: ['#FEEAE0', '#e4e8f8'],
            //     type: "gradient",
            //     gradient: {
            //         shadeIntensity: 1,
            //         opacityFrom: 1,
            //         opacityTo: 1,
            //         stops: [100, 100, 100]
            //     }
            // },
            colors: ['#F26522', '#162b75'],
            markers: {
                size: 5,
                strokeWidth: 0,
                hover: {
                    size: 6
                },
                colors: ['#F26522', '#162b75']
            },
            grid: {
                show: true,
                yaxis: {
                    lines: {
                        show: false
                    }
                },
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: -10,
            },
            xaxis: {
                categories: [],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
                title: {
                    text: 'Years Elapsed',
                    offsetY: 6,
                    style: {
                        color: '#707070',
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 700,
                    },
                },
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: '#707070',
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 400,
                    },
                },
                title: {
                    text: 'Loan Paid (£)',
                    offsetX: -20,
                    style: {
                        color: '#707070',
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 700,
                    },
                },
                labels: {
                    formatter: function(value) {
                        return value + "M";
                    }
                },
            },

        };

        var chart = new ApexCharts(document.querySelector("#year-grph"), options);
        chart.render();
    }
    //Dynamic row show on click of no of ornaments
    jQuery(document).on('click', '.bob-cal-bbutton-div .bob-custom-dropdown ul li', function() {
        var this_val = jQuery(this).attr('data-no');
        if (this_val == 0) {
            jQuery('.bob-select-data-div').slideUp();
        } else {
            //console.log("in dynamic");
            jQuery('.bob-select-data-div').slideDown();
            jQuery('.bob-selected-div table tbody tr').css('display', 'none');
            for (var i = 1; i <= this_val; i++) {
                jQuery('.bob-selected-div table tbody tr:nth-child(' + i + ')').css('display', 'table-row');
            }
        }
    });
    jQuery('.bob-loan-calculator-details-div input[type="radio"]').on('change', function() {
        if (jQuery('#daysonly').is(':checked')) {
            jQuery('.days-depend').css('display', 'none');
        } else {
            jQuery('.days-depend').css('display', 'flex');
        }
    });

    jQuery('.table-data-show input[type="radio"]').on('change', function() {
        if (jQuery('#tableid').is(':checked')) {
            jQuery(this).parents('.table-data-show').addClass('table-open');
            jQuery("#div_RDTable").show();
        } else {
            jQuery(this).parents('.table-data-show').removeClass('table-open');
            jQuery("#div_RDTable").hide();
        }
    });
    // calculator grph end here

    /*Hide Carousel slide-info if empty*/
    if (jQuery(".carousel .slide-info").html() == "") {
        jQuery(".carousel .slide-info").hide();
        jQuery(".carousel").addClass("carousel-slide-info-hidden");

    }

    /*Hide Readmore if empty*/
    if (jQuery(".bob-download-file").attr("href") == "") {
        jQuery(".bob-download-file").hide();
    }


    // blog start here 
    popularslider();
    interestedslider();

    jQuery(".load-more-list-div .col-sm-3").slice(0, 8).show();

    jQuery(".load-more-list-div .bob-report-load-more button").on('click', function(e) {
        jQuery(".load-more-list-div .col-sm-3:hidden").slice(0, 8).slideDown();

        if (jQuery(".bob-report-list-div .col-sm-3:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });

    jQuery(".awards-page .awards-list").slice(0, 6).addClass('d-flex');

    jQuery(".awards-page .bob-report-load-more button").on('click', function(e) {
        jQuery(".awards-page .awards-list:hidden").slice(0, 6).addClass('d-flex');

        if (jQuery(".awards-page .awards-list:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });


    jQuery(".blog-main .bob-popular-article-slider .item").slice(0, 6).show();

    jQuery(".blog-main .blog-load-more-div button").on('click', function(e) {
        jQuery(".blog-main .bob-popular-article-slider .item:hidden").slice(0, 6).slideDown();

        if (jQuery(".blog-main .bob-popular-article-slider .item:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });

    jQuery(".contact-us-page .br-flex .officesListToDisplay").slice(0, 4).show();

    jQuery(".br-flex-load-more.bob-report-load-more .loadmore-btn").on('click', function(e) {
        jQuery(".contact-us-page .br-flex .officesListToDisplay:hidden").slice(0, 4).slideDown();

        if (jQuery(".contact-us-page .br-flex .officesListToDisplay:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });

    jQuery(".blog-comments-div ul li").slice(0, 3).show();

    jQuery(".blog-comments-div .bob-report-load-more .loadmore-btn").on('click', function(e) {
        jQuery(".blog-comments-div ul li:hidden").slice(0, 3).slideDown();

        if (jQuery(".blog-comments-div ul li:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });

    jQuery(".bob-search-popup-div .search-result-list").mCustomScrollbar({
        scrollbarPosition: "outside"
    });
    if (winW > 1025) {
        jQuery(".bob-atm-scroll-div").mCustomScrollbar({
            scrollbarPosition: "outside"
        });
        jQuery(".office-detail-contact-tab-content-wrap .office-contact-detail-text-box").mCustomScrollbar({
            scrollbarPosition: "inside"
        });
    }

    function interestedslider() {

        var slick_init = '.bob-interasted-article-slider-active';

        function slider() {
            jQuery(slick_init).slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                rtl: _rtl,
                prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
                nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        }
        if (jQuery(slick_init).hasClass('slick-initialized')) {
            jQuery(slick_init).slick('unslick');
            slider();
        } else {
            slider();
        }
    }

    function popularslider() {

        var slick_init = '.bob-popular-article-slider-active';

        function slider() {
            jQuery(slick_init).slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 3,
                slidesPerRow: 1,
                adaptiveHeight: true,
                rtl: _rtl,
                prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
                nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',

            });
        }
        if (jQuery(slick_init).hasClass('slick-initialized')) {
            jQuery(slick_init).slick('unslick');
            slider();
        } else {
            slider();
        }
    }
    // blog end here

    // gallery start here 
    if (jQuery('.bob-report-list-div .col-sm-4').length > 0) {
        jQuery(".bob-report-list-div .col-sm-4").slice(0, 6).show();
    } else {
        jQuery(".bob-report-list-div .col-sm-3").slice(0, 12).show();
    }

    jQuery(".bob-gallery-load-more .loadmore-btn").on('click', function(e) {
        if (jQuery('.bob-report-list-div .col-sm-4').length > 0) {
            jQuery(".bob-report-list-div .col-sm-4:hidden").slice(0, 6).slideDown();
        } else {
            jQuery(".bob-report-list-div .col-sm-3:hidden").slice(0, 12).slideDown();
        }

        if (jQuery(".bob-report-list-div .col-sm-4:hidden,.bob-report-list-div .col-sm-3:hidden").length == 0) {
            jQuery(this).parents('.bob-gallery-load-more').fadeOut('slow');
        }
    });

    jQuery(document).on('click', '.view-all-photos-link a.view-all-tlink, .bob-gallery-img-div', function() {
        var this_thumb = jQuery(this).parents('.bob-report-d-div').find('.bob-views-li').attr('data-thumb-img');
        const usingSplit = this_thumb.split(',');
        for (var i = 0; i < usingSplit.length; i++) {
            usingSplit[i];
        }
        var thumb_img = jQuery.makeArray(usingSplit);
        var thumb_img_length = thumb_img.length - 1;
        //console.log(thumb_img);
        var this_big = jQuery(this).parents('.bob-report-d-div').find('.bob-views-li').attr('data-big-img');
        const usingSplit1 = this_big.split(',');
        for (var i = 0; i < usingSplit.length; i++) {
            usingSplit1[i];
        }
        var big_img = jQuery.makeArray(usingSplit1);
        var big_img_length = big_img.length - 1;

        //console.log(big_img);
        if (jQuery('.bob-light-box-popup-div').hasClass('bob-light-video-box-popup-div')) {
            for (var j = 0; j <= thumb_img_length; j++) {
                jQuery('.bob-popup-slider-thumb').append('<img class="img-fluid" src="' + thumb_img[j] + '" data-iframe="' + big_img[j] + '"  />');
            }
        } else {
            for (var j = 0; j <= thumb_img_length; j++) {
                jQuery('.bob-popup-slider-thumb').append('<img class="img-fluid" src="' + thumb_img[j] + '" />');
            }
        }



        if (jQuery('.bob-light-box-popup-div').hasClass('bob-light-video-box-popup-div')) {
            for (var j = 0; j <= big_img_length; j++) {
                jQuery('.bob-popup-slider-big').append('<iframe class="img-fluid big-frame" src="' + big_img[j] + '"></iframe>');
            }

        } else {
            for (var j = 0; j <= big_img_length; j++) {
                jQuery('.bob-popup-slider-big').append('<img class="img-fluid big-frame" src="' + big_img[j] + '" />');
            }
        }


        setTimeout(function() {
            lightpopupslider();
            jQuery('body').addClass('bob-open-light-box');
        }, 200);
        jQuery(document).on('click', '.bob-light-box-popup-div .bob-closed-btn ', function() {
            jQuery('body').removeClass('bob-open-light-box');
            jQuery('.bob-popup-slider-big,.bob-popup-slider-thumb').slick('unslick');
            jQuery('.bob-popup-slider-big img,.bob-popup-slider-thumb img,.bob-popup-slider-big iframe,.bob-popup-slider-thumb iframe').remove();
        });
        jQuery(document).on('click', '.bob-open-light-box .bob-overlay', function(e) {
            var container = jQuery(".bob-light-box-popup-div");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                jQuery('body').removeClass('bob-open-light-box');
                jQuery('.bob-popup-slider-big,.bob-popup-slider-thumb').slick('unslick');
                jQuery('.bob-popup-slider-big img,.bob-popup-slider-thumb img,.bob-popup-slider-big iframe,.bob-popup-slider-thumb iframe').remove();

            }
        });
        // bob - popup - slider - thumb
    });
    jQuery(document).on('click', '.e-auction-detail .read-more-btn', function() {
        let href = jQuery(".e-auction-detail .read-more-btn").attr('href');



        var thumb_img = ['/-/media/project/bob/countrywebsites/india/media/video-gallery/thumbnail/shri-sanjiv-chadha--md--ceo-in-an-interview.jpg" data-iframe="https://www.youtube.com/embed/Q5v1bxT-aX4']
        var thumb_img_length = thumb_img.length - 1;
        //console.log(thumb_img);

        var big_img = ['/-/media/project/bob/countrywebsites/india/media/video-gallery/thumbnail/shri-sanjiv-chadha--md--ceo-in-an-interview.jpg']
        var big_img_length = big_img.length - 1;

        //console.log(big_img);
        if (jQuery('.bob-light-box-popup-div').hasClass('bob-light-video-box-popup-div')) {
            for (var j = 0; j <= thumb_img_length; j++) {
                jQuery('.bob-popup-slider-thumb').append('<img class="img-fluid" src="' + thumb_img[j] + '" data-iframe="' + big_img[j] + '"  />');
            }
        } else {
            for (var j = 0; j <= thumb_img_length; j++) {
                jQuery('.bob-popup-slider-thumb').append('<img class="img-fluid" src="' + thumb_img[j] + '" />');
            }
        }



        if (jQuery('.bob-light-box-popup-div').hasClass('bob-light-video-box-popup-div')) {
            for (var j = 0; j <= big_img_length; j++) {
                jQuery('.bob-popup-slider-big').append('<iframe class="img-fluid big-frame" src="' + big_img[j] + '"></iframe>');
            }

        } else {
            for (var j = 0; j <= big_img_length; j++) {
                jQuery('.bob-popup-slider-big').append('<img class="img-fluid big-frame" src="' + big_img[j] + '" />');
            }
        }


        setTimeout(function() {
            lightpopupslider();
            jQuery('body').addClass('bob-open-light-box');
        }, 200);
        jQuery(document).on('click', '.bob-light-box-popup-div .bob-closed-btn ', function() {
            jQuery('body').removeClass('bob-open-light-box');
            jQuery('.bob-popup-slider-big,.bob-popup-slider-thumb').slick('unslick');
            jQuery('.bob-popup-slider-big img,.bob-popup-slider-thumb img,.bob-popup-slider-big iframe,.bob-popup-slider-thumb iframe').remove();
        });
        jQuery(document).on('click', '.bob-open-light-box .bob-overlay', function(e) {
            var container = jQuery(".bob-light-box-popup-div");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                jQuery('body').removeClass('bob-open-light-box');
                jQuery('.bob-popup-slider-big,.bob-popup-slider-thumb').slick('unslick');
                jQuery('.bob-popup-slider-big img,.bob-popup-slider-thumb img,.bob-popup-slider-big iframe,.bob-popup-slider-thumb iframe').remove();

            }
        });

    });


    // atm start here
    similarslider();

    jQuery('.grid-view-li').on('click', function() {

        if (winW < 1025) {
            jQuery('body').addClass('atm-view-grid');
            jQuery(this).removeClass('active');
            jQuery('.map-view-li').addClass('active');
        } else {
            jQuery('body').addClass('atm-view-grid');
            jQuery(this).parents('.bob-view-ul').find('li').removeClass('active');
            jQuery(this).addClass('active');
        }
    });
    jQuery('.map-view-li').on('click', function() {
        if (winW < 1025) {
            jQuery('body').removeClass('atm-view-grid');
            jQuery(this).removeClass('active');
            jQuery('.grid-view-li').addClass('active');
        } else {
            jQuery('body').removeClass('atm-view-grid');
            jQuery(this).parents('.bob-view-ul').find('li').removeClass('active');
            jQuery(this).addClass('active');
        }

    });
    jQuery(".bob-grid-view-div .bob-details-data-popup").slice(0, 3).show();

    jQuery(".bob-grid-view-div .bob-report-load-more .loadmore-btn").on('click', function(e) {
        jQuery(".bob-grid-view-div .bob-details-data-popup:hidden").slice(0, 3).slideDown();

        if (jQuery(".bob-grid-view-div .bob-details-data-popup:hidden").length == 0) {
            jQuery(this).parents('.bob-report-load-more').fadeOut('slow');
        }
    });

    jQuery(document).on('click', '.bob-parent-accordion-div>span', function() {
        jQuery('.back-to-result').trigger('click');
        if (jQuery(this).parents('.bob-parent-accordion-div').hasClass('bob-parent-open-accordion')) {
            jQuery(this).parents('.bob-parent-accordion-div').removeClass('bob-parent-open-accordion');
            jQuery(this).parents('.bob-parent-accordion-div').find('.bob-parent-accordion-list-div').slideUp();


        } else {
            jQuery('.bob-parent-accordion-div').removeClass('bob-parent-open-accordion');
            jQuery('.bob-parent-accordion-div').find('bob-parent-accordion-list-div').slideUp();
            jQuery(this).parents('.bob-parent-accordion-div').addClass('bob-parent-open-accordion');
            jQuery(this).parents('.bob-parent-accordion-div').find('.bob-parent-accordion-list-div').slideDown();
        }
    });
    if (winW > 1025) {
        jQuery(".bob-atm-scroll-div ").mCustomScrollbar({
            scrollbarPosition: "outside"
        });
    }
    jQuery('.bob-line-arrow-orange-link').on('click', function() {
        jQuery(this).parents('.bob-atm-scroll-div').addClass('show-details-data-div');
        jQuery('.bob-parent-accordion-div').removeClass('bob-parent-open-accordion');
        jQuery('.bob-parent-accordion-div').find('.bob-parent-accordion-list-div').slideUp();
    });
    jQuery('.back-to-result').on('click', function() {
        jQuery(this).parents('.bob-atm-scroll-div').removeClass('show-details-data-div');
    });
    // atm end here 


    /*Call Header Menu function*/
    //fnSetHeaderMenuBasedOnPage();

    jQuery('.bob-calculator-banner .link-list li:first-child a').addClass('active');
    jQuery(document).on('click', '.bob-calculator-banner .link-list li', function() {
        jQuery(this).parents('.link-list').find('li a').removeClass('active');
        jQuery(this).find('a').addClass('active');
    });
    jQuery(document).on('click', '.tabs .tabs-heading li', function() {
        jQuery(this).parents('.tabs-heading').find('li').removeClass('active');
        jQuery(this).addClass('active');
        if (jQuery(this).parents('ul.tabs-heading').hasClass('mCustomScrollbar')) {
            jQuery(this).parents('.tab_scroll_div_n').next('.tabs-container').find('.tab').removeClass('active');
            jQuery(this).parents('.tab_scroll_div_n').next('.tabs-container').find('.tab:eq(' + (jQuery(this).index()) + ')').addClass('active');
            var this_scroll_active = jQuery('.bob-loan-page-tab-div .tabs-heading li.active').offset().left;
            //console.log(this_scroll_active);
            // jQuery(".bob-loan-page-tab-div .tabs-heading").mCustomScrollbar("scrollTo", this_scroll_active);

            jQuery('html,body').animate({
                scrollTop: jQuery('.bob-loan-page-tab-div').offset().top - 86
            }, 600);
            setTimeout(function() {
                AOS.refresh();
            }, 100);
        }
    });


    jQuery(".amalgamation-of-vijaya .bob-report-list-div .col-sm-3,.annual-reports .bob-report-list-div .col-sm-3").slice(0, 12).show();
    jQuery(".amalgamation-of-vijaya .bob-report-load-more .loadmore-btn,.annual-reports .bob-report-load-more .loadmore-btn").on('click', function(e) {
        jQuery(".amalgamation-of-vijaya .bob-report-list-div .col-sm-3:hidden,.annual-reports .bob-report-list-div .col-sm-3:hidden").slice(0, 8).slideDown();
        if (jQuery(".amalgamation-of-vijaya .bob-report-list-div .col-sm-3:hidden,.annual-reports .bob-report-list-div .col-sm-3:hidden").length == 0) {
            jQuery(this).parents('.amalgamation-of-vijaya .bob-report-load-more,.annual-reports .bob-report-load-more').fadeOut('slow');
        }
    });



    jQuery(".bob-filter-c-div.bob-inner-brands-c-div .form-group").slice(0, 5).show();
    jQuery(".bob-show-100-more-btn span").on('click', function(e) {
        e.preventDefault();
        jQuery(".bob-filter-c-div.bob-inner-brands-c-div .form-group:hidden").slice(0, 100).slideDown();
        if (jQuery(".bob-filter-c-div.bob-inner-brands-c-div .form-group:hidden").length == 0) {
            jQuery(".bob-show-100-more-btn").css('cssText', 'display:none !important');
            // jQuery(".bob-load-more-btn.bob-loan-faq-load-more-div li.item1").fadeIn('slow');
        }
    });
    jQuery('.bob-promo-tab-div .component-content ul li a').on('click', function() {
        var tab_string = (jQuery(this).attr('href')).slice(1);
        jQuery('.bob-tab-content').removeClass('active');
        jQuery('.bob-tab-content.' + tab_string).addClass('active');

        jQuery(this).parents('.bob-promo-tab-div').find('.component-content ul li a').removeClass('active');
        jQuery(this).addClass('active');
        if (winW < 767) {
            mobvideoslider();
        }
    });
    jQuery(document).on('click', '.videos-tab .bob-blogs-thumb-style ul li .box .field-thumbnail', function() {
        var this_link = jQuery(this).parents('li.item').find('.field-youtubekey').text();
        jQuery('.bob-iframe-popup-div iframe').attr('src', 'https://www.youtube.com/embed/' + this_link);
        jQuery('body').addClass('bob-iframe-popup-open');
    });
    jQuery(document).on('click', '.bob-popup-common-div .bob-closed-btn', function() {
        jQuery('.bob-iframe-popup-div iframe').attr('src', '');
        jQuery('body').removeClass('bob-iframe-popup-open');
    });
    jQuery(document).on('click', '.bob-iframe-popup-open .bob-overlay', function(e) {
        var container = jQuery(".bob-popup-common-div");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('.bob-iframe-popup-div iframe').attr('src', '');
            jQuery('body').removeClass('bob-iframe-popup-open');
        }
    });



    const rangeInputs = document.querySelectorAll('input[type="range"]')
    const numberInput = document.querySelector('input[type="text"]')

    var LoanAmt = 0;
    var Tenure = 0;
    var InterestRate = 0;

    function handleInputChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('range') //Tenure
        }
        var min = target.min
        var max = target.max
        var val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        jQuery(this).parents('.slidecontainer').next('small').find('em').text(val);

        UpdateSliderValues();
    }


    function UpdateSliderValues() {


        if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {

            var targetAmt = document.getElementById('amt_id').value; //Loan Amount

            var targetTenure = document.getElementById('month_id').value; //Tenure
            var targetInterest = document.getElementById('rates_id').value; //Interest Rate

        }

        var intRate = targetInterest / 100;

        var noOfYears = targetTenure / 12;
        var arrYrs = [];

        for (var i = 0; i <= noOfYears; i++) {
            arrYrs.push(i);
        }
        //console.log("no of yrs  " + noOfYears);
        //console.log(arrYrs);


        var Emi = (targetAmt * intRate / 12) * (Math.pow((1 + intRate / 12), targetTenure) / (Math.pow((1 + intRate / 12), targetTenure) - 1));
        var full = Emi * targetTenure;
        var interest = full - targetAmt;

        //console.log("Math.round===>"+Math.round(Emi));
        jQuery('#monthly-hl-emi').html("£ " + Math.round(Emi).toLocaleString());
        jQuery(".total-loan span").html("£ " + Math.round(Emi).toLocaleString());
        jQuery('#spn_principal_amt').html("£ " + Math.round(targetAmt).toLocaleString());
        jQuery('#spn_interest_amt').html("£ " + Math.round(interest).toLocaleString());
        jQuery('#spn_total_amt').html("£ " + Math.round(full).toLocaleString());


        // Table Code
        yearlyTableData();


    } //function end




    function yearlyTableData() {
        var principalBalArray = new Array();
        var interestBalArray = new Array();
        var TotalOwing = new Array();
        if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {
            var oldBalance = jQuery("#amt_id").val();
            var newBalance = jQuery("#amt_id").val();
            var principal = parseInt(jQuery("#amt_id").val());
            var interest_rate = parseFloat(jQuery("#rates_id").val()) / 100;
            var targetTenure = document.getElementById('month_id').value; //Tenure
        }

        var noOfYears = targetTenure / 12;

        var year = parseInt(noOfYears * 12);
        var year2 = parseInt(noOfYears);




        var installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1))

        var monthlyinstallment;
        var interest_rateVal = 0,
            interestTotalBal = 0,
            principalBal = principal;
        principalBalArray.push(principal);
        interestBalArray.push(sumArrayFun(0));
        TotalOwing.push((principal + sumArrayFun(0)));
        var firstMonth_interestVal = ((principal * interest_rate / 12))

        for (var i = 1; i <= year; i++) {
            interest_rateVal = (principalBal * interest_rate) / 12;
            var sunmArray = sumArrayFun(i)
            principalBal = principalBal - installment + interest_rateVal;
            principalBalArray.push(principalBal)
            interestBalArray.push(sunmArray)
            TotalOwing.push(principalBal + sunmArray);
        }
        installment = installment * 12;
        var principalVal = new Array();
        var interestVal = new Array();
        var TotalVal = new Array();
        var plus = 0;

        var arrPrincipalAmt = [];
        var arrInterestAmt = [];

        var content = "";
        content += "<table>";
        content += " <thead>";
        content += "   <tr>";
        content += "     <th>Year</th>";
        content += "     <th>Opening Balance</th>";
        content += "     <th>EMI*12</th>";
        content += "     <th>Interest paid yearly</th>";
        content += "     <th>Principal paid yearly</th>";
        content += "     <th>Closing Balance</th>";
        content += "   </tr>";
        content += "</thead>";

        for (var i = 1; i <= year2; i++) {
            if (year2 == i) plus = 0;
            var principalAmtValue = principalBalArray[i * 12] + plus;
            var interestAmtValue = interestBalArray[i * 12] + plus;
            var TotalVal2 = TotalOwing[i * 12] + plus;

            var interestAmount, principalAmount, TotalInterestAmount;
            interestAmount = firstMonth_interestVal + interestBalArray[1] - interestAmtValue;
            principalAmount = principal - principalAmtValue;
            TotalInterestAmount = interestAmount + principalAmount;
            TotalVal.push(Math.round(interestAmount + principalAmount));
            interestVal.push(Math.round(interestAmount));
            principalVal.push(Math.round(principalAmount));


            var yearlyinstallment = installment;
            var owedInterest = newBalance * interest_rate;
            var dispInt = twoDecimal(owedInterest);

            if (i < year2) {
                yearlyinstallment = twoDecimal(installment - dispInt);
                oldBalance = newBalance;
                newBalance = twoDecimal(oldBalance - yearlyinstallment);
            } else {
                yearlyinstallment = (oldBalance - yearlyinstallment) + owedInterest;
                oldBalance = newBalance;
                newBalance = 0;
                yearlyinstallment = twoDecimal(yearlyinstallment);
            }
            content += "<tbody>";
            content += "<tr>";
            content += "    <td>" + Math.round(i) + "</td>";
            content += "    <td>" + Math.round(oldBalance).toLocaleString() + "</td>";
            content += "    <td>" + Math.round(installment).toLocaleString() + "</td>";
            content += "    <td>" + Math.round(interestAmount).toLocaleString() + "</td>";
            content += "    <td>" + Math.round(principalAmount).toLocaleString() + "</td>";
            content += "    <td>" + Math.round(newBalance).toLocaleString() + "</td>";
            content += "</tr>";
            content += "</tbody>";

            arrPrincipalAmt.push(Math.round(principalAmount));
            arrInterestAmt.push(Math.round(interestAmount));
        }
        content += "</table>";
        if (jQuery('#calculateHomeLoan').length > 0) {
            document.getElementById('calculateHomeLoan').innerHTML = content;
        }
        if (jQuery('#year-grph').length > 0) {
            updateBarChartSeries(arrPrincipalAmt, arrInterestAmt);
        }


        return [principalVal, interestVal, TotalVal];
    }

    function updateBarChartSeries(_arrPrincipalAmt, _arrInterestAmt) {

        console.log("_arrPrincipalAmt==" + JSON.stringify(_arrPrincipalAmt));
        console.log("_arrInterestAmt==" + JSON.stringify(_arrInterestAmt));
        if (_arrPrincipalAmt.length == 0 && _arrInterestAmt.length == 0) {
            //_arrPrincipalAmt.push(jQuery("#spn_principal_amt").html().replace("£", "").replaceAll(",", "").replaceAll(" ", ""));
            //_arrInterestAmt.push(jQuery("#spn_interest_amt").html().replace("£", "").replaceAll(",", "").replaceAll(" ", ""));
        }

        chart.updateSeries([{
            name: 'Principal Amount',
            data: _arrPrincipalAmt
        }, {
            name: 'Interest Amount',
            data: _arrInterestAmt
        }]);
    }

    function sumArrayFun(countNumber) {
        var principalBalArray = Interest();
        var sumVal = 0;
        for (var i = countNumber; i < principalBalArray[0].length; i++) {
            sumVal = sumVal + principalBalArray[0][i];
        }
        return sumVal;
    }

    function Interest() {
        var year_Array_Amount = new Array();
        if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {
            var principal = parseInt(jQuery("#amt_id").val());
            var interest_rate = parseFloat(jQuery("#rates_id").val()) / 100;
            var targetTenure = document.getElementById('month_id').value; //Tenure
        }

        var noOfYears = targetTenure / 12;

        var year = parseInt(noOfYears * 12);
        var interestArray = [];
        var principalBalarray = [];
        var principalBal = principal,
            interest_rateVal = 0,
            installment = 0,
            interestTotalBal;
        installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1));
        installment = installment.toFixed(2);
        for (var i = 1; i <= year; i++) {
            interest_rateVal = (principalBal * interest_rate) / 12;
            principalBalarray.push(principalBal);
            principalBal = (principalBal - installment) + interest_rateVal;
            interestArray.push(interest_rateVal);
        }
        return [interestArray, principalBalarray];
    }

    function twoDecimal(chgVar) {
        var chgVar;
        var twoDec = chgVar.toFixed(2);
        return twoDec;
    }


    jQuery(document).on('keyup', '.bob-loan-calculator ul li small em', function(e) {


        fnGlblValidateCalcFields(e, this, jQuery(this).parents('li').find('.slidecontainer input').attr('id'), jQuery(this).text());



        var val = jQuery(this).text();
        if (val.length == 0 || val == '0') {
            val = 0;
            target = jQuery(this).parents('li').find('.slidecontainer input').val(val);
            jQuery(target).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
        } else {
            var target = jQuery(this).parents('li').find('.slidecontainer input').attr('id');
            var min = jQuery(this).parents('li').find('.slidecontainer input').attr('min');
            var max = jQuery(this).parents('li').find('.slidecontainer input').attr('max');
            jQuery(this).parents('li').find('.slidecontainer input').val(val);
            jQuery('#' + target).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
            UpdateSliderValues();
        }
    });
    setTimeout(function() {
        jQuery('input[type="range"]').each(function() {
            var min = jQuery(this).attr('min');
            var max = jQuery(this).attr('max');
            var val = jQuery(this).attr('value');
            jQuery(this).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
        });
    }, 200);
    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    });
    if (!(location.href.indexOf("gold-loan-calculator") > -1)) {
        /*numberInput.addEventListener('input', handleInputChange)*/
    }





    /* mobile header/footer start here */
    if (winW < 1025) {
        var login_drop = '<li><div class="bob-custom-dropdown bob-login-dropdown bob-logincc-div">' + jQuery('.bob-login-dropdown').html() + '</div></li>';
        jQuery('.bob-login-dropdown').remove();
        jQuery(login_drop).insertAfter(".bob-top-bottom-navbar .bob-bottom-second-ul li:last-child");

        var setting_html = '<div class="bob-top-navbar"><ul class="bob-nav-right-link">' + jQuery('.bob-nav-right-link').html() + '</ul></div>';
        jQuery('.bob-nav-right-link').remove();
        jQuery('.bob-mobile-sidebar .bob-navbar').append(setting_html);

        var main_links = '<ul class="bob-bottom-first-ul">' + jQuery('.bob-bottom-first-ul').html() + '</ul>';
        jQuery('.bob-bottom-first-ul').remove();
        jQuery('.bob-mobile-sidebar .bob-top-bottom-navbar').append(main_links);

        var middle_links = '<ul class="bob-middle-first-link bob-middle-second-link">' + jQuery('.bob-middle-first-link.bob-middle-second-link').html() + '</ul>';
        jQuery('.bob-middle-first-link.bob-middle-second-link').remove();
        if (jQuery('.bob-middle-first-link.bob-middle-second-link').html() != undefined) {
            jQuery('.bob-mobile-sidebar .bob-middle-navbar').append(middle_links);
        }


        jQuery(document).on('click', '.bob-mobile-bar', function() {
            if (jQuery(this).hasClass('bob-active-bar')) {
                jQuery(this).removeClass('bob-active-bar');
                jQuery('body').removeClass('bob-open-nav-mob bob-open-iner-menu bob-open-navinner-mob');
                jQuery('.bob-inner-list-nav').find('.bob-inner-menu-expand').slideUp();
                jQuery('.bob-inner-list-nav h6').removeClass('active-mob-dropdown');
                jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown').find('.bob-custom-dropdown-list').slideUp();
            } else {
                jQuery(this).addClass('bob-active-bar');
                jQuery('body').addClass('bob-open-nav-mob');
            }
        });

        jQuery(document).on('click', '.bob-inner-list-nav h6', function() {
            if (jQuery(this).hasClass('active-mob-dropdown')) {
                jQuery(this).removeClass('active-mob-dropdown');
                jQuery('body').removeClass('bob-open-nav-inner-mob');
                jQuery(this).parents('.bob-inner-list-nav').find('.bob-inner-menu-expand').slideUp();
            } else {
                jQuery('.bob-inner-list-nav').find('.bob-inner-menu-expand').slideUp();
                jQuery('.bob-inner-list-nav h6').removeClass('active-mob-dropdown');
                jQuery(this).addClass('active-mob-dropdown');
                jQuery('body').addClass('bob-open-nav-inner-mob');
                jQuery(this).parents('.bob-inner-list-nav').find('.bob-inner-menu-expand').slideDown();
            }
        });
        jQuery(document).on('click', '.bob-custom-dropdown-list .revers_h', function() {
            jQuery('body').removeClass('bob-open-nav-inner-mob');
            jQuery(this).parents('.bob-nav-custom-dropdown').removeClass('bob-open-dropdown');
        });

        jQuery(document).on('click', 'footer .bob-footer-nav-links h6', function() {
            if (jQuery(this).hasClass('active-mob-footer-dropdown')) {
                jQuery(this).removeClass('active-mob-footer-dropdown');
                jQuery(this).parents('.bob-footer-nav-links').find('ul').slideUp();
            } else {
                jQuery('.bob-footer-nav-links').find('ul').slideUp();
                jQuery('footer .bob-footer-nav-links h6').removeClass('active-mob-footer-dropdown');
                jQuery(this).addClass('active-mob-footer-dropdown');
                jQuery(this).next('ul').slideDown();
            }
        });
    }
    /* mobile header/footer end here */

    /* tab js start here */
    jQuery(document).on('click', '.bob-tab-div .bob-tab-ul li', function() {
        if (jQuery(this).parents('.bob-tab-in-tab-div').hasClass('bob-inner-tab')) {
            jQuery(this).parents('.bob-tab-in-tab-div').find('.bob-tab-content-data').removeClass('active');
            jQuery(this).parents('.bob-tab-in-tab-div').find('.bob-tab-content-data' + jQuery(this).attr('data-tab')).addClass('active');
            jQuery(this).parents('.bob-tab-in-tab-div').find('.bob-tab-ul li').removeClass('active');
            jQuery(this).addClass('active');
        } else {
            jQuery(this).parents('.bob-tab-div').find('.bob-tab-content-data').removeClass('active');
            jQuery(this).parents('.bob-tab-div').find('.bob-tab-content-data' + jQuery(this).attr('data-tab')).addClass('active');
            jQuery(this).parents('.bob-tab-div').find('.bob-tab-ul li').removeClass('active');
            jQuery(this).addClass('active');
            jQuery(jQuery(this).attr('data-tab') + ' .bob-tab-in-tab-div .bob-tab-ul>li:first-child').trigger('click');


        }
        offerslider();
        savingslider();
    });
    /* tab js end here */

    /* custom drop down start here */
    jQuery(document).on('click', '.bob-custom-dropdown span', function() {
        if (jQuery(this).parents('.bob-custom-dropdown').hasClass('bob-open-dropdown')) {
            jQuery(this).parents('.bob-custom-dropdown').removeClass('bob-open-dropdown');
            jQuery(this).parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
            if (jQuery(this).next('.bob-custom-dropdown-list').length > 0) {
                jQuery('body').removeClass('bob-open-iner-menu');
            }


        } else {
            jQuery('body').removeClass('bob-open-iner-menu');
            jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown');
            jQuery('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
            jQuery(this).parents('.bob-custom-dropdown').addClass('bob-open-dropdown');
            jQuery(this).parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideDown();
            if (jQuery(this).parents('.bob-custom-dropdown').hasClass('bob-nav-custom-dropdown')) {
                if (jQuery(this).next('.bob-custom-dropdown-list').length > 0) {
                    jQuery('body').addClass('bob-open-iner-menu');
                }

            }
        }
    });
    jQuery(document).on('click', '.bob-custom-dropdown .bob-custom-dropdown-list li', function() {
        jQuery(this).parents('.bob-custom-dropdown').removeClass('all-select');
        if (jQuery(this).parents('.bob-custom-dropdown').hasClass('bob-nav-custom-dropdown')) {
            //console.log("in if");

        } else {
            //console.log("in else carat ddl");
            /*console.log(jQuery(this)); getting li */
            jQuery(this).parents('.bob-custom-dropdown').find('span small').text(jQuery(this).text());
            jQuery(this).parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
            jQuery(this).addClass('active');
            jQuery(this).parents('.bob-custom-dropdown').removeClass('bob-open-dropdown');
            jQuery(this).parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
            //callOrnamentDropDownChange();
        }
        /* if(jQuery(this).text() == 'All' || jQuery(this).text() == 'ALL' || jQuery(this).text() == 'all' ){

         } */
    });
    jQuery(document).on('click', function(e) {
        var container = jQuery(".bob-custom-dropdown span,.bob-custom-dropdown-list");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (jQuery('.bob-open-dropdown.bob-custom-dropdown').hasClass('bob-nav-custom-dropdown')) {

            } else {
                jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown');
                jQuery('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
            }
            // jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown');
            // jQuery('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();

        }
    });
    /* custom drop down end here */

    /* custom accordion start here */
    jQuery(document).on('click', '.bob-custom-accordion span', function() {
        if (jQuery(this).parents('.bob-custom-accordion').hasClass('bob-open-accordion')) {
            jQuery(this).parents('.bob-custom-accordion').removeClass('bob-open-accordion');
            jQuery(this).parents('.bob-custom-accordion').find('.bob-custom-accordion-list').slideUp();
            jQuery('body').removeClass('bob-open-iner-menu');

        } else {
            jQuery('body').removeClass('bob-open-iner-menu');
            jQuery('.bob-custom-accordion').removeClass('bob-open-accordion');
            jQuery('.bob-custom-accordion').find('.bob-custom-accordion-list').slideUp();
            jQuery(this).parents('.bob-custom-accordion').addClass('bob-open-accordion');
            jQuery(this).parents('.bob-custom-accordion').find('.bob-custom-accordion-list').slideDown();
            if (jQuery(this).parents('.bob-custom-accordion').hasClass('bob-nav-custom-accordion')) {
                jQuery('body').addClass('bob-open-iner-menu');
            }
        }
    });
    /* custom accordion end here*/

    /* search popup start here */
    jQuery(document).on('click', '.search-popup', function() {
        jQuery('body').addClass('bob-open-serach-popup');
        jQuery('body').removeClass('bob-open-iner-menu');
        jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown');
        jQuery('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
        if (winW < 767) {
            jQuery('.bob-mobile-bar').removeClass('bob-active-bar');
            jQuery('body').removeClass('bob-open-nav-mob bob-open-iner-menu bob-open-navinner-mob');
            jQuery('.bob-inner-list-nav').find('ul').slideUp();
            jQuery('.bob-inner-list-nav h6').removeClass('active-mob-dropdown');
            jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown').find('.bob-custom-dropdown-list').slideUp();
        }
        setTimeout(function() {
            jQuery('.bob-search-popup-div .bob-search-voice-div input').focus();
        }, 200);
    });
    jQuery(document).on('click', '.bob-closed-btn', function() {
        jQuery('body').removeClass('bob-open-serach-popup');
    });
    jQuery(document).on('click', '.bob-open-serach-popup .bob-overlay', function(e) {
        var container = jQuery(".bob-search-popup-div");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('body').removeClass('bob-open-serach-popup');
        }
    });
    jQuery(document).on('click', '.bob-open-iner-menu .bob-overlay', function(e) {
        var container = jQuery("header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('body').removeClass('bob-open-iner-menu');
            jQuery('.bob-custom-dropdown').removeClass('bob-open-dropdown');
            jQuery('.bob-custom-dropdown').find('.bob-custom-dropdown-list').slideUp();
        }
    });
    /* search popup end here */

    jQuery(window).scroll(function() {
        var Scroll_posY = jQuery(this).scrollTop();
        if (Scroll_posY > 100) {
            jQuery('body').addClass('bob-scroll-top');
            jQuery('.bob-navbar .bob-nav-pb-link li .bob-down-arrow-svg').addClass('active_svg');
            jQuery('.bob-scroll-top-div').fadeIn();
        } else {
            jQuery('body').removeClass('bob-scroll-top');
            jQuery('.bob-navbar .bob-nav-pb-link li .bob-down-arrow-svg').removeClass('active_svg');
            jQuery('.bob-scroll-top-div').fadeOut();
        }
    });
    jQuery('.bob-scroll-top-div').on('click', function() {

        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    jQuery(document).on('click', '.bob-navbar .bob-nav-pb-link li .bob-down-arrow-svg', function() {
        if (jQuery(this).hasClass('active_svg')) {
            jQuery(this).removeClass('active_svg');
            jQuery('body').removeClass('bob-scroll-top');
        } else {
            jQuery(this).addClass('active_svg');
            jQuery('body').addClass('bob-scroll-top');
        }
    });

    typesofloanslider();

    savingslider();
    offerslider();
    applyforslider();

    if (winW >= 991) {
        loantabslider();
    }
    if (winW <= 991) {
        /* productslider();
        blogslider();
        tabSlider();
        */
        mobvideoslider();
        calculatelistingslider();
    }

    var slickoptions = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        rtl: _rtl,
        slidesPerRow: 2,
        prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
        nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
        responsive: [{
            breakpoint: 992,
            settings: {
                rows: 1,
                slidesPerRow: 2
            }
        }, {
            breakpoint: 760,
            settings: {
                rows: 4,
                slidesPerRow: 1,
                adaptiveHeight: true
            }
        }]
    }

    var slider = jQuery('.offerWrap_right');
    var allSlides = jQuery('.offerWrap_right .slick-slide > div > *').clone();
    var trigger = jQuery('.home_section_4 .bob-tab-div .bob-tab-ul li');

    var ClassFilter = function(object, item) {
        this.object = object;
        this.item = item;

        this.filterFunc = function() {
            jQuery('.offerWrap_right .active').removeClass('active');
            jQuery('.home_section_4 .bob-tab-div .bob-tab-ul li[data-tab=".' + this.item + '"]').addClass('active');
            var filterSlides = allSlides.filter('.' + this.item);

            slider.css({ "opacity": "0" });
            setTimeout(
                function() {
                    slider
                        .slick('unslick')
                        .empty()
                        .append(filterSlides)
                        .slick(slickoptions)
                        .css({ "opacity": "100" })
                }, 100);
        }
    }

    jQuery(document).on('click', '.home_section_4 .bob-tab-div .bob-tab-ul li', function() {
        var this_data = jQuery(this).attr('data-tab');
        var newFilter = new ClassFilter(this, this_data);
        newFilter.filterFunc();
    });

    /* share start here */
    jQuery(document).on('click', '.bob-share-li>svg', function() {
        jQuery('.bob-share-li').removeClass('bob-open-share-li');
        if (jQuery(this).parents('.bob-share-li').hasClass('bob-open-share-li')) {
            jQuery(this).parents('.bob-share-li').removeClass('bob-open-share-li');
        } else {
            jQuery(this).parents('.bob-share-li').addClass('bob-open-share-li');
        }
    });
    jQuery(document).on('click', '.share_closed_svg', function() {
        jQuery(this).parents('.bob-share-li').removeClass('bob-open-share-li');
    });
    jQuery(document).on('click', function(e) {
        var container = jQuery(".bob-share-li");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('.bob-share-li').removeClass('bob-open-share-li');
        }
    });
    /* share end here */

    jQuery('.mob-filter>ul>li>svg').on('click', function() {
        if (jQuery(this).parents('li').hasClass('open-filter-mob')) {
            jQuery(this).parents('li').removeClass('open-filter-mob');
            jQuery(this).parents('li').find('.bob-filter-open-div').fadeOut();
            jQuery('body').removeClass('body-bob-filter-open');
        } else {
            jQuery(this).parents('.mob-filter').find('li').removeClass('open-filter-mob');
            jQuery('body').removeClass('body-bob-filter-open');
            jQuery(this).parents('li').addClass('open-filter-mob');
            jQuery(this).parents('.mob-filter').find('.bob-filter-open-div').fadeOut();
            jQuery(this).parents('li').find('.bob-filter-open-div').fadeIn();
            if (jQuery(this).parents('li').hasClass('body-fixed-filter')) {
                jQuery('body').addClass('body-bob-filter-open');
            }
            setTimeout(function() {
                jQuery('.filter-fixed .bob-filter-open-div .first-open .form-control').click();
            }, 100);
        }
    });
    jQuery('.mob-serach-closed').on('click', function() {
        jQuery(this).parents('.mob-filter').find('li').removeClass('open-filter-mob');
        jQuery(this).parents('.mob-filter').find('.bob-filter-open-div').fadeOut();

    });
    jQuery('.apply-online .breadcrumb,.baranches-atm .breadcrumb,.breadcrumbW .breadcrumb').addClass('breadcrumb-white');
    jQuery(".baranches-atm .bob-search-voice-div input").keyup(function() {
        if (jQuery(this).val().length > 0) {
            jQuery(".baranches-atm .bob-newsletter-div").addClass("addclosed ");

        } else {
            jQuery(".baranches-atm .bob-newsletter-div").removeClass("addclosed ");
        }

    });
    jQuery('.baranches-atm .bob-search-voice-div .input-group-append svg.clear-search-box').on('click', function() {
        jQuery(".baranches-atm .bob-newsletter-div").removeClass("addclosed ");
    });


    if (jQuery('.bob-search-filter').length) {
        jQuery(window).scroll(function() {
            var windowTop = jQuery(window).scrollTop();
            if (windowTop >= 124) {
                jQuery('body').addClass('sticky-filter');
                jQuery('.navigation-main-horizontal + .column-splitter').css({
                    'margin-top': jQuery('.navigation-main-horizontal').height()
                })
            } else {
                jQuery('body').removeClass('sticky-filter');
                jQuery('.navigation-main-horizontal + .column-splitter').css({
                    'margin-top': '0'
                })
            }
        });
        /* jQuery(".about-us .navigation-main-horizontal ul").mCustomScrollbar({
             axis: "x",
            theme: "dark-thin",
        }) */
    }

    if (jQuery('body').hasClass('loan-level-2')) {
        var stickyTop = jQuery('.bob-search-filter').offset().top;
        jQuery(window).scroll(function() {
            var windowTop = jQuery(window).scrollTop();
            if (stickyTop <= windowTop + 86 && jQuery(".bob-page-list-box").height() + jQuery(".bob-page-list-box").offset().top - jQuery(".bob-search-filter").height() - 86 >= windowTop) {

                jQuery('body').addClass('sticky-filter');
            } else {
                jQuery('body').removeClass('sticky-filter');
            }
        });
    }




    // if (jQuery('.tabs-heading').length > 0) {
    //     if (jQuery('.tabs-heading').length > 0) {
    //         var stickyTop1 = jQuery('.tabs-heading').offset().top;
    //     }
    //     jQuery(window).scroll(function() {
    //         var windowTop = jQuery(window).scrollTop();
    //         if (stickyTop1 <= windowTop + 88 && jQuery(".bob-loan-page-tab-div").outerHeight() >= windowTop) {

    //             jQuery('body').addClass('sticky-filter');
    //         } else {
    //             jQuery('body').removeClass('sticky-filter');
    //         }
    //     });
    // }

    if (jQuery('.tabs-heading').length > 0) {
        if (jQuery('.tabs-heading').length > 0) {
            var stickyTop1 = jQuery('.tabs-heading').offset().top;
        }
        jQuery(window).scroll(function() {
            var windowTop = jQuery(window).scrollTop();
            if (stickyTop1 <= windowTop + 88 && jQuery(".tabs-container").height() + jQuery(".tabs-container").offset().top - jQuery(".tabs-heading").height() - 88 >= windowTop) {

                jQuery('body').addClass('sticky-filter');
            } else {
                jQuery('body').removeClass('sticky-filter');
            }
        });
    }


    if (winW < 767) {
        if (jQuery('.mob-filter').length) {
            jQuery(window).scroll(function() {
                var windowTop = jQuery(window).scrollTop();
                var stickyTop1 = jQuery('.bob-blue-top-div-text').offset().top;
                if (stickyTop1 <= windowTop + 88 && jQuery(".bob-report-list-div").height() - 88 >= windowTop) {

                    jQuery('body').addClass('sticky-filter');
                } else {
                    jQuery('body').removeClass('sticky-filter');
                }
            });
        }
    }


    if (jQuery('.bob-calculator-div .bob-loan-calculator-form').length > 0) {

    } else {
        jQuery('body').addClass('no-calc');
    }

    if (winW < 991) {
        jQuery('.bob-e-auction-filter-btn-div .bob-comman-btn:first-child,.bob-parent-accordion-list-div .closed-pp.d-none,.bob-left-fixed-filter .closed-pp.d-none').on('click', function() {
            jQuery('body').removeClass('body-bob-filter-open');
            jQuery('.filter-fixed').removeClass('open-filter-mob');
        });
        var cal_html2 = '<div class="col-sm-5 full-sm-width">' + jQuery('.bob-parent-accordion-div').parents('.col-sm-5').html() + '</div>';
        // if(jQuery('.loan-level-2.bob-home-loan .component.promo.col-12.bob-loan-calculator').length > 0){

        // }else{
        //     jQuery('.loan-level-2.bob-home-loan .component.column-splitter .col-sm-5').remove();
        //     jQuery(cal_html2).insertAfter('.loan-level-2 .bob-loan-listing-intro');
        // }
        if (jQuery('.bob-parent-accordion-div').length > 0) {
            jQuery('.bob-parent-accordion-div').parents('.col-sm-5').remove();
            jQuery(cal_html2).insertAfter('.bob-loan-listing-intro');
        }

        // var cal_html3 = '<div class="col-sm-5 full-sm-width">' + jQuery('.loan-level-3.bob-home-loan .component.column-splitter .col-sm-5').html() + '</div>';
        // if(jQuery('.loan-level-3.bob-home-loan .component.promo.col-12.bob-loan-calculator').length > 0){

        // }else{
        //     jQuery('.loan-level-3.bob-home-loan .component.column-splitter .col-sm-5').remove();    
        //     jQuery(cal_html3).insertAfter('.loan-level-3 .bob-loan-listing-intro');
        // }
        const rangeInputs = document.querySelectorAll('input[type="range"]')
        const numberInput = document.querySelector('input[type="text"]')

        var LoanAmt = 0;
        var Tenure = 0;
        var InterestRate = 0;

        function handleInputChange(e) {
            let target = e.target
            if (e.target.type !== 'range') {
                target = document.getElementById('range') //Tenure
            }
            var min = target.min
            var max = target.max
            var val = target.value

            target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
            jQuery(this).parents('.slidecontainer').next('small').find('em').text(val);

            UpdateSliderValues();
        }


        function UpdateSliderValues() {

            //let target = e.target;
            if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {

                var targetAmt = document.getElementById('amt_id').value; //Loan Amount
                var targetTenure = document.getElementById('month_id').value; //Tenure
                var targetInterest = document.getElementById('rates_id').value; //Interest Rate

            }

            var intRate = targetInterest / 100;

            //console.log(targetAmt + " Loan Amt");
            //console.log(targetTenure + "  Tenure");
            //console.log(targetInterest + "  Interest");

            //E = P * r * (1+r)n
            //            -----------
            //            ((1+r)n - 1)

            //console.log( Math.pow(number, exponent);
            //var totalEmi = targetAmt * targetInterest * Math.pow((1 + targetInterest), targetTenure) / (Math.pow((1 + targetInterest), targetTenure) - 1);
            //var totalEmi = targetAmt * targetInterest * (1 + targetInterest) * targetTenure / ((1 + targetInterest) * targetTenure - 1);

            var noOfYears = targetTenure / 12;
            var arrYrs = [];

            for (var i = 0; i <= noOfYears; i++) {
                arrYrs.push(i);
            }
            //console.log("no of yrs  " + noOfYears);
            //console.log(arrYrs);


            //var Emi = (targetAmt * intRate / 12) * (Math.pow((1 + intRate / 12), noOfYears) / (Math.pow((1 + intRate / 12), noOfYears) - 1));
            var Emi = (targetAmt * intRate / 12) * (Math.pow((1 + intRate / 12), targetTenure) / (Math.pow((1 + intRate / 12), targetTenure) - 1));
            //var yearEmi = Emi * 12;
            var full = Emi * targetTenure;
            var interest = full - targetAmt

            //var totalAmtPayable = + Math.round(targetAmt) + Math.round(totalInterest);
            //var totalInterest = totalAmtPayable - targetAmt;

            //console.log(Math.round(Emi));
            jQuery('#monthly-hl-emi').html("£" + Math.round(Emi).toLocaleString());
            jQuery(".total-loan span").html("£" + Math.round(Emi).toLocaleString());
            jQuery('#spn_principal_amt').html("£" + Math.round(targetAmt).toLocaleString());
            jQuery('#spn_interest_amt').html("£" + Math.round(interest).toLocaleString());
            jQuery('#spn_total_amt').html("£" + Math.round(full).toLocaleString());

            yearlyTableData();


        } //function end




        function yearlyTableData() {
            var principalBalArray = new Array();
            var interestBalArray = new Array();
            var TotalOwing = new Array();
            if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {
                var oldBalance = jQuery("#amt_id").val();
                var newBalance = jQuery("#amt_id").val();
                var principal = parseInt(jQuery("#amt_id").val());
                var interest_rate = parseFloat(jQuery("#rates_id").val()) / 100;
                var targetTenure = document.getElementById('month_id').value; //Tenure
            }

            var noOfYears = targetTenure / 12;

            var year = parseInt(noOfYears * 12);
            var year2 = parseInt(noOfYears);




            var installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1))

            var monthlyinstallment;
            var interest_rateVal = 0,
                interestTotalBal = 0,
                principalBal = principal;
            principalBalArray.push(principal);
            interestBalArray.push(sumArrayFun(0));
            TotalOwing.push((principal + sumArrayFun(0)));
            var firstMonth_interestVal = ((principal * interest_rate / 12))

            for (var i = 1; i <= year; i++) {
                interest_rateVal = (principalBal * interest_rate) / 12;
                var sunmArray = sumArrayFun(i)
                principalBal = principalBal - installment + interest_rateVal;
                principalBalArray.push(principalBal)
                interestBalArray.push(sunmArray)
                TotalOwing.push(principalBal + sunmArray);
            }
            installment = installment * 12;
            var principalVal = new Array();
            var interestVal = new Array();
            var TotalVal = new Array();
            var plus = 0;

            var content = "";
            content += "<table>";
            content += " <thead>";
            content += "   <tr>";
            content += "     <th>Year</th>";
            content += "     <th>Opening Balance</th>";
            content += "     <th>EMI*12</th>";
            content += "     <th>Interest paid yearly</th>";
            content += "     <th>Principal paid yearly</th>";
            content += "     <th>Closing Balance</th>";
            //content += "     <th>Total Interest</th>";
            content += "   </tr>";
            content += "</thead>";

            for (var i = 1; i <= year2; i++) {
                if (year2 == i) plus = 0;
                var principalAmtValue = principalBalArray[i * 12] + plus;
                var interestAmtValue = interestBalArray[i * 12] + plus;
                var TotalVal2 = TotalOwing[i * 12] + plus;

                var interestAmount, principalAmount, TotalInterestAmount;
                interestAmount = firstMonth_interestVal + interestBalArray[1] - interestAmtValue;
                principalAmount = principal - principalAmtValue;
                TotalInterestAmount = interestAmount + principalAmount;
                TotalVal.push(Math.round(interestAmount + principalAmount));
                interestVal.push(Math.round(interestAmount));
                principalVal.push(Math.round(principalAmount));


                var yearlyinstallment = installment;
                var owedInterest = newBalance * interest_rate;
                var dispInt = twoDecimal(owedInterest);

                if (i < year2) {
                    yearlyinstallment = twoDecimal(installment - dispInt);
                    oldBalance = newBalance;
                    newBalance = twoDecimal(oldBalance - yearlyinstallment);
                } else {
                    yearlyinstallment = (oldBalance - yearlyinstallment) + owedInterest;
                    oldBalance = newBalance;
                    newBalance = 0;
                    yearlyinstallment = twoDecimal(yearlyinstallment);
                }
                content += "<tbody>";
                content += "<tr>";
                content += "    <td>" + Math.round(i) + "</td>";
                content += "    <td>" + Math.round(oldBalance).toLocaleString() + "</td>";
                content += "    <td>" + Math.round(installment).toLocaleString() + "</td>";
                content += "    <td>" + Math.round(interestAmount).toLocaleString() + "</td>";
                content += "    <td>" + Math.round(principalAmount).toLocaleString() + "</td>";
                content += "    <td>" + Math.round(newBalance).toLocaleString() + "</td>";
                //content += "    <td>" + Math.round(TotalInterestAmount).toLocaleString()  + "</td>";
                content += "</tr>";
                content += "</tbody>";
            }
            if (jQuery('#calculateHomeLoan').length > 0) {
                document.getElementById('calculateHomeLoan').innerHTML = content;
            }
            content += "</table>";
            return [principalVal, interestVal, TotalVal];
        }

        function sumArrayFun(countNumber) {
            var principalBalArray = Interest();
            var sumVal = 0;
            for (var i = countNumber; i < principalBalArray[0].length; i++) {
                sumVal = sumVal + principalBalArray[0][i];
            }
            return sumVal;
        }

        function Interest() {
            var year_Array_Amount = new Array();
            if (jQuery('#amt_id').length > 0 || jQuery('#month_id').length > 0 || jQuery('#rates_id').length > 0) {
                var principal = parseInt(jQuery("#amt_id").val());
                var interest_rate = parseFloat(jQuery("#rates_id").val()) / 100;
                var targetTenure = document.getElementById('month_id').value; //Tenure
            }

            var noOfYears = targetTenure / 12;

            var year = parseInt(noOfYears * 12);
            var interestArray = [];
            var principalBalarray = [];
            var principalBal = principal,
                interest_rateVal = 0,
                installment = 0,
                interestTotalBal;
            installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1));
            installment = installment.toFixed(2);
            for (var i = 1; i <= year; i++) {
                interest_rateVal = (principalBal * interest_rate) / 12;
                principalBalarray.push(principalBal);
                principalBal = (principalBal - installment) + interest_rateVal;
                interestArray.push(interest_rateVal);
            }
            return [interestArray, principalBalarray];
        }

        function twoDecimal(chgVar) {
            var chgVar;
            var twoDec = chgVar.toFixed(2);
            return twoDec;
        }
        // jQuery(document).on('keyup', '.bob-loan-calculator ul li small em', function(e) {

        //     var val = jQuery(this).text();
        //     if (val.length >= 8) {
        //         alert('>')
        //       jQuery(this).attr('contenteditable',false);
        //     }else{
        //         jQuery(this).attr('contenteditable',true);
        //     }
        // }

        jQuery(document).on('keyup', '.bob-loan-calculator ul li small em', function(e) {

            var val = jQuery(this).text();
            // if (jQuery(this).text().length >= 8) {
            //     e.preventDefault();
            // }
            if (val.length == 0 || val == '0') {
                val = 0;
                jQuery(this).parents('li').find('.slidecontainer input').val(val);
                jQuery(target).css({
                    'background-size': (val - min) * 100 / (max - min) + '% 100%'
                });
            } else {
                var target = jQuery(this).parents('li').find('.slidecontainer input').attr('id');
                var min = jQuery(this).parents('li').find('.slidecontainer input').attr('min');
                var max = jQuery(this).parents('li').find('.slidecontainer input').attr('max');
                jQuery(this).parents('li').find('.slidecontainer input').val(val);
                jQuery('#' + target).css({
                    'background-size': (val - min) * 100 / (max - min) + '% 100%'
                });
                UpdateSliderValues();
            }


        });
        jQuery('input[type="range"]').each(function() {
            var min = jQuery(this).attr('min');
            var max = jQuery(this).attr('max');
            var val = jQuery(this).attr('value');
            jQuery(this).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
        });
        rangeInputs.forEach(input => {
            input.addEventListener('input', handleInputChange);
        });
        if (!(location.href.indexOf("gold-loan-calculator") > -1)) {
            numberInput.addEventListener('input', handleInputChange)
        }
    }


    jQuery('.bob-svg-text-link-div ul li').on('click', function(e) {

        var this_text = jQuery(this).find('span').text();
        //console.log(this_text);
        if (this_text == 'Apply now') {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: jQuery('#request-callback').offset().top - 300
            }, 1000);
        }
    });



});

function savingslider() {
    var slick_init = '.savingslider';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 2,
            rtl: _rtl,
            slidesToScroll: 2,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }

    jQuery('.disc-box-right-div .closed-pp').on('click', function() {
        jQuery('.disc-box-right-div').fadeOut();
    });
}

function offerslider() {

    var slick_init = '.offerWrap_right';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            rtl: _rtl,
            slidesPerRow: 2,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesPerRow: 2
                }
            }, {
                breakpoint: 760,
                settings: {
                    rows: 4,
                    slidesPerRow: 1,
                    adaptiveHeight: true
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }
}



function loantabslider() {

    var slick_init = '.bob-loan-page-tab-div .tabs-heading11';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            rtl: _rtl,
            variableWidth: true,
            prevArrow: '<span class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg"><svg xmlns="http://www.w3.org/2000/svg" width="13.088" height="7.731" viewBox="0 0 13.088 7.731" fill="#F26522"><path d="M12.879,101.344l-.429-.432a.718.718,0,0,0-1.013,0L6.547,105.8l-4.9-4.9a.718.718,0,0,0-1.013,0l-.429.429a.717.717,0,0,0,0,1.012l5.83,5.851a.732.732,0,0,0,.508.23h0a.732.732,0,0,0,.506-.23l5.824-5.835a.727.727,0,0,0,0-1.02Z" transform="translate(0 -100.698)"/></svg></span>',
            nextArrow: '<span class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg"><svg xmlns="http://www.w3.org/2000/svg" width="13.088" height="7.731" viewBox="0 0 13.088 7.731" fill="#F26522"><path d="M12.879,101.344l-.429-.432a.718.718,0,0,0-1.013,0L6.547,105.8l-4.9-4.9a.718.718,0,0,0-1.013,0l-.429.429a.717.717,0,0,0,0,1.012l5.83,5.851a.732.732,0,0,0,.508.23h0a.732.732,0,0,0,.506-.23l5.824-5.835a.727.727,0,0,0,0-1.02Z" transform="translate(0 -100.698)"/></svg></span>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }
}

function typesofloanslider() {

    var slick_init = '.bob-types-slider-div .component-content ul.items';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: _rtl,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    adaptiveHeight: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    adaptiveHeight: true
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }
}

function similarslider() {

    var slick_init = '#bob-similar-slider-id';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: _rtl,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }
}

function applyforslider() {

    var slick_init = '#bob-apply-for-slider-id';

    function slider() {
        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            rtl: _rtl,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }]
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }
}

// calculator slider js 
function mobvideoslider() {

    var slick_init = '.bob-promo-tab-div .bob-blogs-thumb-style ul.items';

    function slider() {

        jQuery(slick_init).slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: _rtl,
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }]

        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }

}

function calculatelistingslider() {
    var slick_init = '.bob-calculator-banner .component.link-list .component-content ul';

    function slider() {

        jQuery().slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            rtl: _rtl,
            arrows: false
        });
    }
    if (jQuery(slick_init).hasClass('slick-initialized')) {
        jQuery(slick_init).slick('unslick');
        slider();
    } else {
        slider();
    }

}

// calculator slider js 


function lightpopupslider() {

    function slider() {
        jQuery('.bob-popup-slider-big').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            rtl: _rtl,
            asNavFor: '.bob-popup-slider-thumb'
        }).on('afterChange', function(event, slick, currentSlide) {
            var this_iframe = jQuery('.bob-popup-slider-thumb .slick-slide:eq(' + currentSlide + ')').attr('data-iframe');
            jQuery('.bob-popup-slider-big iframe').attr('src', '');
            jQuery('.bob-popup-slider-big .slick-slide:eq(' + currentSlide + ')').attr('src', this_iframe);

        });
        jQuery('.bob-popup-slider-thumb').slick({
            infinite: false,
            centerMode: false,
            slidesToShow: 5,
            focusOnSelect: true,
            slidesToScroll: 1,
            rtl: _rtl,
            asNavFor: '.bob-popup-slider-big',
            prevArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-left-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"/></g></g></svg>',
            nextArrow: '<svg class="bob-round-arrow-svg bob-round-arrow-orange-svg bob-right-round-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.bob-round-arrow-orange-svg .a,.bob-round-arrow-orange-svg .d{fill:none;}.bob-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.bob-round-arrow-orange-svg .b{fill:#f26522;}.bob-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"/><circle class="d" cx="15" cy="15" r="14.5"/></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"/></g></g></g></svg>',

        });
    }
    slider();

}
// gallery end here

// function fnSetHeaderMenuBasedOnPage() {

//     /*Temp code to be removed*/
//     jQuery(".bob-nav-pb-link a:eq(0)").addClass("active");

//     /* glblCurrentPageUrl is a global variable and is available on page*/
//     if (typeof glblCurrentPageUrl != "undefined") {
//         var isAddedActiveClass = false;
//         jQuery('.bob-middle-first-link.bob-left-link a').each(function() {
//             if (glblCurrentPageUrl.indexOf(jQuery(this).attr("href")) != -1 &&
//                 (jQuery(this).attr("href") !== "/" + glblCurrentLanguage + "/" || jQuery(this).attr("href") !== "/")) {
//                 isAddedActiveClass = true;
//                 jQuery(this).addClass("active");
//                 fnHeaderLevel2Links();
//             }
//         });


//         //if (isAddedActiveClass == false) {
//         //    jQuery('.bob-middle-first-link.bob-left-link a').each(function () {
//         //        if (jQuery(this).attr("href") == "/" + glblCurrentLanguage + "/" || jQuery(this).attr("href") == "/") {
//         //            jQuery(this).addClass("active");
//         //            fnHeaderLevel2Links();
//         //        }
//         //    });
//         //}

//         function fnHeaderLevel2Links() {
//             var id = jQuery('.bob-middle-first-link.bob-left-link a.active').parent("li").attr("data-id");
//             jQuery(".bob-bottom-first-ul > li").each(function() {
//                 if (jQuery(this).data("id") == id) {
//                     jQuery(this).show();
//                 } else {
//                     jQuery(this).hide();
//                 }
//             });
//         }
//     }
// }


function hideTabULTagIfEmpty() {
    var boolAnyLiHaveText = false;
    var thisElement;
    jQuery(".tabs-heading li").each(function() {
        thisElement = jQuery(this);
        if (jQuery(this).text().trim() != "") {
            boolAnyLiHaveText = true;
        }
    });

    if (!boolAnyLiHaveText) {
        jQuery(thisElement).closest('ul').remove();
    }

}





jQuery(function() {
    fnInitializeMinMaxDef();
    jQuery("#amt_id,#month_id").parent(".slidecontainer").next("small").children().on('keydown', function(event) { //Prevent on paste as well
        //You can add delete key event code as well over here for windows users.
        if (jQuery(this).text().length === 11 && event.keyCode != 8) {
            event.preventDefault();
        }
    });
    jQuery("#amt_id,#month_id").parent(".slidecontainer").next("small").children().bind("keypress", function(e) {
        var x = e.which || e.keycode;
        if ((x >= 48 && x <= 57))
            return true;
        else
            return false;
    });
});

var amtMin = 100000,
    amtMax = 20000000,
    amtDefVal = 5000000,
    tenureMin = 12,
    tenureMax = 360,
    tenureDefVal = 240;

function fnInitializeMinMaxDef() {
    if (typeof glblJsonDataCalculatorsMinMaxValues !== 'undefined') {
        if (glblJsonDataCalculatorsMinMaxValues.length > 0) {
            amtMin = glblJsonDataCalculatorsMinMaxValues[0]["loanAmountMinValue"]
            amtMax = glblJsonDataCalculatorsMinMaxValues[0]["loanAmountMaxValue"];
            amtDefVal = glblJsonDataCalculatorsMinMaxValues[0]["loanAmountDefaultValue"];

            tenureMin = glblJsonDataCalculatorsMinMaxValues[0]["tenureMinValue"]
            tenureMax = glblJsonDataCalculatorsMinMaxValues[0]["tenureMaxValue"];
            tenureDefVal = glblJsonDataCalculatorsMinMaxValues[0]["tenureDefaultValue"];
        }
    }
}

function fnGlblValidateCalcFields(e, element, fieldId, fieldVal) {
    //alert(typeof amtMax);
    if (fieldId === "amt_id") {
        if (e.keyCode === 13 || e.keyCode === 32) {
            //alert('Enter/Space is not allowed here. Default values will be populated');
            //jQuery(element).text(amtDefVal);
        }

        if (isNaN(fieldVal)) {
            alert('Please enter integer value')
            jQuery(element).text(amtDefVal);
            return;
        }
    } else if (fieldId === "month_id") {
        if (e.keyCode === 13) {
            alert('Enter is not allowed here. Default values will be populated');
            jQuery(element).text("60");
        }

        if (isNaN(fieldVal)) {
            alert('Please enter integer value only.')
            jQuery(element).text("60");
            return;
        }
    } else if (fieldId === "rates_id") {
        if (e.keyCode === 13) {
            alert('Enter is not allowed here. Default values will be populated');
            jQuery(element).text("6.75");
        }
        if (isNaN(fieldVal)) {
            alert('Please enter number only.')
            jQuery(element).text("6.75");
            return;
        } else if (fieldVal > 22 || fieldVal < 6) {
            alert('Please enter Rate of Interest between 6 to 22');
            //jQuery(element).text("6.75");
            return;
        }
    }

}

jQuery("#amt_id").parent(".slidecontainer").next("small").children().focusout(function() {
    var fieldVal = parseInt(jQuery(this).text());
    if (fieldVal > parseInt(amtMax) || fieldVal < parseInt(amtMin)) {
        alert("Please enter loan amount between " + amtMin + " to " + amtMax + ".");
        jQuery(this).text(amtDefVal);
    }
});
jQuery("#month_id").parent(".slidecontainer").next("small").children().focusout(function() {
    var fieldVal = parseInt(jQuery(this).text());
    if (fieldVal > parseInt(tenureMax) || fieldVal < parseInt(tenureMin)) {
        alert("Please enter tenure between " + tenureMin + " to " + tenureMax + ".");
        jQuery(this).text(tenureDefVal);
    }
});