$xa(document).on('click', '.bookmark-btn', function () {
    fnBookMarkPage();
});

function fnCopyLink() {
    $xa("body").append('<input id="copyURL" type="text" value="" />');
    $xa("#copyURL").val(window.location.href).select();
    document.execCommand("copy");
    $xa("#copyURL").remove();
}
function fnBookMarkPage() {
    var triggerBookmark = $xa(".bookmark-btn");
    if (window.sidebar && window.sidebar.addPanel) {

        window.sidebar.addPanel(document.title, window.location.href, '');

    } else if (window.external && ('AddFavorite' in window.external)) {

        window.external.AddFavorite(location.href, document.title);

    } else if (window.opera && window.print || window.sidebar && !(window.sidebar instanceof Node)) {
        /**
        * For Firefox <23 and Opera <15, no need for JS to add to bookmarks
        * The only thing needed is a `title` and a `rel="sidebar"`
        * To ensure that the bookmarked URL doesn't have a complementary `#` from our trigger's href
        * we force the current URL
        */
        triggerBookmark.attr('rel', 'sidebar').attr('title', document.title).attr('href', window.location.href);
        return true;

    } else { /*For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D*/

        alert('You can add this page to your bookmarks by pressing ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D on your keyboard.');

    }
    /*If you have something in the `href` of your trigger*/
    return false;
}

function fnUpdatePageViews(pageId, pageName) {
    var handlerURL = "/handlers/common/update-page-views.ashx";

    var postData = {
        pageid: pageId,
        pagename: pageName
    };
    $xa.ajax({
        async: true,
        url: handlerURL,
        type: "post",
        data: postData,
        success: function (e) {
            "success" == (e = JSON.parse(e)).status
                ? (console.log(e.views))
                : "fail" == e.status
                    ? ((console.log(e.errorMessage)))
                    : console.log(e.errorMessage);
        },
        error: function () {
            console.log(e.errorMessage);
        },
    });
}

/* Start Media Function */
function fnMediaSearch() {
    if ($xa("#search_media").val() != "" && $xa("#search_media").val() != null) {
        var mediaItems = [];
        var searchkey = $xa.trim($xa("#search_media").val().toLowerCase());
        if ($xa('.mediaItems').length > 0) {
            for (var x = 1; x < $xa('.mediaItems').length + 1; x++) {
                if ($xa('#mediaitem_' + x).attr('data-title').toLowerCase().indexOf(searchkey) > -1 || $xa('#mediaitem_' + x).attr('data-month').toLowerCase().indexOf(searchkey) > -1 || $xa('#mediaitem_' + x).attr('data-year').toLowerCase().indexOf(searchkey) > -1) {
                    mediaItems.push("mediaitem_" + x);
                } else {
                    $xa('#mediaitem_' + x).css("display", "none");
                }
            }
            fnMediaFilterData(mediaItems);
        }
    }

    AOS.refresh(); 
}

function fnMediaFilterData(arrMediaItems) {
    for (var x = 0; x < arrMediaItems.length; x++) {
        $xa("#" + arrMediaItems[x]).css("display", "block");
    }
}

function fnMediaFilter() {
    var mediaItems = [];
    var year = "";
    var month = "";
    if ($xa("#drp_media_years li.active").attr("value") != undefined) {
        year = $xa.trim($xa("#drp_media_years li.active").attr("value").toLowerCase());
    }
    if ($xa("#drp_media_months li.active").attr("value") != undefined) {
        month = $xa.trim($xa("#drp_media_months li.active").attr("value").toLowerCase());
    }
    if ($xa('.mediaItems').length > 0) {
        if (year != null && year != "" && month != null && month != "") {
            for (var x = 1; x < $xa('.mediaItems').length + 1; x++) {
                if ($xa('#mediaitem_' + x).attr('data-year').toLowerCase() == year && $xa('#mediaitem_' + x).attr('data-month').toLowerCase() == month) {
                    mediaItems.push("mediaitem_" + x);
                } else {
                    $xa('#mediaitem_' + x).css("display", "none");
                }
            }
        } else if (year != null && year != "" && (month == null || month == "")) {
            for (var x = 1; x < $xa('.mediaItems').length + 1; x++) {
                if ($xa('#mediaitem_' + x).attr('data-year').toLowerCase() == year) {
                    mediaItems.push("mediaitem_" + x);
                } else {
                    $xa('#mediaitem_' + x).css("display", "none");
                }
            }
        } else if ((year == null || year == "") && month != null && month != "") {
            for (var x = 1; x < $xa('.mediaItems').length + 1; x++) {
                if ($xa('#mediaitem_' + x).attr('data-month').toLowerCase() == month) {
                    mediaItems.push("mediaitem_" + x);
                } else {
                    $xa('#mediaitem_' + x).css("display", "none");
                }
            }
        }
        fnMediaFilterData(mediaItems);
    }

    AOS.refresh();  
}

function fnLikedItemsMedia() {
}

function fnResetMediaFilter() {
    $xa("#search_media").val("");
    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('span small').text("Month");
    $xa("#drp_media_months").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
    $xa("#drp_media_months").addClass('active');
    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('span small').text("Year");
    $xa("#drp_media_years").parents('.bob-custom-dropdown').find('.bob-custom-dropdown-list li').removeClass('active');
    $xa("#drp_media_years").addClass('active');

    if (jQuery('.bob-report-list-div .col-sm-4').length > 0) {
        jQuery(".bob-report-list-div .col-sm-4").slice(0, 6).show();
    } else {
        jQuery(".bob-report-list-div .col-sm-3").slice(0, 12).show();
    }
    if (jQuery('.bob-report-list-div .col-sm-4').length > 0) {
        jQuery(".bob-report-list-div .col-sm-4:hidden").slice(0, 6).slideDown();
    } else {
        jQuery(".bob-report-list-div .col-sm-3:hidden").slice(0, 12).slideDown();
    }

    if (jQuery(".bob-report-list-div .col-sm-4:hidden,.bob-report-list-div .col-sm-3:hidden").length == 0) {
        jQuery(this).parents('.bob-gallery-load-more').fadeOut('slow');
    }
    AOS.refresh();
}

/*End Media Function*/


/*Start Download Forms Function */
function fnDownloadFormSearch() {
    if ($xa("#txt_download_form_search").val() != "" && $xa("#txt_download_form_search").val() != null) {
        var searchkey = $xa.trim($xa("#txt_download_form_search").val().toLowerCase());
        var handlerURL = "/handlers/downloadforms/search.ashx";
        var postData = {
            searchkeyword: searchkey
        };
        $xa.ajax({
            async: true,
            url: handlerURL,
            type: "post",
            data: postData,
            success: function (e) {
                e = JSON.parse(e);
                if (e.status == "success") {
                    var searchResult = JSON.parse(e.response);
                    if (searchResult != undefined && searchResult.length > 0) {
                        $xa("#section_searchresults").css("display", "block");
                        $xa("#section_downloadforms").css("display", "none");
                        var strData = "";
                        for (var x = 0; x < searchResult.length; x++) {

                            strData += "<li>";
                            strData += searchResult[x]["FormName"] + " <a class=\"download-btn\" onclick=\"fnUpdatePageViews('" + searchResult[x]["FormId"] + "','Download Forms')\" href=\"" + searchResult[x]["FormPDFLink"] + "\" target=\"_blank\">";
                            strData += searchResult[x]["FormPDFLinkText"] + "</a>";
                            strData += "</li>";
                        }
                        $xa(".formsearchdata").html(strData);
                    }
                    console.log(searchResult);
                } else if (e.status == "fail") {
                    console.log(e.errorMessage);
                }
            },
            error: function () {
                console.log(e.errorMessage);
            },
        });
    }
}

/*End Download Forms Function*/

/* Start Annual Reports Function */
function fnReportSearch() {
    if ($xa("#report_search").val() != "" && $xa("#report_search").val() != null) {
        var reportItems = []; var resReg = $xa(".r-register>h3").attr('data-id');
        var searchkey = $xa.trim($xa("#report_search").val().toLowerCase());
        if ($xa('.reportitems').length > 0) {
            for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                if (resReg != undefined && resReg == "resregister") {
                    if ($xa('#reportitem_' + x).attr('data-title').toLowerCase().indexOf(searchkey) > -1 || $xa('#reportitem_' + x).attr('data-year').toLowerCase().indexOf(searchkey) > -1 || $xa('#reportitem_' + x).attr('data-location').toLowerCase().indexOf(searchkey) > -1) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                } else {
                    if ($xa('#reportitem_' + x).attr('data-title').toLowerCase().indexOf(searchkey) > -1 || $xa('#reportitem_' + x).attr('data-quarter').toLowerCase().indexOf(searchkey) > -1 || $xa('#reportitem_' + x).attr('data-year').toLowerCase().indexOf(searchkey) > -1 || $xa('#reportitem_' + x).attr('data-rtype').toLowerCase().indexOf(searchkey) > -1) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            fnReportFilterData(reportItems, resReg);
        }
    }
}

function fnReportFilterData(arrReportItems, resReg) {
    var len = 8;
    if (arrReportItems.length < 8) {
        len = arrReportItems.length;
    }
    if (resReg != undefined && resReg == "resregister") {
        len = 4;
        if (arrReportItems.length < 4) {
            len = arrReportItems.length;
        }
    }
    for (var x = 0; x < len; x++) {
        $xa("#" + arrReportItems[x]).css("display", "block");
    }
}
function fnReportFilter() {
    if ($xa('.reportitems').length > 0) {
        var reportItems = [];
        var year = $xa("#drp_report_years li.active").attr("value");
        if (year != undefined) {
            year = year.toLowerCase();
        }
        var resReg = $xa(".r-register>h3").attr('data-id');
        if (resReg != undefined && resReg == "resregister") {
            fnResRegFilter(resReg);
        }
        else {
            var quarter = $xa.trim($xa("#drp_report_quarters").val().toLowerCase());
            var rType = $xa.trim($xa("#drp_report_types").val().toLowerCase());
            if ((year != null && year != "") && (quarter != null && quarter != "") && (rType != null && rType != "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year && $xa('#reportitem_' + x).attr('data-quarter').toLowerCase() == quarter && $xa('#reportitem_' + x).attr('data-rtype').toLowerCase() == rType) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            } else if ((year != null && year != "") && (quarter != null && quarter != "") && (rType == null || rType == "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year && $xa('#reportitem_' + x).attr('data-quarter').toLowerCase() == quarter) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            else if ((year != null && year != "") && (quarter == null || quarter == "") && (rType != null && rType != "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year && $xa('#reportitem_' + x).attr('data-rtype').toLowerCase() == rType) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            else if ((year != null && year != "") && (quarter == null || quarter == "") && (rType == null || rType == "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            else if ((year == null || year == "") && (quarter != null && quarter != "") && (rType != null && rType != "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-quarter').toLowerCase() == quarter && $xa('#reportitem_' + x).attr('data-rtype').toLowerCase() == rType) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            else if ((year == null || year == "") && (quarter != null && quarter != "") && (rType == null || rType == "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-quarter').toLowerCase() == quarter) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            else if ((year == null || year == "") && (quarter == null || quarter == "") && (rType != null && rType != "")) {
                for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                    if ($xa('#reportitem_' + x).attr('data-rtype').toLowerCase() == rType) {
                        reportItems.push("reportitem_" + x);
                    } else {
                        $xa('#reportitem_' + x).css("display", "none");
                    }
                }
            }
            fnReportFilterData(reportItems, resReg);
        }
    }
}

function fnResRegFilter(resReg) {
    var reportItems = [];
   var year = $xa("#drp_report_years li.active").attr("value");
        if (year != undefined) {
            year = year.toLowerCase();
        }
     var location = $xa("#drp_report_location li.active").attr("value");
        if (location != undefined) {
            location = location.toLowerCase();
        }

    if ($xa('.reportitems').length > 0) {
        if (year != null && year != "" && location != null && location != "") {
            for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year && $xa('#reportitem_' + x).attr('data-location').toLowerCase() == location) {
                    reportItems.push("reportitem_" + x);
                } else {
                    $xa('#reportitem_' + x).css("display", "none");
                }
            }
        }
        else if (year != null && year != "" && (location == null || location == "")) {
            for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                if ($xa('#reportitem_' + x).attr('data-year').toLowerCase() == year) {
                    reportItems.push("reportitem_" + x);
                } else {
                    $xa('#reportitem_' + x).css("display", "none");
                }
            }
        }
        else if ((year == null || year == "") && location != null && location != "") {
            for (var x = 1; x < $xa('.reportitems').length + 1; x++) {
                if ($xa('#reportitem_' + x).attr('data-location').toLowerCase() == location) {
                    reportItems.push("reportitem_" + x);
                } else {
                    $xa('#reportitem_' + x).css("display", "none");
                }
            }
        }
        fnReportFilterData(reportItems, resReg);
    }
}

function fnResetReportFilter() {
    $xa("#report_search").val("");
    $xa("#drp_report_years").val("");
    var resReg = $xa(".r-register>h3").attr('data-id');
    if (resReg != undefined && resReg == "resregister") {
        $xa("#drp_report_location").val("");
    } else {
        $xa("#drp_report_quarters").val("");
        $xa("#drp_report_types").val("");
    }
    if ($xa('.reportitems').length > 0) {
        var len = 8;
        if ($xa('.reportitems').length < 8) {
            len = $xa('.reportitems').length;
        }
        for (var x = 1; x <= $xa('.reportitems').length; x++) {
            $xa('#reportitem_' + x).css("display", "none");
        }
        for (var x = 1; x <= len; x++) {
            $xa('#reportitem_' + x).css("display", "block");
        }
    }
}
/*End Annual Reports Function*/
function fnTenderFilter() { };
function fnTenderFilter() { };
function fnTenderContractSearch() { }



/*Start Blogs*/



/*-----------Anual Report Filter----------*/
$xa(".bob-custom-dropdown .bob-custom-dropdown-list .anualreportfilter li").click(function () {
    setTimeout(function () {
        fnAnualReportFilter();
        AOS.refresh();
    }, 100);

});

function fnAnualReportFilter() {
    var matchedReportItems = [];
    var year = "";
    if ($xa("#ul_fn_years li.active").attr("data-year") != undefined) {
        year = $xa.trim($xa("#ul_fn_years li.active").attr("data-year"));
    }


    if ($xa(".annualreportitems").length > 0) {
        if (year != null && year != "") {
            for (var x = 1; x <= $xa('.annualreportitems').length; x++) {
                if ($xa('#reportitem_' + x).attr("data-year") == year) {
                    matchedReportItems.push("reportitem_" + x);
                } else {
                    $xa('#reportitem_' + x).hide();
                }
            }

        }
    }

    if (matchedReportItems.length > 0) {
        $xa(".annualreportitems").each(function (index) {
            $xa(this).hide();
        });
        for (i = 0; i < matchedReportItems.length; i++) {
            $xa("#" + matchedReportItems[i]).show();
        }
    }
    if (year == null || year == "") {
        $xa(".annualreportitems").each(function (index) {
            $xa(this).show();
        });
    }
}

/*-----------Presentation Analyst----------*/

$xa(".bob-custom-dropdown .bob-custom-dropdown-list .analystfilter li").click(function () {
    setTimeout(function () {
        fnPresentationAnalystFilter();
        AOS.refresh();
    }, 100);

});

function fnPresentationAnalystFilter() {
    var matchedAnalystItems = [];
    var year = "";
    var quarter = "";
    if ($xa("#drp_fyear li.active").attr("data-value") != undefined) {
        year = $xa.trim($xa("#drp_fyear li.active").attr("data-value").toLowerCase());
    }
    if ($xa("#drp_quarter li.active").attr("data-value") != undefined) {
        quarter = $xa.trim($xa("#drp_quarter li.active").attr("data-value").toLowerCase());
    }

    if ($xa(".analystItems").length > 0) {
        if (year != null && year != "" && quarter != null && quarter != "") {
            for (var x = 1; x < $xa('.analystItems').length + 1; x++) {
                if ($xa('#panalyst_' + x).attr("data-year").toLowerCase() == year && $xa('#panalyst_' + x).attr("data-quarter").toLowerCase() == quarter) {
                    matchedAnalystItems.push("panalyst_" + x);
                } else {
                    $xa('#panalyst_' + x).hide();
                }

            }

        } else if (year != null && year != "" && (quarter == null || quarter == "")) {
            for (var x = 1; x < $xa('.analystItems').length + 1; x++) {
                if ($xa('#panalyst_' + x).attr("data-year").toLowerCase() == year) {
                    matchedAnalystItems.push("panalyst_" + x);
                } else {
                    $xa('#panalyst_' + x).hide();
                }
            }

        } else if ((year == null || year == "") && quarter != null && quarter != "") {
            for (var x = 1; x < $xa('.analystItems').length + 1; x++) {
                if ($xa('#panalyst_' + x).attr('data-quarter').toLowerCase() == quarter) {
                    matchedAnalystItems.push("panalyst_" + x);
                } else {
                    $xa('#panalyst_' + x).hide();
                }
            }
        }
    }

    if (matchedAnalystItems.length > 0) {
        $xa(".analystItems").each(function (index) {
            $xa(this).hide();
        });
        for (i = 0; i < matchedAnalystItems.length; i++) {
            $xa("#" + matchedAnalystItems[i]).show();
        }
    }
    if ((year == null || year == "") && (quarter == null || quarter == "")) {
        $xa(".analystItems").each(function (index) {
            $xa(this).show();
        });
    }
}