/* WHEN USER CLICK ON PROMO CODE START COPY*/
jQuery(".used-coupon-code-div .copyDiv").click(function () {
    jQuery(".input-field-coupon").select();
    document.execCommand('copy');
    jQuery(".used-coupon-code-div .copy").html("Code Copied");
});