jQuery(function () {
    fnGlblSetRemainingTime();
});

function fnGlblSetRemainingTime() {

    jQuery(".remaining-time").each(function () {
        var thisElem = jQuery(this);

        if (typeof jQuery(this).attr("data-expiry-time") != "undefined" && jQuery(this).attr("data-expiry-time") != "") {
            var countDownDate = moment(jQuery(this).attr("data-expiry-time")).valueOf();

            // Refresh afetr 1 second
            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var timeRemains = "";
                if (days > 0) timeRemains += days + "d ";
                if (hours.toString().length == 1) hours = 0 + hours.toString();
                if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
                if (seconds.toString().length == 1) seconds = 0 + seconds.toString();

                timeRemains += hours + "." + minutes + "." + seconds;
                thisElem.text(timeRemains);

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(x);
                    thisElem.text("EXPIRED");
                }
            }, 1000);
        }
    });
}