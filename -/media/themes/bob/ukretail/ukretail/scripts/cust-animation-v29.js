jQuery(document).ready(function() {
    var winW = jQuery(window).width(),
        winH = jQuery(window).height();

    setTimeout(function() {
        jQuery('body').css({
            'opacity': '1'
        })
    }, 200);

    setTimeout(function() {
        AOS.init({
            offset: 50
        });
    }, 300);

    setTimeout(function() {
        jQuery('.bob-imp-links-div,.ways-to-link h3,.ways-to-link ul,.products_Wrap_left .h2heading,.products_Wrap_left,.home_section_3 .h2heading,.rates-and-charges p.para,.ratesroundbox,.home_section_4 .h2heading,.home_section_4 .bob-tab-div,.home_section_5 .h2heading,.blogWrap,.barodaconnect,.bob-home-loan .bob-loan-listing-intro,.bob-home-loan .component-content .component.rich-text.col-12 .component-content p,.bob-card-list-first ul.items li.item, .bob-new-loans-page .bob-small-page-list.page-list ul.items li.item,.bob-need-assistance-div h3,.bob-need-assistance-div ul li,#request-callback,.bob-new-loans-page .row.bob-paragraph-section .col-sm-12 .blueoverlay p,.bob-accordion-div .accordion ul.items>li,.bob-blogs-thumb-style ul li,.bob-search-filter,.bob-home-loan .bob-page-list-box ul.items li.item,.bob-loan-page-tab-div,.bob-line-list li ul li,.bob-loan-faq-view-all-div,.bob-home-loan .row.bob-paragraph-section .col-sm-12 .blueoverlay p,.bob-promo-tab-div ul,.bob-tab-inner-page-link,.custom-lightbox-slider-div .lightbox-title,.custom-lightbox-slider-div .lightbox-slider,.contact-center,.contact-for-complain-info').attr({
            'data-aos': 'fade-up',
            'data-aos-duration': '500',
            'data-aos-easing': 'ease-out-cubic'
        });
        jQuery('.products_Wrap_right').attr({
            'data-aos': 'fade-left',
            'data-aos-duration': '500',
            'data-aos-easing': 'ease-out-cubic'
        });
        jQuery().attr('data-aos', 'fade-right');
        jQuery().attr('data-aos', 'fade-up');
    }, 100)
});