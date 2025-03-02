jQuery(document).ready(function() {
    jQuery('.apply-not-available').click(function() {
        jQuery(".profile-popup-overlay").fadeIn('slow');
    });
  
    jQuery('.profile-popup-overlay, .popupCloseBtn').click(function(event) {
      if (jQuery(event.target).is('.profile-popup-overlay, .popupCloseBtn, .popupCloseBtn *') === true) {
        jQuery('.profile-popup-overlay').fadeOut('slow');
      }
    });
  });
  