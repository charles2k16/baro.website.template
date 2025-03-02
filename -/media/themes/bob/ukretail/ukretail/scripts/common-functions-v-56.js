if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}

/*FUNCTION TO CREATE COOKIE*/
function fnCreateCookie(cookiname, cookivalue, timeinminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (timeinminutes * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookiname + "=" + cookivalue + ";" + expires + ";path=/";  
}

/*FUNCTION TO READ COOKIE VALUE BY NAME*/
function fnReadCookie(cookiname) {
    var name = cookiname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*FUNCTION TO DELETE ALL CREATED COOKIES*/
function fnDeleteAllCookie() {
    var arrCookies = document.cookie.split(";");
    for (var i = 0; i < arrCookies.length; i++) {
        var c = arrCookies[i].split("=");
        fnDeleteCookie(c[0]); /*Calling the below delete function*/
    }
}

/*FUNCTION TO DELETE  COOKIE BY NAME*/
function fnDeleteCookie(cookiname) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var value = "";
    document.cookie = cookiname + "=" + value + expires + "; path=/";
}



/* GET DICTIONARY KEY OR VALUES BY DICTIONARY NAME*/
function glblGetDicArrByDicName(dictionaryName, fieldName) {
    var dArray = [];
    var tempArray = glblJsonDataDictionary.filter(function(item) {
        if (item.dictName.toLowerCase() == dictionaryName.toLowerCase()) {
            return item;
        }
    })[0];
    if (typeof tempArray != "undefined") {
        if (fieldName == "value") {
            tempArray.dictItems.forEach(function(item, index) {
                dArray.push(item.value);
            });
        }
        if (fieldName == "key") {
            tempArray.dictItems.forEach(function(item, index) {
                dArray.push(item.key);
            });
        }
    }
    return dArray;
}

/* GET DICTIONARY LANGUAGE SPECIFIC ERROR VALUE*/
function glblGetErrorMessageByKeyName(keyName) {
    var retVal = keyName;

    var tempArray = glblJsonDataDictionary.filter(function (item) {
        if (item.dictName.toLowerCase() == "ErrorMessages".toLocaleLowerCase()) {
            return item;
        }
    })[0];
    if (typeof tempArray != "undefined") {
        var tempErrorArr = tempArray.dictItems.filter(function (item) {
            if (item.key.toLowerCase() == keyName.toLowerCase()) {
                retVal = item.value;
            }
        })[0];
    } else {
        retVal = keyName;
    }

    return retVal;
}

function fnGetURLParameterValueByName(parName) {
    parName = parName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + parName + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function glblFnPlaySound(source, volume, loop) {

    glblFnRemoveElementsByClass("embed-audio");

    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function() {
        document.body.removeChild(this.son);
    }
    this.start = function() {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("class", "embed-audio");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function() {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop) {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}

function glblFnRemoveElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function glblFnCapturePageViewsCount(id, section) {
    if (typeof id != "undefined" && id != "" && typeof section != "undefined" && section != "")
        jQuery.ajax({
            dataType: "jsonp",
            url: "/handlers/common/update-page-views.ashx?pageid=" + id + "&pagename=" + section,
            type: "POST",
            async: true,
            success: function(result) {},
            error: function() {
                console.log("There has been an error on server views click count.");
            }
        });
}

// jQuery(document).ready(function () {
//     jQuery(document).on('click', '.drp_branches', function () {
//         jQuery('.branches-content').hide();
//         var country_category = jQuery(this).attr('data-country');
//         jQuery('.branches-content[data-id=' + country_category + ']').show();
//         return false;

//     });

// });

jQuery(document).ready(function() {
    //filter checkboxes label in lowercase
    jQuery('.bob-check-radio-form-control label').val($xa(this).val().toLowerCase());


    // marquee animation speed control
    // var marq  = jQuery('.bob-marquee-links marquee');
    // 5 time faster speed from curent speed
    // var speed = 5 * marq.attr('scrollamount'); 
    // jQuery(marq).attr({scrollamount: 10});

    // adding underline lin a tag on hover
    jQuery('.bob-marquee-links marquee ul li a').hover(function() {
        $xa(this).css("text-decoration", "underline !important");
    }, function() {
        $xa(this).css("text-decoration", "none");
    });
    jQuery('.bob-marquee-links marquee p a').hover(function() {
        $xa(this).css("text-decoration", "underline !important");
    }, function() {
        $xa(this).css("text-decoration", "none");
    });



    if (jQuery(this).attr('data-country') == undefined) {
        jQuery(".drp_branches:eq(0)").click();
    }
    jQuery(document).on('click', '.drp_branches', function() {
        jQuery('.branches-content').hide();
        jQuery('.branches-content').removeClass("officesListToDisplay");
        var country_category = jQuery(this).attr('data-country');
        jQuery('.branches-content[data-id=' + country_category + ']').addClass("officesListToDisplay");
        var currentVuisibleItem = jQuery('.branches-content:visible').length;
        setTimeout(function() {
            jQuery(".br-flex-load-more.bob-report-load-more").fadeIn();
            if (jQuery(".contact-us-page .br-flex .officesListToDisplay").length <= 4) {
                jQuery(".br-flex-load-more.bob-report-load-more").fadeOut();
            }
            jQuery(".contact-us-page .br-flex .officesListToDisplay").slice(0, 4).show();
        }, 200);

        AOS.refresh();
        return false;

    });



});




function fnVoiceToSearch() {
    this.micButtonElement = "";
    this.searchTextBoxElement = "";
    this.searchButtonElement = "";
    this.welcomeAudioId = "";
    this.clickAudioId = "";
}

fnVoiceToSearch.prototype.initialise = function() {

    var thisMicButtonElement = this.micButtonElement;
    var thisSearchButtonElement = this.searchButtonElement;
    var thisSearchTextBoxElement = this.searchTextBoxElement;
    var thisWelcomeAudioId = this.welcomeAudioId;
    var thisClickAudioId = this.clickAudioId;


    if ("webkitSpeechRecognition" in window) {

        var is_recognition_on = false;
        var SpeechRecognition = window.webkitSpeechRecognition;
        /*For persion voice recognition to text*/
        var recognition = new SpeechRecognition();
        var Textbox = jQuery(thisSearchTextBoxElement);
        var oldPlaceholderValue = Textbox.attr("placeholder");

        var Content = '';
        recognition.continuous = false;
        recognition.onresult = function(event) {
            var current = event.resultIndex;
            var transcript = event.results[current][0].transcript;
            Content += transcript;
            Textbox.val(Content);
            jQuery(thisSearchButtonElement).trigger("click");
            document.getElementById(thisClickAudioId).play();
            jQuery(thisMicButtonElement).removeClass("active");
            is_recognition_on = false;
        };

        recognition.onspeechend = function() {
            /* console.log('No activity.');*/
            recognition.stop();
            is_recognition_on = false;
            Textbox.attr("placeholder", oldPlaceholderValue);
        }
        recognition.onerror = function(event) {
            Textbox.attr("placeholder", oldPlaceholderValue);
            jQuery(thisMicButtonElement).removeClass("active");
            if (event.error == 'no-speech') {}
        }
        recognition.onsoundend = function() {
            Textbox.attr("placeholder", oldPlaceholderValue);
            /* console.log('Sound has stopped being received');*/
        }
        jQuery(thisMicButtonElement).on('click', function(e) {
            Content = '';
            Textbox.val('');


            if (is_recognition_on) {
                recognition.stop();
                return;
            }

            /* console.log('Voice recognition is ON.');*/
            document.getElementById(thisWelcomeAudioId).play();

            setTimeout(function() {
                recognition.start();
                Textbox.attr("placeholder", "Speak now");
            }, 2000);

            is_recognition_on = true;
            jQuery(this).addClass("active");

        });
        Textbox.on('input', function() {
            Content = jQuery(this).val();
        })
    } else {
        jQuery(thisMicButtonElement).hide();
    }
}



jQuery(function() {

    /*Open 1st accordian globally*/
    jQuery(".component.accordion .items .item:eq(0)").addClass("active");
    jQuery(".component.accordion .items .item:eq(0) .toggle-content").css("display", "block");



    /*Set number to indian currency format with letter*/
    jQuery(".convert-num-to-ind-cur-with-letter").each(function() {
        if (jQuery(this).text() != "" && jQuery(this).hasClass("converted-nticwl") == false) {
            var s = jQuery(this).text();
            var numRegex = /\d+/g;
            s.match(numRegex) ? s = s.match(numRegex).join([]) : s = "";
            jQuery(this).addClass("converted-nticwl");
            jQuery(this).html(fnConvertNumberToIndianCurrencyWithLetter(s));

        }
    });


    /*Embed language to all static urls except for english*/
    jQuery("a").each(function() {
        var url = jQuery(this).attr("href")
        if (typeof url != "undefined") {
            url = url.toLowerCase();
            if (typeof glblCurrentLanguage != "undefined") {
                if (glblCurrentLanguage != "en" && !url.startsWith("/writereaddata/")) {
                    if (url.startsWith("/") && !(url.startsWith("/" + glblCurrentLanguage) || url.startsWith("/" + glblCurrentLanguage + "/"))) {
                        jQuery(this).attr("href", "/" + glblCurrentLanguage + jQuery(this).attr("href"))
                    }
                }
            }
        }
    });


});



function fnConvertNumberToIndianCurrencyWithLetter(value) {
    var val = "";
    if (typeof value != "undefined" && value != "") {
        var val = Math.abs(value)
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(0) + 'Cr';
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(0) + 'L';
        } else if (val >= 1000) {
            val = (val / 1000).toFixed(0) + 'K';
        }
    }
    return val;
}