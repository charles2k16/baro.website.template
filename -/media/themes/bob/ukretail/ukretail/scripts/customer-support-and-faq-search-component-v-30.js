jQuery(document).ready(function () {
    jQuery("#customerSupportAndFaqs").keyup(function () {
        fnCustomerSupportAndfaqsSearch();
    });

    jQuery(".faq-search-box-button .faq-search-svg").click(function () {
        fnCustomerSupportAndfaqsSearch();
    });

    jQuery('.faq-search-box-button .faq-close-svg').on('click', function () {
        jQuery("#customerSupportAndFaqs").val("");
        jQuery('.common-faqs-customer-suopport-search').removeClass('bob-data-in');
    });   
});


function fnCustomerSupportAndfaqsSearch() {

    if (typeof glblFaqsJSONData != "undefined") {
        var searchField = jQuery("#customerSupportAndFaqs").val();
        if (searchField === '') {
            jQuery('#filter-records').html('');
            jQuery('.common-faqs-customer-suopport-search').removeClass('bob-data-in');
            return;
        }
       
        var str = '<ul>'
        glblFaqsJSONData.forEach(function (item) {
            if (item.faqItem.toLowerCase().indexOf(searchField.toLowerCase()) != -1) {
                str += item.faqItem;
            }
        });
        str += '</ul>'
        jQuery('#filter-records').html(str);
        jQuery('.common-faqs-customer-suopport-search').addClass('bob-data-in');

    }

    AOS.refresh();

}



jQuery(document).ready(function () {
    setTimeout(function () {
        jQuery(".customer-search-result-wrap").mCustomScrollbar({
            scrollbarPosition: "outside"
        });
    }, 100);


    if (typeof glblFaqsJSONData != "undefined") {
        var objVoiceToSearch = new fnVoiceToSearch();
        objVoiceToSearch.micButtonElement = ".mic-icon-faq";
        objVoiceToSearch.searchTextBoxElement = ".customer-support-and-faqs-textbox";
        objVoiceToSearch.searchButtonElement = ".faq-search-box-button .faq-search-svg";
        objVoiceToSearch.welcomeAudioId = "welcomeaudio";
        objVoiceToSearch.clickAudioId = "clickaudio";
        objVoiceToSearch.initialise();
    }
});

