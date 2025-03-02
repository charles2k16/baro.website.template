var thisClass;
var glblShareComponentIsGlobalPageShare = true;
var glblSharePlatformFound = false;
jQuery(function () {
    fnShareComponentInit();
});

function fnShareComponentInit() {



    if (jQuery(".bob-share-link-ul li").length > 0) {
        jQuery(".bob-share-link-ul li").click(function () {

            glblSharePlatformFound = false;

            if (jQuery(this).closest("ul").hasClass("share-section")) {
                glblShareComponentIsGlobalPageShare = false;
            }
            else {
                glblShareComponentIsGlobalPageShare = true;
            }

            thisClass = jQuery(this);
            var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|sm-t|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent.toLowerCase());
            var shareurl = "";
            var sharetitle = "";
            var sharedescription = "";
            var shareusername = "";
            var shareimage = "";
            var copyText = document.URL;
            var isCopyLink = false;
            var isEnvalopClick = false;


            /*CHECK AND ASSIGN TITLE*/
            if (jQuery('meta[property="og:title"]').attr('content') != undefined && jQuery('meta[property="og:title"]').attr('content') != "") {
                sharetitle = jQuery('meta[property="og:title"]').attr('content');
            }
            else {
                sharetitle = document.title;
            }

            /*CHECK AND ASSIGN DESCRIPTION*/
            if (typeof jQuery('meta[property="og:description"]').attr('content') != "undefined" && jQuery('meta[property="og:description"]').attr('content') != "") {
                sharedescription = jQuery('meta[property="og:description"]').attr('content');
            }
            else if (typeof jQuery('meta[name=description]').attr("content") != "undefined" && jQuery('meta[name=description]').attr("content") != "") {
                sharedescription = jQuery('meta[name=description]').attr("content");
            }

            /*ASSIGN URL TO SHARE*/
            shareurl = document.URL;



            if (!glblShareComponentIsGlobalPageShare) {

                sharetitle = jQuery(this).closest(".share-parent").find(".share-title").text();
                var imageUrl = jQuery(this).closest(".share-parent").find(".share-description").attr("src");
                if (typeof imageUrl != "undefined") {
                    sharedescription = jQuery(this).closest(".share-parent").find(".share-description").attr("src");
                }
                else {
                    sharedescription = jQuery(this).closest(".share-parent").find(".share-description").text();
                }
                shareurl = jQuery(this).closest(".share-parent").find(".share-url").attr("href");
                copyText = shareurl;
            }


            /*Remove spaces*/
            if (typeof sharetitle != "undefined" & sharetitle != "") {
                sharetitle = sharetitle.trim();
            }

            if (typeof sharedescription != "undefined" & sharedescription != "") {
                sharedescription = sharedescription.trim();
            }


            if (jQuery(this).hasClass("share-facebook")) {
                glblSharePlatformFound = true;
                shareurl = "https://www.facebook.com/sharer/sharer.php?u= " + encodeURIComponent(shareurl) + "&quote=" + encodeURIComponent(sharetitle) + "&href=" + encodeURIComponent(shareurl);
            }
            else if (jQuery(this).hasClass("share-twitter")) {
                glblSharePlatformFound = true;
                if (shareusername != "") {
                    shareusername = "&via =" + shareusername;
                }
                if (sharedescription != "") {
                    sharedescription = "&via =" + sharedescription;
                }

                shareurl = "https://twitter.com/intent/tweet?&url=" + encodeURIComponent(shareurl + sharedescription + shareusername);
            }
            else if (jQuery(this).hasClass("share-linkedin")) {
                glblSharePlatformFound = true;
                shareurl = "https://www.linkedin.com/sharing/share-offsite/?url=" + shareurl;
            }
            else if (jQuery(this).hasClass("share-email")) {
                glblSharePlatformFound = true;
                isEnvalopClick = true;
                shareurl = "mailto:?subject=" + encodeURIComponent(sharetitle) + "&body=" + encodeURIComponent(sharedescription) + " Link:" + encodeURIComponent(shareurl);
            }
            else if (jQuery(this).hasClass("share-gmail")) {
                glblSharePlatformFound = true;              
                shareurl = " https://mail.google.com/mail/u/0/?ui=2&fs=1&tf=cm&su=" + encodeURIComponent(sharetitle) + "&body=" + encodeURIComponent(sharedescription)+" Link:" + encodeURIComponent(shareurl);



            }
            else if (jQuery(this).hasClass("share-link")) {
                glblSharePlatformFound = true;
                CopyToClipboard(copyText);
                isCopyLink = true;
            }
            else if (jQuery(this).hasClass("share-whatsapp")) {
                glblSharePlatformFound = true;
                var element = document.getElementById('text');
                if (isMobile) {
                    shareurl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(sharedescription + " " + shareurl);
                } else {
                    shareurl = "https://web.whatsapp.com/send?text=" + encodeURIComponent(sharedescription + " " + shareurl);
                }

            }


            if (glblSharePlatformFound) {
                if (isCopyLink == false) {
                    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && isEnvalopClick) {
                        window.location = shareurl;
                    }
                    else {
                        windowPopup(shareurl, 500, 600);
                    }
                }
            }

        });
    }
}


function windowPopup(url, width, height) {
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);
    window.open(
        url,
        "",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );

}

function CopyToClipboard(text) {

    if (window.clipboardData && window.clipboardData.setData) {
        
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  /* Prevent scrolling to bottom of page in MS Edge.*/
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  /* Security exception may be thrown by some browsers.*/
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
