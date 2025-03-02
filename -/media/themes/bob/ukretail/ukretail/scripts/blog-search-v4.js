
jQuery(function() {   
    setTimeout(function() {
        jQuery(".bob-newsletter-search-wrap .bob-global-search-result-section").show(); 
        jQuery(".bob-newsletter-search-wrap .bob-global-search-result-wrap").mCustomScrollbar({
            scrollbarPosition: "outside"
        });
         
    }, 1050);

    jQuery(".search-popup-blog").click(function(){
        jQuery('html, body').animate({scrollTop:0}, '500', 'swing');
        jQuery(".bob-newsletter-search-wrap .search-box-input").focus();
    });

    glblFnAddVoiceSearchOnBlog();

});


function glblFnAddVoiceSearchOnBlog() {
    var objVoiceToSearch = new fnVoiceToSearch();
    objVoiceToSearch.micButtonElement = ".mic-blog";
    objVoiceToSearch.searchTextBoxElement = ".search-box-input.tt-input";
    objVoiceToSearch.searchButtonElement = ".search-box-button";
    objVoiceToSearch.welcomeAudioId = "welcomeaudio";
    objVoiceToSearch.clickAudioId = "clickaudio";
    objVoiceToSearch.initialise();

}