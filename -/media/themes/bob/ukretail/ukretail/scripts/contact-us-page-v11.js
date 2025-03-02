jQuery(document).ready(function() {
    
jQuery(".contact-center .contact-details-tablist ul li").click(function(){
    jQuery(".contact-center .contact-details-tablist ul li").removeClass("active");  
    jQuery(this).addClass("active"); 

  var dataTab = jQuery(this).data("id");
  jQuery(".contact-details-tab").addClass('nodisplay');
  jQuery("#"+dataTab).removeClass('nodisplay');

   });

   jQuery(".office-detail-contact-tab ul li a").click(function(){
    jQuery(".office-detail-contact-tab ul li a").removeClass("active");  
    jQuery(this).addClass("active"); 

  var dataTab = jQuery(this).data("id");
  setTimeout(function(){
  // jQuery(".office-detail-contact-tab-content-wrap").addClass('nodisplay');
  // jQuery("#"+dataTab).removeClass('nodisplay');
  jQuery(".office-detail-contact-tab-content-wrap").hide();
  jQuery("#"+dataTab).show();
},50);

   });

   jQuery(document).on('click', '.bob-search-filter .filterby .drp_branches', function () {
    var country_category = jQuery(this).attr('data-country');
    setTimeout(function(){
    jQuery('.branches-content[data-id=' + country_category + ']').show();

    AOS.refresh();
  },50);
});

if(jQuery('.bob-search-filter .filterby .drp_branches').length==1){

  jQuery('.bob-search-filter .filterby .drp_branches:eq(0)').click();

}

});





