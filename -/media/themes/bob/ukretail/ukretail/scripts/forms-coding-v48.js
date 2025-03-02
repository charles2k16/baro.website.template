var glblHandlerPath = "/handlers/bob/countrywebsites/ukretail/"

/*forms-coding js start*/

jQuery('#query').keypress(function (event) {
    var regex = new RegExp("^[a-zA-Z.,()0-9+ ]+$"); // Regex to allow only alphanumeric characters
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

jQuery("#email").on("keypress paste", function (event) {
    // Get the character code of the pressed key
    var charCode = event.which || event.keyCode;
    // Convert the character code to a string
    var charStr = String.fromCharCode(charCode);

    // Prevent pasting
    if (event.type === 'paste') {
        event.preventDefault();
        return;
    }

    var email = jQuery(this).val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the character is in the disallowed characters list
    if (/[)(*&^%$#!:",'||~!=\-\s]/.test(charStr)) {
        // If it's a disallowed character, prevent it from being entered
        event.preventDefault();
    }

});

jQuery('.onlynumber paste').keypress(function (event) {
    // Prevent pasting
    if (event.type === 'paste') {
        event.preventDefault();
        return;
    }
    var regex = new RegExp("^[0-9]+$"); // Regex to allow only alphanumeric characters
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

jQuery('.no-special-chars paste').keypress(function (event) {

    if (event.type === 'paste') {
        event.preventDefault();
        return;
    }
    var regex = new RegExp("^[a-zA-Z ]+$"); // Regex to allow only alphanumeric characters
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


  function SubmitFeedbackSuggestionForm() {
        jQuery(".errorMessage").html("");
        jQuery("#btnFeedbacksuggestion").html("Submitting");
       
        var formDataFeedbacks = new FormData(jQuery('#formfeedbackssuggestion')[0]);
        var salutation = jQuery('#formfeedbackssuggestion .bob-custom-dropdown:eq(0) ul').find('li.active').text();
        formDataFeedbacks.append('salutation', salutation);

        jQuery.ajax(
            {
                url: glblHandlerPath + "submit-feedback-suggestion-form.ashx",
                type: 'post',
                data: formDataFeedbacks,
                dataType: 'jsonp',
                processData: false,
                contentType: false,
                success: function (response) {
                    response = JSON.parse(response);
                    if (response.status) {
                        jQuery(".bob-loan-emi-grp-div .container .row").html("");
                        jQuery("#successMsg").show();
                      
                    }
                    else {
                        jQuery("#btnFeedbacksuggestion").html("Submit");
                        for (var indexError = 0; indexError < response.errorList.length; indexError++) {
                            jQuery("#err_" + response.errorList[indexError]["error_field"]).html(glblGetErrorMessageByKeyName(response.errorList[indexError]["error_message"].trim()));
                        }
                    }
                },
                error: function (objXHR, objStatus, objError) {
                    jQuery("#btnFeedbacksuggestion").html("Submit");
                    alert('There seems to be an issue.  Please try again after some time.');
                }

            });
    }
    function FeedbackSuggestionFormReset() {
        jQuery(".errorMessage").html("");
        jQuery('#formfeedbackssuggestion .bob-custom-dropdown:eq(0) small:eq(0)').html('Title');
        jQuery('#formfeedbackssuggestion .bob-custom-dropdown:eq(0) ul').find('li.active').removeClass('active');
        document.getElementById("formfeedbackssuggestion").reset();
    }


function SubmitFeedbackForm() {
    jQuery(".errorMessage").html("");
    jQuery("#btnFeedbacks").html("Submitting");

    var formDataFeedbacks = new FormData(jQuery('#formfeedbacks')[0]);
    var profession = jQuery('#formfeedbacks .bob-custom-dropdown:eq(0) ul').find('li.active').text();
    var branch = jQuery('#formfeedbacks .bob-custom-dropdown:eq(1) ul').find('li.active').text();
    var productName = jQuery('#formfeedbacks .bob-custom-dropdown:eq(2) ul').find('li.active').text();
    formDataFeedbacks.append('profession', profession);
    formDataFeedbacks.append('productName', productName);
    formDataFeedbacks.append('branch', branch);

    jQuery.ajax(
        {
            url: glblHandlerPath + "submit-feedback-form.ashx",
            type: 'post',
            data: formDataFeedbacks,
            dataType: 'jsonp',
            processData: false,
            contentType: false,
            success: function (response) {
                response = JSON.parse(response);
                if (response.status) {
                    jQuery(".bob-loan-emi-grp-div .container .row").html("");
                    jQuery("#successMsg").show();

                }
                else {
                    jQuery("#btnFeedbacks").html("Submit");
                    for (var indexError = 0; indexError < response.errorList.length; indexError++) {
                        jQuery("#err_" + response.errorList[indexError]["error_field"]).html(glblGetErrorMessageByKeyName(response.errorList[indexError]["error_message"].trim()));
                    }
                }
            },
            error: function (objXHR, objStatus, objError) {
                jQuery("#btnFeedbacks").html("Submit");
                alert('There seems to be an issue.  Please try again after some time.');
            }

        });
}
function FeedbacksFormReset() {
    jQuery(".errorMessage").html("");
    jQuery('#formfeedbacks .bob-custom-dropdown:eq(0) small:eq(0)').html('Title');
    jQuery('#formfeedbacks .bob-custom-dropdown:eq(0) ul').find('li.active').removeClass('active');
    document.getElementById("formfeedbacks").reset();
}


function SubmitRequestSubscribeNewsLetter() {
    jQuery("#btnSumbitText").html("<span>Submitting..</span>");
    jQuery("#err_subscribenews_letter_emailid").html("");
    var formData = new FormData();
    formData.append("txtEmailId", jQuery("#txtEmailId").val());

    jQuery.ajax({
        type: 'POST',
        url: glblHandlerPath + "subscribe-newsletter.ashx",
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            result = JSON.parse(result);
            if (result.status) {
                jQuery("#btnSumbitText").html("<span>Submit</span>");
                document.getElementById("formNewsLetter").style.display = "none";
                document.getElementById("successMsgNewsletter").style.display = "block";
            }
            else {
                jQuery("#err_subscribenews_letter_emailid").html(result.errorList[0]["error_message"].trim());
                jQuery("#btnSumbitText").html("<span>Submit</span>");
            }
        }
    });
}

function SubmitRequestACallback() {

    jQuery(".errorMessage").html("");
    jQuery("#btnRequesACallback").html("Submitting..");
    jQuery("#hdnLoanType").val(jQuery("#loantype li.active").length == 0 ? "" : jQuery("#loantype li.active").attr("value"));
    var productLoanType = jQuery("#hdnLoanType").val();

    jQuery.ajax(
        {
            url: glblHandlerPath + "request-a-callback.ashx",
            type: 'post',
            data: jQuery("#RequestACallback").serialize(),
            dataType: 'jsonp',
            success: function (response) {
                response = JSON.parse(response);
                if (response.successStatus == true) {
                    document.getElementById("RequestACallback").style.display = "none";
                    document.getElementById("successMsgRequesAcallback").style.display = "block";

                    /*Tracking code */
                    window.dataLayer = window.dataLayer || []; window.dataLayer.push({
                        'event': 'submission',
                        'eventCategory': 'request_callback',
                        'eventAction': productLoanType
                    });

                }
                else if (response.successStatus == false) {
                    jQuery("#btnRequesACallback").html("Submit");
                    if (response.message != null) {
                        var myArrF = response.error_Field.split(".");
                        var myArrE = response.message.split(".");

                        for (var indexError = 0; indexError < myArrF.length; indexError++) {

                            jQuery("#err_" + myArrF[indexError]).html(myArrE[indexError]);

                        }
                    }

                }
            },
            error: function (objXHR, objStatus, objError) {
                jQuery("#btnRequesACallback").html("Submit");
                alert('There seems to be an issue.  Please try again after some time.');
            }

        });
}
function ResetSubmitFaqFeedbackForm() {
    jQuery("#btnFaqSend").text("Send");
    jQuery(".faqFormSectionDiv").show();
    jQuery("#faqThanksMessageYesPopup").hide();
    jQuery("#faqTextArea").val("");
}

function SubmitApplyNowForm() {
    jQuery(".errorMessage").html("");
    jQuery("#btnApplyOnline").html("Submitting..");  
    var productName = jQuery("#hdnProductName").val();
    var formDataApplyNow = jQuery('#formApplyNow').serializeArray();  

    jQuery.ajax(
        {
            url: glblHandlerPath + "apply-online.ashx",
            type: 'post',
            data: formDataApplyNow,
            dataType: 'jsonp',
            success: function (response) {
                response = JSON.parse(response);
                if (response.status) {
                    jQuery(".bob-loan-emi-grp-div .container .row").html("<h3><strong>Thank you !</strong>We have successfully received your application. Our executive will contact you soon.</h3>");
                    /*Tracking code */
                    window.dataLayer = window.dataLayer || []; window.dataLayer.push({
                        'event': 'submission',
                        'eventCategory': 'form_submission',
                        'eventAction': productName
                    });
                }
                else {
                    jQuery("#btnApplyOnline").html("Submit");
                    for (var indexError = 0; indexError < response.errorList.length; indexError++) {
                        jQuery("#err_" + response.errorList[indexError]["error_field"]).html(response.errorList[indexError]["error_message"].trim());
                    }
                }
            },
            error: function (objXHR, objStatus, objError) {
                jQuery("#btnApplyOnline").html("Submit");
                alert('There seems to be an issue.  Please try again after some time.');
            }

        });
}
function ApplyNowFormReset() {
    jQuery(".errorMessage").html("");
    document.getElementById("formApplyNow").reset();
}


jQuery('.faq-in-data-div').on('click', '.faqFeedbackSubmitAction', function () {
    try {
        jQuery(".faqFormSectionDiv").show();
        jQuery("#faqThanksMessageYesPopup").hide();
        jQuery("#err_faq_feedback_message").html("");
        jQuery("#btnFaqSend").text("Sending..");

        var actionText = jQuery(this).text().toLocaleLowerCase().trim();
        var text = actionText == "yes" ? "yes" : jQuery("#faqTextArea").val();
        var id = jQuery(this).closest("li.item").data("trackingid");
        var heading = jQuery(this).closest("li.item").find(".field-heading").html().trim();
        var formData = new FormData();

        if (actionText == "yes") {
            ResetSubmitFaqFeedbackForm();
        }

        formData.append("feedbackMsg", text);
        formData.append("faqid", id);
        formData.append("faqName", heading);

        jQuery.ajax({
            type: 'POST',
            url: glblHandlerPath + "faq-feedback.ashx",
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                result = JSON.parse(result);
                if (result.status) {
                    if (actionText != "yes") {
                        jQuery(".faqFormSectionDiv").hide();
                        jQuery("#faqThanksMessageYesPopup").show();
                        jQuery("#faqTextArea").val("");
                    }
                }
                else {
                    jQuery("#err_faq_feedback_message").html(result.errorList[0]["error_message"].trim());
                    jQuery("#btnFaqSend").text("Send");
                }
            }
        });
    } catch (exx) { console.log("Faq Feedback Excemption" + exx); jQuery("#btnFaqSend").text("Send"); }

});

jQuery('.faq-in-data-div').on('click', '.resetFaqFeedbackFormAction', function () {
    ResetSubmitFaqFeedbackForm();
});


function fnRefreshCaptcha() {
    var img = document.getElementById("img_captcha");
    img.src = glblHandlerPath+ "captchagenerator.ashx?query=" + Math.random();
}


/*forms-coding js end*/



