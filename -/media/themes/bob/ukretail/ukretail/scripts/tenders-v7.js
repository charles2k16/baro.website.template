$xa(document).ready(function () {
            $xa('.noticestab li a').on('click', function () {
            var dataTab = $xa(this).data("id");
            if (dataTab == "tab2") {
                $xa("#searchcontainer").removeClass('nodisplay');
            } else { $xa("#searchcontainer").addClass('nodisplay'); }
            $xa(".noticedetail").addClass('nodisplay');
            $xa("#" + dataTab).removeClass('nodisplay');
        });
    });

if ($xa("#currpageitemid").val() == "{AC0B61CD-9C01-4D36-A7E3-384E322D3A3B}" || $xa("#currpageitemid").val() == "{A9B4A7A4-6C4C-4246-9E07-1B7C820CFF15}"|| $xa("#currpageitemid").val() == "{BCAEBAD8-F75F-4C39-A3D5-22AB324210A6}") {
        $xa("#btn_tender_search").click(function () {
            setTimeout(function () {
                fnTenderSearch();
            }, 100);
        });
        $xa("#Likedbyyou").click(function () {
            setTimeout(function () {
                fnTenderFilterLikes();
            }, 100);
        });
        $xa(".tender_zone li").click(function () {
            setTimeout(function () {
                fnBindRegion();
            }, 100);
        });

        $xa("#gobtnfilter").click(function () {
            setTimeout(function () {
                fnTenderFilters();
            }, 100);
        });

        $xa("#resetfilter").click(function () {
            setTimeout(function () {
                fnTenderResetFilters();
            }, 100);
        });

        if ($xa("#currpageitemid").val() == "{A9B4A7A4-6C4C-4246-9E07-1B7C820CFF15}" || $xa("#currpageitemid").val() == "{BCAEBAD8-F75F-4C39-A3D5-22AB324210A6}") {
        $xa('.bob-custom-dropdown.region').addClass('bob-custom-disabled-dropdown');
        }
$xa("#tender_loadmore").hide();
    }
 
 function fnGetFilterValue(element) {
        if (typeof $xa(element + " li.active").attr("data-value") != "undefined") {
            return $xa(element + " li.active").attr("data-value").trim();
        } else { return ""; }
  }

function fnTenderSearch() {
            if ($xa("#search_tender").val() != "" && $xa("#search_tender").val() != null) {
                var matchedTenderItems = [];
                var searchkey = $xa.trim($xa("#search_tender").val().toLowerCase());
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-title").toLowerCase().indexOf(searchkey) > -1 || $xa(this).attr('data-dept').toLowerCase().indexOf(searchkey) > -1)
                       {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });

                if (matchedTenderItems.length > 0) {
                    for (i = 0; i < matchedTenderItems.length; i++) {
                        $xa("#" + matchedTenderItems[i]).show();
                    }
                }
                 
            } 
        }

          function fnTenderFilterLikes() {
            var matchedTenderItems = [];
            var notMatchedTenderItems = [];
            $xa(".tenders").each(function (index) {

                var likedId = "";
                if ($xa('#liked_' + (index + 1) + '.liked-li').attr('data-id') != undefined) {
                    likedId = $xa('#liked_' + (index + 1) + '.liked-li').attr('data-id');
                }
                if ($xa(this).attr("data-id") == likedId) {
                    matchedTenderItems.push($xa(this).attr("id"));
                } else {
                    notMatchedTenderItems.push($xa(this).attr("id"));
                }
            });

            if ($xa("#Likedbyyou").prop('checked')) {
                $xa(".tenders").each(function (index) {
                    $xa(this).hide();
                });
                if (matchedTenderItems.length > 0) {
                    for (i = 0; i < matchedTenderItems.length; i++) {
                        $xa("#" + matchedTenderItems[i]).show();
                    }
                }
                 
            } else {
                if (matchedTenderItems.length > 0) {
                    for (i = 0; i < matchedTenderItems.length; i++) {
                        $xa("#" + matchedTenderItems[i]).show();
                    }
                }
                if (notMatchedTenderItems.length > 0) {
                    for (i = 0; i < notMatchedTenderItems.length; i++) {
                        $xa("#" + notMatchedTenderItems[i]).show();
                    }
                }
            }
        }

    function fnTenderFilters() {
        var matchedTenderItems = [];
        var dept = fnGetFilterValue(".tender_departments");
        var zone = fnGetFilterValue(".tender_zone");
        var region = fnGetFilterValue(".tender_region");
        var year = fnGetFilterValue("#tender_years");
        var month = fnGetFilterValue("#tender_months");
        if ($xa("#currpageitemid").val() == "{AC0B61CD-9C01-4D36-A7E3-384E322D3A3B}") {
            if (dept != "" && year != "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-department") == dept && $xa(this).attr("data-year") == year && $xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            } else if (dept != "" && year != "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-department") == dept && $xa(this).attr("data-year") == year) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (dept != "" && year == "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-department") == dept) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            } else if (dept == "" && year != "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-year") == year && $xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (dept == "" && year != "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-year") == year) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (dept == "" && year == "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
        }

        if ($xa("#currpageitemid").val() == "{A9B4A7A4-6C4C-4246-9E07-1B7C820CFF15}" || $xa("#currpageitemid").val() == "{BCAEBAD8-F75F-4C39-A3D5-22AB324210A6}") {
            if (zone != "" && region != "" && year != "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-zone") == zone && $xa(this).attr("data-region") == region && $xa(this).attr("data-year") == year && $xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            } else if (zone != "" && region != "" && year != "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-zone") == zone && $xa(this).attr("data-region") == region && $xa(this).attr("data-year") == year) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone != "" && region != "" && year == "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-zone") == zone && $xa(this).attr("data-region") == region) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone != "" && region == "" && year == "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-zone") == zone) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone == "" && region != "" && year != "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-region") == region && $xa(this).attr("data-year") == year && $xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone == "" && region != "" && year != "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-region") == region && $xa(this).attr("data-year") == year) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone == "" && region != "" && year == "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-region") == region) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone == "" && region == "" && year != "" && month == "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-year") == year) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
            else if (zone == "" && region == "" && year == "" && month != "") {
                $xa(".tenders").each(function (index) {
                    if ($xa(this).attr("data-month") == month) {
                        matchedTenderItems.push($xa(this).attr("id"));
                    } else {
                        $xa(this).hide();
                    }
                });
            }
        }
        
        if (matchedTenderItems.length > 0) {
            for (i = 0; i < matchedTenderItems.length; i++) {
                $xa("#" + matchedTenderItems[i]).show();
            }
        }
    }
    
   function fnTenderResetFilters() {
        if ($xa("#currpageitemid").val() == "{AC0B61CD-9C01-4D36-A7E3-384E322D3A3B}") {
            $xa('.bob-custom-dropdown.mt-0 span small:eq(0)').html("Department");
            $xa('.tender_departments').find('li.active').removeClass('active');
        }
        if ($xa("#currpageitemid").val() == "{A9B4A7A4-6C4C-4246-9E07-1B7C820CFF15}") {
            $xa('.bob-custom-dropdown.mt-0 span small:eq(0)').html("Zone");
            $xa('.tender_zone').find('li.active').removeClass('active');
            $xa('.bob-custom-dropdown.region span small').html("Region");
            $xa('.tender_region').find('li.active').removeClass('active');
            $xa('.bob-custom-dropdown.region').addClass('bob-custom-disabled-dropdown');
        }
       
        $xa('.bob-custom-dropdown.year span small').html("Year");
        $xa('#tender_years').find('li.active').removeClass('active');

        $xa('.bob-custom-dropdown.month span small').html("Month");
        $xa('#tender_months').find('li.active').removeClass('active');

        $xa('#Likedbyyou').prop('checked', false);
        $xa('#search_tender').val("");
        $xa(".tenders").each(function (index) {
            $xa(this).show();
        });
    }

function fnBindRegion() {
    if ($xa(".tender_zone li.active").attr("data-value") != undefined && $xa(".tender_zone li.active").attr("data-value") != null) {
        var zone = $xa(".tender_zone li.active").attr("data-value");
        var handlerURL = "/handlers/bob/countrywebsites/india/tenders/get-regions.ashx";
        var postData = {
            zone: zone
        };
        $xa.ajax({
            async: true,
            url: handlerURL,
            type: "post",
            data: postData,
            success: function(e) {
                e = JSON.parse(e);
                if (e.status == "success") {
                    var searchResult = JSON.parse(e.response);
                    if (searchResult != undefined && searchResult.length > 0) {
                        var strData = "";
                        $xa('.bob-custom-dropdown.mt-0:eq(1)').removeClass('bob-custom-disabled-dropdown');
                        for (var x = 0; x < searchResult.length; x++) {

                            strData += "<li data-value=\""+ searchResult[x]["Id"]+"\">";
                            strData += searchResult[x]["Title"];
                            strData += "</li>";
                        }
                        $xa('.bob-custom-dropdown.region').removeClass('bob-custom-disabled-dropdown');
                        $xa(".tender_region").html(strData);
                }else{
                    $xa(".tender_region").html("");
                }
                 
                } else if (e.status == "fail") {
                    console.log(e.errorMessage);
                }
            },
            error: function() {
                console.log(e.errorMessage);
            },
        });
$xa('.bob-custom-dropdown.mt-0 span small:eq(1)').html("Region");
        $xa('.tender_region').find('li.active').removeClass('active');    
    }
}

$xa(".yes-btn-a").click(function(){
    $xa(".external-popup-div, .bob-overlay").toggle(0);
})
$xa(".external-popup").click(function(){
    $xa(".external-popup-div, .bob-overlay").show(0);
})