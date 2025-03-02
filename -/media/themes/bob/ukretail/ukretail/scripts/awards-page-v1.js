jQuery(function () {
    var minimized_elements = jQuery('.expandable-content');
    var minimize_character_count = 600;
    var readMoreClass = jQuery(".expandable-anchor").attr("class") + ' read-more';
    var readLessClass = jQuery(".expandable-anchor").attr("class") + ' read-less';
    var readMoreText = jQuery(".expandable-anchor").attr("data-read-more-text");
    var readLessText = jQuery(".expandable-anchor").attr("data-read-less-text");
    jQuery(".expandable-anchor").remove();

    minimized_elements.each(function () {
        var t = jQuery(this).text();

        if (t.length < minimize_character_count) return;

        jQuery(this).html("<p>" +
            t.slice(0, minimize_character_count) + '<span>... </span><a href="#" class="' + readMoreClass + '">' + readMoreText + '</a>' +
            '<span style="display:none;">' + t.slice(minimize_character_count, t.length) + ' <a href="#" class="' + readLessClass + '">' + readLessText + '</a></span>' + "</p>");

    });

    jQuery('a.read-more', minimized_elements).click(function (event) {
        event.preventDefault();
        jQuery(this).hide().prev().hide();
        jQuery(this).next().show();
    });

    jQuery('a.read-less', minimized_elements).click(function (event) {
        event.preventDefault();
        jQuery(this).parent().hide().prev().show().prev().show();
    });

});