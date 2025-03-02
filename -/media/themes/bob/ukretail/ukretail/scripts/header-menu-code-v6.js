

jQuery(function() {
    //fnSetHeaderMenuBasedOnPage();
   });

//menu code need to optimized will do it later
   function fnSetHeaderMenuBasedOnPage() {
    /*Temp code to be removed*/
    jQuery(".bob-nav-pb-link a:eq(0)").addClass("active");
    var path = window.location.href.toLowerCase(); // because the 'href' property of the DOM element is the absolute path
    
    

    if (typeof glblCurrentPageUrl != "undefined") {
        var isAddedActiveClass = false;
        jQuery('.bob-middle-first-link.bob-left-link a, .bob-top-navbar .bob-nav-pb-link a').each(function() {
            if (glblCurrentPageUrl.indexOf(jQuery(this).attr("href")) != -1 &&
                (jQuery(this).attr("href") !== "/" + glblCurrentLanguage + "/" || jQuery(this).attr("href") !== "/")) {
                isAddedActiveClass = true;
                fnHeaderLevel2Links();
            }
            if (this.href.toLowerCase() == path) {
              
                jQuery(this).parent("li").siblings().find("a").removeClass("active");
                jQuery(this).addClass('active');
               }
              

            fnHeaderLevel2Links();
           
        });



        function fnHeaderLevel2Links() {
            var id = jQuery('.bob-middle-first-link.bob-left-link a.active').parent("li").attr("data-id");
            var parentDataId = jQuery('.bob-middle-first-link.bob-left-link a.active').parent("li").attr("data-parent-id");
            jQuery(".bob-bottom-first-ul > li").each(function() {
                if (jQuery(this).data("id") == id) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
            jQuery('.bob-top-navbar .bob-nav-pb-link a').each(function() {

                if (jQuery(this).parent("li").data("id") == parentDataId) {
                    jQuery(this).addClass("active");
                } 
                else{
                    jQuery(this).removeClass("active");
                }
                
            })

                 

        }

    function fnHeaderLevel1MenuActive(){
        
        if (path.indexOf("personal-banking") != -1) {
            jQuery(".bob-nav-pb-link a:eq(0)").addClass("active");
            
           }
           if (path.indexOf("business-banking") != -1) {
            jQuery(".bob-nav-pb-link a:eq(1)").addClass("active");
           } 
           if (path.indexOf("nri-banking") != -1) {
             /* these code need to fixed and optimized will do it later*/  
             jQuery(".bob-nav-pb-link a:eq(0)").addClass("active");
           
            jQuery(".bob-middle-first-link.bob-left-link a").each(function() {
                
                if (this.href.toLowerCase().indexOf("nri-banking") == path.indexOf("nri-banking")) {
                    jQuery(this).addClass("active");
                    
                } else {
                    jQuery(this).removeClass("active");
                   
                }
              setTimeout(function(){
              
                fnHederLevel3MenuDisplay(); 

              },100)  
            });
           
           } 
         else{
            jQuery(".bob-nav-pb-link a:eq(0)").addClass("active");  
           
            if(jQuery('.bob-middle-first-link.bob-left-link a.active').length == 0){
                jQuery('.bob-middle-first-link.bob-left-link a:eq(0)').addClass("active");

           }
           fnHederLevel3MenuDisplay();
           
        
          
         }   

    } 
    
    function fnHederLevel3MenuDisplay(){

        var id = jQuery('.bob-middle-first-link.bob-left-link a.active').parent("li").attr("data-id");
        jQuery(".bob-bottom-first-ul > li").each(function() {
         if (jQuery(this).data("id") == id) {
             jQuery(this).show();
         } else {
             jQuery(this).hide();
            
         }
     });  

    }   

    }

fnHeaderLevel1MenuActive();    


   }
