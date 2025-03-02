jQuery(document).ready(function() {
    $xa(document).ready(function() {
        $xa(".carousel").each(function() {
            if ($xa(this).find(".field-mobileimage").length > 0 || $xa(this).find(".field-ipadimage").length > 0) {
                $xa(this).addClass("carouselResponsive");
            }
        });

    });
});