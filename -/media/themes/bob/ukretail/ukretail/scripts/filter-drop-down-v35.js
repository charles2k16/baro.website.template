function fnCheckUndefinedElseReturnBlank(elementId) {
    if (typeof $xa("#" + elementId + " ul li.active").data("value") != "undefined") {
        return $xa("#" + elementId + " ul li.active").data("value").trim();
    } else { return ""; }
}


jQuery(".filterby .bob-custom-dropdown .bob-custom-dropdown-list li").click(function() {
    var _this = $xa(this);

    setTimeout(function() {
        var matchedItems = [];
        var dataIdeal = fnCheckUndefinedElseReturnBlank("ideal-for");
        var dataPurpose = fnCheckUndefinedElseReturnBlank("purpose");
        var dataEligibilty = fnCheckUndefinedElseReturnBlank("eligibilty");
        var dataProductType = fnCheckUndefinedElseReturnBlank("product-type");
        var dataOffers = fnCheckUndefinedElseReturnBlank("offers");
        var dataCategory = fnCheckUndefinedElseReturnBlank("category");
        var dataSubcategory = fnCheckUndefinedElseReturnBlank("subcategory");
        var dataTenure = fnCheckUndefinedElseReturnBlank("tenure");
        var parentClasses = ".bob-home-loan .bob-page-list-box ul.items .item";

        if (_this.data("value") == "") {
            _this.parents(".bob-custom-dropdown").find(".form-control small").html(_this.parents(".bob-custom-dropdown-list").attr("data-label"));
            _this.parents(".bob-custom-dropdown").addClass("all-select");

        }
        if ($xa(parentClasses).length > 0) {


            $xa(parentClasses).each(function(index) {
                if ($xa(this).attr("data-ideal-for").indexOf(dataIdeal) > -1 && dataIdeal != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-purpose").toLowerCase().indexOf(dataPurpose) > -1 && dataPurpose != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-eligibility").toLowerCase().indexOf(dataEligibilty) > -1 && dataEligibilty != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-product-type").toLowerCase().indexOf(dataEligibilty) > -1 && dataEligibilty != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-offers").toLowerCase().indexOf(dataOffers) > -1 && dataOffers != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-product-type").toLowerCase().indexOf(dataProductType) > -1 && dataProductType != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-category").toLowerCase().indexOf(dataCategory) > -1 && dataCategory != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-subcategory").toLowerCase().indexOf(dataSubcategory) > -1 && dataSubcategory != "") {
                    matchedItems.push(index);
                }

                if ($xa(this).attr("data-tenure").toLowerCase().indexOf(dataTenure) > -1 && dataTenure != "") {
                    matchedItems.push(index);
                }


            });



            /*Hide first*/
            $xa(parentClasses).hide().addClass('hide-card');
            if (matchedItems.length > 0) {
                /*Show all items whose index is in matched arry*/
                $xa(parentClasses).each(function(index) {
                    var _tempThis = $xa(this);
                    matchedItems.findIndex(function(i) {
                        if (i == index) {
                            _tempThis.show().removeClass('hide-card');
                        }
                    })
                });
            }

            if (dataIdeal == "" &&
                dataPurpose == "" &&
                dataEligibilty == "" &&
                dataProductType == "" &&
                dataOffers == "" &&
                dataCategory == "" &&
                dataSubcategory == "" &&
                dataTenure == "") {
                $xa(parentClasses).show().removeClass('hide-card');
            }

        }
        AOS.refresh();
    }, 100);

});


function fnSearchDataResult() {
    if ($xa(".search-class").val() != "" && $xa(".search-class").val() != null) {
        var searchText = jQuery(".search-class").val();
        if (searchText != "") {
            var flagFound = false;
            jQuery(".bob-home-loan .bob-page-list-box ul.items li.item").addClass("nodisplay");
            jQuery(".bob-home-loan .bob-page-list-box ul.items li.item").each(function() {
                var allText = "";
                allText = jQuery(this).find("h2").text() + "-" + jQuery(this).find(".box-content").text();
                if (allText.toLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1) {
                    flagFound = true;
                    jQuery(this).removeClass("nodisplay");

                }
            });



            if (flagFound) {
                // jQuery("#faqPageDDLFilter").hide();
            }
        } else {
            //jQuery("#faqPageDDLFilter").show();
            jQuery(".bob-home-loan .bob-page-list-box ul.items li.item").addClass("nodisplay");

        }
    }
    AOS.refresh();
}

// jQuery(".loan-search > img").click(function(){
//     fnSearchDataResult();
// });
jQuery(function() {
    var winW = jQuery(window).width();
    jQuery(".search-class").keydown(function() {
        setTimeout(function() {
            fnSearchDataResult();
        }, 20);
    });
    if (jQuery(window).width() <= 767) {
        jQuery('.loan-search,.filterby').remove();
    }
    if (winW > 0) {
        jQuery(".bob-custom-dropdown .bob-custom-dropdown-list>ul").mCustomScrollbar({

        });
    }

});