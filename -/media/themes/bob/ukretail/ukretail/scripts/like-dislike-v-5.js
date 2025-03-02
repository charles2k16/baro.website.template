/*JS liked-items start*/
/*Add class "liked-li" if element any element have "like-li" class */
jQuery(function () {
    glblFnSetLikedItems();
});

function glblFnSetLikedItems() {

    if (fnReadCookie("LikedByItems") != "" && jQuery(".likes-li").length > 0) {
        var likedByArr = JSON.parse(fnReadCookie("LikedByItems"));
        jQuery(".likes-li").each(function () {
            var itemId = jQuery(this).attr("data-id");
            if (typeof itemId != "undefined" && itemId != "") {
                itemId = itemId.trim().toLocaleLowerCase();
                if (likedByArr.indexOf(itemId) != -1) {
                    jQuery(this).addClass("liked-li");
                }
            }
        });
    }

}

jQuery("body").on("click", ".likes-li", function (event) {

    var dataId = jQuery(this).attr("data-id");
    if (typeof dataId != "undefined" && dataId != "") {
        FnToggleLikeDislike(dataId);

        var matchedElementLi = jQuery('.likes-li').filter(function () {
            return jQuery(this).attr('data-id').toLowerCase().indexOf(dataId.toLowerCase()) > -1;
        });

        if (matchedElementLi.hasClass("liked-li")) {
            matchedElementLi.removeClass("liked-li");
        } else {
            matchedElementLi.addClass("liked-li");
        }
    }

    function FnToggleLikeDislike(itemId) {
        itemId = itemId.trim().toLocaleLowerCase();
        /*Assign variables */
        var cookieMinutes = 60 * 365 * 10;
        var cookieName = "LikedByItems";

        /*Do not change untill required*/
        var likedByArr = [];

        /*If cookie exist
         * Then read convert to JSON array
         * Push id if doesn't exist else remove */
        if (fnReadCookie(cookieName) != "") {
            /*Push id if doesn't exist*/
            likedByArr = JSON.parse(fnReadCookie(cookieName));
            if (likedByArr.indexOf(itemId) == -1) {
                likedByArr.push(itemId);
            } else {
                /*Remove id if already exist*/
                likedByArr.splice(likedByArr.indexOf(itemId), 1);
            }
        }
        else {
            likedByArr.push(itemId);
        }
        /*Ceate cookie*/
        fnCreateCookie(cookieName, JSON.stringify(likedByArr), cookieMinutes);
    }
});


/*JS liked-items end*/