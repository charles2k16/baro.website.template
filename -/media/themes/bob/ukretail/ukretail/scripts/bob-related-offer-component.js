jQuery(document).ready(function() {
    typesofRelatedOfferlider(); 
     
});


function typesofRelatedOfferlider() {

var slick_init = '.bob-related-offer-component ul.items';

function slider() {
    jQuery(slick_init).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
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




