jQuery(document).ready(function() {
    fnShowOfferAndTncDetails(); 
     
});

function fnShowOfferAndTncDetails(){
    jQuery(".bob-offer-download-div").each(function(){
    jQuery(this).find("ul > li:gt(3)").hide();   
    jQuery(this).find(".bob-readmore-download .bob-readmore-anchor").on('click', function(e) {
        e.preventDefault();
        if(jQuery(this).text()=="Read more"){
        jQuery(this).parents(".bob-offer-download-div").find("ul > li:hidden").slideDown();
        jQuery(this).text("Read less");
    }
    else{
        jQuery(this).parents(".bob-offer-download-div").find("ul > li:gt(3)").slideUp(); 
        jQuery(this).text("Read more"); 
    }
       
    })     
})

}



