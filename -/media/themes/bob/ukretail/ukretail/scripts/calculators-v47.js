jQuery(".bob-loan-calculator ul li small em:first").keyup(function (e) {

    /*var loan_amt = jQuery(this).html();
    if (isNaN(loan_amt)) {		
        alert('Please enter integer value')
        jQuery(this).html("100000");
    }
    else if (parseInt(loan_amt) < 100000 || parseInt(loan_amt) > 20000000) {
        alert('Please enter loan amount between 100000 to 20000000');
        jQuery(this).html("100000");
        
    }*/

});


/* Restrict Valid Chars Start */

function getKeyCode(e) {
    if (window.event)
        return window.event.keyCode; else
        if (e)
            return e.which; else
            return null;
}


function keyRestrictValidChars(e, validchars) {
    var key = '', keychar = ''; key = getKeyCode(e); if (key == null)
        return true; keychar = String.fromCharCode(key); keychar = keychar.toLowerCase(); validchars = validchars.toLowerCase(); if (validchars.indexOf(keychar) != -1)
        return true; if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true; return false;
}

/* Restrict Valid Chars End */


/* HOME LOAN TAKEOVER CALCULATOR START */
function inrFormat(a, sy) {
    if (sy) {
        csy = "&#8377; ";
    } else {
        csy = "";
    }
    a += "", x = a.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
    for (var c = /(\d+)(\d{3})/, d = 0, e = String(x1).length, f = parseInt(e / 2 - 1); c.test(x1) && (d > 0 ? x1 = x1.replace(c, "$1,$2") : (x1 = x1.replace(c, "$1,$2"), c = /(\d+)(\d{2})/), d++, f--, 0 != f););
    return csy + "" + x1 + x2
}
jQuery(document).ready(function () {

    calculate();

    var minIR = 6;
    var maxIR = 11;
    var minTenure = 12;
    var maxTenure = 360;

    jQuery("#hltc-existing-loan-amount").on("change", function () {

        var irval = jQuery(this).val();
        if (irval.length == 0 || isNaN(irval) || (irval < 100000 || irval > 20000000)) {
            alert("Please enter a valid number between " + 100000 + " and " + 20000000);
            return false;
        }
        jQuery(this).closest('li').find("small em").html(inrFormat(irval));
        calculate();
    });
    jQuery("#hltc-existing-emi").on("change", function () {
        var currEMI = jQuery(this).val();
        jQuery(this).closest('li').find("small em").html(inrFormat(currEMI));
        calculate();
    });
    jQuery("#hltc-remaining-tenure").on("change", function () {
        var remainingTenure = jQuery(this).val();
        if (remainingTenure.length == 0 || isNaN(remainingTenure) || (remainingTenure < minTenure || remainingTenure > maxTenure)) {
            alert("Please enter a valid number between " + minTenure + " and " + maxTenure);
            jQuery(this).val(minTenure);

            return false;
        }
        calculate();
    });
    jQuery("#hltc-bob-tenure").on("change", function () {
        calculate();
    });
    jQuery("#hltc-bob-interest-rate").on("change", function () {
        var irval = jQuery(this).val();
        if (irval.length == 0 || isNaN(irval) || (irval < minIR || irval > maxIR)) {
            alert("Please enter a valid number between " + minIR + " and " + maxIR);
            jQuery(this).val(minIR);
            return false;
        }
        calculate();
    });
});
function calculate() {
    var income = jQuery("#hltc-existing-loan-amount").val();
    /* console.log("hltc-existing-loan-amount : " + income);*/

    var current_emi = (jQuery("#hltc-existing-emi").val() * 1).toFixed(0);
    /*  console.log("hltc-existing-emi : " + current_emi);*/

    var tenure = jQuery("#hltc-remaining-tenure").val() * 1;
    /* console.log("hltc-remaining-tenure : " + tenure);*/

    var required_tenure = jQuery("#hltc-bob-tenure").val() * 1;
    /* console.log("hltc-bob-tenure : " + required_tenure);*/

    var interest_rate = jQuery("#hltc-bob-interest-rate").val();
    /* console.log("hltc-bob-interest-rate : " + interest_rate);*/

    var monthly_emi = ((income * (interest_rate / 1200) * Math.pow(1 + (interest_rate / 1200), required_tenure)) / (Math.pow((1 + (interest_rate / 1200)), required_tenure) - 1));
    /* console.log("monthly_emi : " + monthly_emi);*/

    monthly_emi = (monthly_emi * 1).toFixed(0);
    /* console.log("monthly_emi Fixed: " + monthly_emi);*/

    jQuery("#spn_monthly_emi_actual").html(inrFormat(current_emi, 1));
    jQuery("#spn_monthly_emi_result").html(inrFormat(monthly_emi, 1));

    var current_emi2 = (jQuery("#hltc-existing-emi").val() * 1);

    if ((current_emi2 > monthly_emi) || (current_emi2 == monthly_emi)) {
        if ((current_emi2 == monthly_emi)) {
            jQuery('.rating-block.emi-block').removeClass('bob_greater bob_less').addClass('bob_equal');
        }
        else {
            jQuery('.rating-block.emi-block').removeClass('bob_greater bob_equal').addClass('bob_less');
        }
    }
    else {
        jQuery('.rating-block.emi-block').removeClass('bob_less bob_equal').addClass('bob_greater');
    }
    var monthly_saving = (current_emi - monthly_emi);
    /* console.log("monthly_saving : " + monthly_saving);*/

    if (monthly_saving < 0) {
        monthly_saving = 0;
    }
    jQuery("#spn_monthly_saving").html(inrFormat(monthly_saving, 1));
    jQuery("#spn_Total_Savings").html("You Save " + inrFormat((monthly_saving * tenure), 1));
    var total_emi_savings_actual = (current_emi * tenure);
    /*  console.log("total_emi_savings_actual : " + total_emi_savings_actual);*/

    var total_emi_savings_result = (monthly_emi * required_tenure);
    /* console.log("total_emi_savings_result : " + total_emi_savings_result);*/


    if ((total_emi_savings_actual > total_emi_savings_result) || (total_emi_savings_actual == total_emi_savings_result)) {
        if ((total_emi_savings_actual > total_emi_savings_result)) {
            jQuery('.rating-block.saving-block').removeClass('bob_greater bob_equal').addClass('bob_less');
        } else {
            jQuery('.rating-block.saving-block').removeClass('bob_greater bob_less').addClass('bob_equal');
        }
    }
    else {
        jQuery('.rating-block.saving-block').removeClass('bob_less bob_equal').addClass('bob_greater');
    }


    var total_savings = monthly_saving * tenure;

    if (total_savings <= 0) {
        total_savings = 0;
    }

    //console.log("total_savings : " + total_savings);
    //console.log("total_savings new: " + total_savings);

    jQuery("#spn_Total_Savings").html(inrFormat((total_savings), 1));
}

/* HOME LOAN TAKEOVER CALCULATOR END */

/*FD STARTs*/

jQuery("#amount").parent(".slidecontainer").next("small").children().focusout(function () {
    var minRegularMonthlyDeposit = 500,
        maxRegularMonthlyDeposit = 1000000,
        defRegularMonthlyDeposit = 500;
    var fieldVal = parseInt(jQuery(this).text());
    if (fieldVal > parseInt(maxRegularMonthlyDeposit) || fieldVal < parseInt(minRegularMonthlyDeposit)) {
        alert("Please enter amount between " + minRegularMonthlyDeposit + " to " + maxRegularMonthlyDeposit + ".");
        if (fieldVal > parseInt(maxRegularMonthlyDeposit)) {
            jQuery(this).text(maxRegularMonthlyDeposit);
        } else {
            jQuery(this).text(defRegularMonthlyDeposit);
			setslidercolor(minRegularMonthlyDeposit,maxRegularMonthlyDeposit,defRegularMonthlyDeposit,'Amount');
        }
        UpdateSliderValuesFD();
    } else {
        UpdateSliderValuesFD();
    }
});

jQuery("#rate").parent(".slidecontainer").next("small").children().focusout(function () {
    var minRegularMonthlyDeposit = 0,
        maxRegularMonthlyDeposit = 2,
        defRegularMonthlyDeposit = 1;
    var fieldVal = parseInt(jQuery(this).text());
    if (fieldVal > parseInt(maxRegularMonthlyDeposit) || fieldVal < parseInt(minRegularMonthlyDeposit)) {
        alert("Please enter rate between " + minRegularMonthlyDeposit + " to " + maxRegularMonthlyDeposit + ".");
        if (fieldVal > parseInt(maxRegularMonthlyDeposit)) {
            jQuery(this).text(maxRegularMonthlyDeposit);
        } else {
            jQuery(this).text(defRegularMonthlyDeposit);
			setslidercolor(minRegularMonthlyDeposit,maxRegularMonthlyDeposit,defRegularMonthlyDeposit,'Rate');
        }

        UpdateSliderValuesFD();
    } else {
        UpdateSliderValuesFD();
    }
    
});

jQuery("#month").parent(".slidecontainer").next("small").children().focusout(function () {
    var minSavingsTermmonths = 6,
        maxSavingsTermmonths = 60,
        defSavingsTermmonths = 6;
    var fieldVal = parseInt(jQuery(this).text());
    if ((fieldVal > parseInt(maxSavingsTermmonths) || fieldVal < parseInt(defSavingsTermmonths))) {
        alert("Please enter months between " + minSavingsTermmonths + " to " + maxSavingsTermmonths + ".");
        if (fieldVal > parseInt(maxSavingsTermmonths)) {
            jQuery(this).text(maxSavingsTermmonths);
            jQuery("#month").val(maxSavingsTermmonths)
        } else {
            jQuery(this).text(defSavingsTermmonths);
            jQuery("#month").val(defSavingsTermmonths);
			setslidercolor(minSavingsTermmonths,maxSavingsTermmonths,defSavingsTermmonths,'Month');
        }
        UpdateSliderValuesFD();
		
    } else {
        UpdateSliderValuesFD();
    }
    
});

function setslidercolor(mina,maxa,vala,field){

setTimeout(function () {
        var min = mina;
            var max = maxa;
            var val = vala;
			if(field=='Amount'){
				jQuery(jQuery('input[type="range"]')[0]).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
			}else if(field=='Rate'){
				jQuery(jQuery('input[type="range"]')[1]).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
			}else{
				jQuery(jQuery('input[type="range"]')[2]).css({
                'background-size': (val - min) * 100 / (max - min) + '% 100%'
            });
			}
		
    }, 200);
		
}
	
if (jQuery('.bob-loan-fd-calculator-div').length > 0) {
    var targetTenure = document.getElementById('month').value;
    var currentDate = new Date(Date.now());
    var mtDate = new Date(currentDate.setMonth(currentDate.getMonth() + parseInt(targetTenure)));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let formatted_date = mtDate.getDate() + " " + months[mtDate.getMonth()] + " " + mtDate.getFullYear();
    document.getElementById('maturity-date').innerHTML = formatted_date;

    jQuery("#currType li").click(function () {
        UpdateSliderValuesFD();
    });

    jQuery("#fdType li").click(function () {
        UpdateSliderValuesFD();
    });
    const rangeInputsFD = document.querySelectorAll('input[type="range"]');
    //const numberInputFD = document.querySelector('input[type="text"]');


    function handleInputChangeFD(e) {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('range') //Tenure
        }
        var min = target.min
        var max = target.max
        var val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        jQuery(this).parents('.slidecontainer').next('small').find('em').text(val);

        UpdateSliderValuesFD();
    }
    function UpdateSliderValuesFD() {
        setTimeout(function () {
            var targetAmt = document.getElementById('amount').value; //Loan Amount
            var targetTenure = document.getElementById('month').value; //Tenure
            var targetInterest = document.getElementById('rate').value; //Interest Rate


            //set Maturity Date #maturity-date
            var currentDate = new Date(Date.now());
            var mtDate = new Date(currentDate.setMonth(currentDate.getMonth() + parseInt(targetTenure)));
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let formatted_date = mtDate.getDate() + " " + months[mtDate.getMonth()] + " " + mtDate.getFullYear();
            document.getElementById('maturity-date').innerHTML = formatted_date;
            //set Rate of Interest (%) #matIntRate
            document.getElementById('matIntRate').innerHTML = targetInterest + " %";

            var amtfd = parseFloat(targetAmt);
            var ratefd = parseFloat(targetInterest);
            var yearfd = parseFloat(targetTenure / 12);
            var freqfd; //Quarterly

            //console.log("maturity====>>" + jQuery("#fdType li.active").attr("value"));

            var maturity, aggregateInterestAmount;

            //console.log("Values======>" + jQuery("#fdType li.active").attr("value"));

            if (jQuery("#fdType li.active").attr("value") == "0") {
                aggregateInterestAmount = Math.round((amtfd * ratefd * yearfd) / 100);
                maturity = Math.round(amtfd + aggregateInterestAmount);
            }
            else {
                freqfd = parseInt(jQuery("#fdType li.active").attr("value"));
                //console.log("freqfd====>" + freqfd);
                maturity = amtfd * Math.pow((1 + ((ratefd / 100) / freqfd)), freqfd * yearfd);
                aggregateInterestAmount = Math.round(maturity) - amtfd;
            }
            jQuery(".MatureAmountNew").html(numberWithCommas(Math.round(maturity)));
            jQuery(".InterestAmount").html(numberWithCommas(aggregateInterestAmount));
        }, 100);

    }
    jQuery(function () {
        rangeInputsFD.forEach(input => {
            input.addEventListener('input', handleInputChangeFD)
        });

        if (typeof glblJsonDataCalculatorsMinMaxValues !== 'undefined') {
            if (glblJsonDataCalculatorsMinMaxValues.length > 0) {
                jQuery('.bob-loan-calculator ul li small em').each(
                    function () {
                        fnGlblBindCalcMinMaxDefaultValuesFD(this, jQuery(this).parents('li').find('.slidecontainer input').attr('id'));
                        UpdateSliderValuesFD();
                    }
                );
            }
        }
    });

    function fnGlblBindCalcMinMaxDefaultValuesFD(emTagElem, inputFieldId) {
        var elInd = 0;

        var akaMinMaxVar = glblJsonDataCalculatorsMinMaxValues; //Alias
        var minVal, maxVal, defaultVal;
        if (inputFieldId === "amount") {

            minVal = akaMinMaxVar[elInd]["loanAmountMinValue"]
            maxVal = akaMinMaxVar[elInd]["loanAmountMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["loanAmountDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(numberWithCommas(minVal));
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(numberWithCommas(maxVal));

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);
        }
        else if (inputFieldId === "month") {
            minVal = akaMinMaxVar[elInd]["tenureMinValue"]
            maxVal = akaMinMaxVar[elInd]["tenureMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["tenureDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);
        }
        else if (inputFieldId === "rate") {

            minVal = akaMinMaxVar[elInd]["rateOfInterestMinValue"]
            maxVal = akaMinMaxVar[elInd]["rateOfInterestMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["rateOfInterestDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);

        }

    }

}

/*FD ENDs*/

/*Reccurring Calc starts*/

const rangeInputsRD = document.querySelectorAll('input[type="range"]');

function handleInputChangeRD(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range') //Tenure
    }
    var min = target.min
    var max = target.max
    var val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    jQuery(this).parents('.slidecontainer').next('small').find('em').text(val);

    CalculateRD();
}

function CalculateRD() {

    var monthlyInstallment = document.getElementById('regularMonthlyDeposit').value; //Loan Amount
    var tenure = document.getElementById('savingsTermmonths').value; //Tenure
    var interestRate = document.getElementById('rateofinterest').value; //Interest Rate

    var e = Math.pow((1 + interestRate / 400), tenure / 3),
        d = Math.pow((1 + interestRate / 400), (-1 / 3)),
        m = (monthlyInstallment * (e - 1)) / (1 - d);

    jQuery("#totalSavingsAmount").text("£ " + m.toFixed(2));
    //$(".n").text("Instalment amount = " + monthlyInstallment * tenure);
    jQuery("#interestEarned").text("£ " + (m - monthlyInstallment * tenure).toFixed(2));
    var arrPrincipalAmt = [4758827, 9761124, 15019348, 20546593, 26356623, 32463904, 38883646, 45631834];
    var arrInterestAmt = [2289781, 4336091, 6126474, 7647837, 8886415, 9827741, 10456607, 10757027];
    updateBarChartSeriesRD(arrPrincipalAmt, arrInterestAmt);

}
function fnRDGraph() {
    var options = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        // fill: {
        //     colors: ['#FEEAE0', '#e4e8f8'],
        //     type: "gradient",
        //     gradient: {
        //         shadeIntensity: 1,
        //         opacityFrom: 1,
        //         opacityTo: 1,
        //         stops: [100, 100, 100]
        //     }
        // },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: [],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (£)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };
    chartRD = new ApexCharts(document.querySelector("#rd-grph"), options);
    chartRD.render();
}
function updateBarChartSeriesRD(_arrPrincipalAmt, _arrInterestAmt) {
    chartRD.updateSeries([{
        name: 'Principal Amount',
        data: _arrPrincipalAmt
    }, {
        name: 'Interest Amount',
        data: _arrInterestAmt
    }]);
}
if (jQuery("#recurring-deposit-calculator").length > 0) {
    var chartRD;
    fnRDGraph();
    rangeInputsRD.forEach(input => {
        input.addEventListener('input', handleInputChangeRD)
    });
    jQuery(function () {

        if (typeof glblJsonDataCalculatorsMinMaxValues !== 'undefined') {
            if (glblJsonDataCalculatorsMinMaxValues.length > 0) {
                jQuery('.bob-loan-calculator ul li small em').each(
                    function () {
                        fnGlblBindCalcMinMaxDefaultValuesRD(this, jQuery(this).parents('li').find('.slidecontainer input').attr('id'));
                        //UpdateSliderValues();
                    }
                );
            }
        }
    });

    function fnGlblBindCalcMinMaxDefaultValuesRD(emTagElem, inputFieldId) {
        var elInd = 0;

        var akaMinMaxVar = glblJsonDataCalculatorsMinMaxValues; //Alias
        var minVal, maxVal, defaultVal;
        if (inputFieldId === "regularMonthlyDeposit") {

            minVal = akaMinMaxVar[elInd]["loanAmountMinValue"]
            maxVal = akaMinMaxVar[elInd]["loanAmountMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["loanAmountDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(numberWithCommas(minVal));
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(numberWithCommas(maxVal));

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);
        }
        else if (inputFieldId === "savingsTermmonths") {
            minVal = akaMinMaxVar[elInd]["tenureMinValue"]
            maxVal = akaMinMaxVar[elInd]["tenureMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["tenureDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);
        }
        else if (inputFieldId === "rateofinterest") {

            minVal = akaMinMaxVar[elInd]["rateOfInterestMinValue"]
            maxVal = akaMinMaxVar[elInd]["rateOfInterestMaxValue"]
            defaultVal = akaMinMaxVar[elInd]["rateOfInterestDefaultValue"];

            jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
            jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

            jQuery('#' + inputFieldId).attr("min", minVal);
            jQuery('#' + inputFieldId).attr("max", maxVal);
            jQuery('#' + inputFieldId).attr("value", defaultVal);
            jQuery(emTagElem).text(defaultVal);

        }

    }
}


/*Reccurring Calc ends*/

/*Gold Loan Calc starts*/
if (jQuery("#gold-loan-calculator").length > 0) {

    var rates_Arr = [
        /*Carat Rural & Agri products ((LTV -75 %)), Retail products (LTV -90 %)*/
        [parseInt(document.getElementById("rate24Carat").value), parseInt(document.getElementById("rate24Carat-75LTV").value), parseInt(document.getElementById("rate24Carat-90LTV").value)],
        [parseInt(document.getElementById("rate22Carat").value), parseInt(document.getElementById("rate22Carat-75LTV").value), parseInt(document.getElementById("rate22Carat-90LTV").value)],
        [21, 3526, 3746],
        [parseInt(document.getElementById("rate20Carat").value), parseInt(document.getElementById("rate20Carat-75LTV").value), parseInt(document.getElementById("rate20Carat-90LTV").value)],
        [19, 154, 184],
        [parseInt(document.getElementById("rate18Carat").value), parseInt(document.getElementById("rate18Carat-75LTV").value), parseInt(document.getElementById("rate18Carat-90LTV").value)],
    ];
    function validateg(t, e) {
        var a = t,
            r = parseInt(a.attr("min")),
            o = parseInt(a.attr("max")),
            n = a.data("index"),
            l = parseInt(e),
            i = jQuery('div.errorMsg[data-index="' + n + '"]');
        return l >= r && o >= l ? (i.removeClass("tooltip goldLoanTooltip"), a.removeClass("error"), 1) : (i.addClass("tooltip goldLoanTooltip"), a.addClass("error"), 0);
    }
    function isNumberKey(t) {
        return 0 != t.which && 8 != t.which && (t.which < 48 || t.which > 57) ? !1 : void 0;
    }
    function calculateRatePerGram(t, e) {
        for (var a = 0; a <= rates_Arr.length - 1; a++) if (rates_Arr[a][0] == e) return rates_Arr[a][t];
    }
    function NumberFormat(t) {
        (t = t.toString().replace(/[,]+/gi, "")), (t = t.toString().replace(/Rs./gi, ""));
        var r = "";
        t.indexOf(".") > 0 && (r = t.substring(t.indexOf("."), t.length)), (t = Math.floor(t)), (t = t.toString());
        var n = t.substring(t.length - 3),
            e = t.substring(0, t.length - 3);
        "" != e && (n = "," + n);
        return jQuery.trim(e.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + n + r);

    }
    function calculateLoneAmt() {
        (articles_Arr = []), (caret_Arr = []), (weights_Arr = []), (LoneAmt_Arr = []), (chart_Arr = []), (chartlabelArr = []), (caret = 0), (tenure = 0), (ratePerGram = 0), (weight = 0), (loneAmt = 0), (totalLoneAmt = 0);
        for (var t = 1; t <= jQuery("#ddl_ornaments li.active").data("no"); t++)
            if (
                !isNaN(jQuery("#txtWeight" + t).val().replace(/[,|\s|Rs.|gms]+/gi, "")) && "" != jQuery("#txtWeight" + t).val()) {

                (tenure = jQuery('input[name="radioTenure"]:checked').val());
                /*console.log("MyCode-Tenure" + tenure);
                  console.log("t value" + t);*/

                (caret = jQuery("#ddlCarat" + t + " li.active").data("no"));

                /*console.log("#ddlCarat" + t + " li.active");
                console.log("MyCode-carat===>>>>>>>" + caret);*/

                (weight = jQuery("#txtWeight" + t).val().replace(/[,|\s|Rs.|gms]+/gi, ""));
                /*  console.log("MyCode-weight" + weight);*/

                "0" != jQuery("#ddlCarat" + t + " li.active").data("no") ? (ratePerGram = calculateRatePerGram(tenure, caret)) : (ratePerGram = 0);

                var e = Math.round(weight * ratePerGram);
                if (((loneAmt = NumberFormat(Math.round(weight * ratePerGram))), (totalLoneAmt += Math.round(weight * ratePerGram)), totalLoneAmt > 15e5)) {
                    jQuery(".outputResult").show(),
                        jQuery(".message").show(),
                        jQuery(".message").html("<b>Note: </b>Ornaments Value is Rs " + NumberFormat(totalLoneAmt) + " but allowable loan amount is Rs. 15 Lakh."),
                        jQuery("#spnLoanValue" + t).html("Rs. " + loneAmt),
                        jQuery("#hdnLoanValue" + t).val(loneAmt),
                        jQuery("#spnTotalLone").html("Rs. 15,00,000"),
                        jQuery("#hdnTotalLone").val(totalLoneAmt),
                        articles_Arr.push(t),
                        caret_Arr.push(caret),
                        weights_Arr.push(weight),
                        LoneAmt_Arr.push(loneAmt);
                    chartlabelArr.push("Ornament " + t);
                    chart_Arr.push(e);
                } else if (totalLoneAmt < 1e1)
                    jQuery(".message").show(),
                        jQuery(".message").html("<b>Note: </b>Minimum Loan amount should be Rs. 10,000."),
                        jQuery("#spnLoanValue" + t).html("Rs. " + loneAmt),
                        jQuery("#hdnLoanValue" + t).val(loneAmt),
                        jQuery(".outputResult").hide(),
                        jQuery("#hdnTotalLone").val(totalLoneAmt);
                else {
                    jQuery(".outputResult").show(),
                        jQuery(".message").hide(),
                        jQuery("#spnLoanValue" + t).html("Rs. " + loneAmt),
                        jQuery("#hdnLoanValue" + t).val(loneAmt),
                        jQuery("#spnTotalLone").html("Rs. " + NumberFormat(totalLoneAmt)),
                        jQuery("#hdnTotalLone").val(totalLoneAmt),
                        articles_Arr.push(t),
                        caret_Arr.push(caret),
                        weights_Arr.push(weight),
                        LoneAmt_Arr.push(loneAmt);

                    chartlabelArr.push("Ornament " + t);
                    chart_Arr.push(e);
                }
            }

        /*   console.log(JSON.stringify(chart_Arr));*/
        if (chart_Arr.length > 0) {
            jQuery('.bob-gold-grph-div #gold-grph').slideDown();
            updateChartSeries(chart_Arr, chartlabelArr);
        }
    }
    var articles_Arr = [],
        caret_Arr = [],
        weights_Arr = [],
        LoneAmt_Arr = [],
        chart_Arr = [];
    jQuery(".sliderText").blur(function () {

        var t = jQuery(this),
            e = t.val().replace(/[,|\s|Rs.|gms]+/gi, ""),
            a = e;
        if ((t.val(NumberFormat(a) + " Gms"), 1 == validateg(t, e))) {
            jQuery("#" + t.attr("name")).val(e);
            t.data("index");

            calculateLoneAmt();
        }
    });
    jQuery(".sliderText").on("focus", function () {

        var t = jQuery(this);
        t.val(t.val().replace(/[,|\s|Rs.|Gms]+/gi, ""));


    });
    jQuery("#ddl_ornaments li").click(function () {
        for (var t = jQuery(this).data("no"), e = 1; 4 >= e; e++) {
            (document.getElementById("txtWeight" + e).value = "");
            (document.getElementById("hdnWeight" + e).value = "");
            (document.getElementById("spnLoanValue" + e).innerHTML = "");
            (document.getElementById("hdnLoanValue" + e).value = "");
            jQuery("#ddlCarat" + e).val(0);
        }
        jQuery("#ddlNoofOrnaments").val(jQuery(this).data("no"));

        jQuery(".bob-select-data-div").show();
        jQuery(".tblGoldLoan").show();
        jQuery(".notshow").hide();
        for (var i = 1; t >= i; i++) {
            jQuery(".article" + i).show();
        }
        calculateLoneAmt();
        0 == t && (jQuery(".bob-select-data-div").show(), jQuery(".tblGoldLoan").hide(), jQuery("#spnTotalLone").html("Rs. 0"));

        jQuery("#ddlNoofOrnaments").val(jQuery(this).data("no"));

    });

    jQuery(".ddlGoldLoan li").click(function () {
        /*  console.log("jQuery(this).val())=====" + jQuery(this).data("no"));*/
        calculateLoneAmt();
    });

    jQuery('input[name="radioTenure"]').change(function () {

        calculateLoneAmt();
    });
    jQuery(document).ready(function () {
        jQuery('input[type="text"]').bind("cut copy paste", function (t) {
            t.preventDefault();
        });
        jQuery("#Other,#Select1").on("change", function () {
            return jQuery(this).val().indexOf("http") > -1 ? (window.open(jQuery(this).val(), "_blank"), !1) : void 0;
        });
        jQuery(".nav-header .menu li").on("click", function () {
            var t = jQuery(this).children("a:first");
            if (jQuery(document).width() < 980) {
                var e = t.prop("href");
                window.open(e);
            }
        });
        jQuery(".tblGoldLoan").hide();
        jQuery("#spnTotalLone").html("Rs. 0");
        calculateLoneAmt();
    });


    var options1 = {
        series: [24000, 25000, 27000],
        labels: ['Ornament 1', 'Ornament 2', 'Ornament 3'],
        chart: {
            height: 250,
            type: 'donut',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            width: 0
        },
        colors: ['#1A2C71', '#C7211C', '#FFB205', '#F26522'],
        fill: {
            opacity: 1,
            type: 'solid',
            gradient: {
                shade: 'dark',
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%',
                    expandOnClick: false
                }
            }
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                return (
                    '<div class="arrow_box">' +
                    "<span>" +
                    w.globals.labels[seriesIndex] +
                    ": " +
                    "Loan Amount Rs." + series[seriesIndex] +
                    "</span>" +
                    "</div>"

                );
            }
        }

    };
    var chart = new ApexCharts(document.querySelector("#gold-grph"), options1);
    chart.render();

    function updateChartSeries(chartArray, chartLabelArr) {
        chart.updateOptions({
            labels: chartLabelArr
        });
        chart.updateSeries(chartArray);
    }
}
/*Gold Loan Calc ends*/

/* car loan start here */
if (jQuery('#clec-grph').length > 0) {
    var optionsCar = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#clec-grph"), optionsCar);
    chart.render();
}
/* car loan end here */

/* education loan start here */
if (jQuery('#elec-grph').length > 0) {
    var optionsEdu = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#elec-grph"), optionsEdu);
    chart.render();
}
/* education loan end here */

/* home loan eligibility start here */
if (jQuery('#helc-grph').length > 0) {
    var optionsHLE = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#helc-grph"), optionsHLE);
    chart.render();
}
/* home loan eligibility end here */

/* mudra loan start here */
if (jQuery('#mlec-grph').length > 0) {
    var optionsMudra = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#mlec-grph"), optionsMudra);
    chart.render();
}
/* mudra loan end here */

/* personal loan emi start here */
if (jQuery('#plec-grph').length > 0) {
    var optionsPLE = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#plec-grph"), optionsPLE);
    chart.render();
}
/* personal loan emi end here */

/* ipo start here */
if (jQuery('#pilc-grph').length > 0) {
    var optionsIPO = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#pilc-grph"), optionsIPO);
    chart.render();
}
/* ipo end here */
/* recurring start here */
if (jQuery('#pbl-grph').length > 0) {
    var optionsRecc = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#pbl-grph"), optionsRecc);
    chart.render();
}
/* recurring end here */

/* two wheeler start here */
if (jQuery('#tlec-grph').length > 0) {
    var optionstwo = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#tlec-grph"), optionstwo);
    chart.render();
}
/* two wheeler end here */

/* mortgage start here */
if (jQuery('#barmlec-grph').length > 0) {
    var optionsMortgage = {
        series: [{
            name: 'Principal Amount',
            data: [0, 5, 10, 15, 20]
        }, {
            name: 'Interest Amount',
            data: [0, 2, 4, 6, 8]
        }],

        chart: {
            height: 275,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        colors: ['#F26522', '#162b75'],
        markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
                size: 6
            },
            colors: ['#F26522', '#162b75']
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -10,
        },
        xaxis: {
            categories: ["0", "5", "10", "15", "20"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: '#707070',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 400,
            },
            title: {
                text: 'Years Elapsed',
                offsetY: 6,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                },
            },
            title: {
                text: 'Loan Paid (₹)',
                offsetX: -20,
                style: {
                    color: '#707070',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 700,
                },
            },
            labels: {
                formatter: function (value) {
                    return value + "M";
                }
            },
        },

    };

    var chart = new ApexCharts(document.querySelector("#barmlec-grph"), optionsMortgage);
    chart.render();
}
/* mortgage end here */

/* Export In Excel */
function fnExportinExcel(tableId) {
    var tabText = "<table border='2px'><tr bgcolor='#87AFC6'>";

    var tab = document.getElementById(tableId); // id of table

    for (var j = 0; j < tab.rows.length; j++) {
        tabText = tabText + tab.rows[j].innerHTML + "</tr>";
    }

    tabText = tabText + "</table>";
    tabText = tabText.replace(/<A[^>]*>|<\/A>/g, "");
    tabText = tabText.replace(/<img[^>]*>/gi, "");
    tabText = tabText.replace(/<input[^>]*>|<\/input>/gi, "");

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // in case Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tabText);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "calculation-break-up.xls");
    }
    else
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tabText));

    return (sa);
}
jQuery(".bob-comman-btn.bob-comman-with-outline-btn:contains('Download Calculation Breakup')").on('click', function () { fnExportinExcel('calculateHomeLoan') });

/* Export In Excel */

/* Calc Min Max */

jQuery(function () {
    if (typeof glblJsonDataCalculatorsMinMaxValues !== 'undefined') {
        if (glblJsonDataCalculatorsMinMaxValues.length > 0) {
            jQuery('.bob-loan-calculator ul li small em').each(
                function () {
                    fnGlblBindCalcMinMaxDefaultValues(this, jQuery(this).parents('li').find('.slidecontainer input').attr('id'));
                    //UpdateSliderValues();
                }
            );
        }
    }
});

function fnGlblBindCalcMinMaxDefaultValues(emTagElem, inputFieldId) {
    var elInd = 0;

    var akaMinMaxVar = glblJsonDataCalculatorsMinMaxValues; //Alias
    var minVal, maxVal, defaultVal;
    if (inputFieldId === "amt_id") {

        minVal = akaMinMaxVar[elInd]["loanAmountMinValue"]
        maxVal = akaMinMaxVar[elInd]["loanAmountMaxValue"]
        defaultVal = akaMinMaxVar[elInd]["loanAmountDefaultValue"];
        //jQuery('.slidecontainer div.bob-min-div').length

        jQuery(emTagElem).parents('li').find('.bob-min-div').text(numberWithCommas(minVal));
        jQuery(emTagElem).parents('li').find('.bob-max-div').text(numberWithCommas(maxVal));

        jQuery('#' + inputFieldId).attr("min", minVal);
        jQuery('#' + inputFieldId).attr("max", maxVal);
        jQuery('#' + inputFieldId).attr("value", defaultVal);
        jQuery(emTagElem).text(defaultVal);
    }
    else if (inputFieldId === "month_id") {
        minVal = akaMinMaxVar[elInd]["tenureMinValue"]
        maxVal = akaMinMaxVar[elInd]["tenureMaxValue"]
        defaultVal = akaMinMaxVar[elInd]["tenureDefaultValue"];

        jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
        jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

        jQuery('#' + inputFieldId).attr("min", minVal);
        jQuery('#' + inputFieldId).attr("max", maxVal);
        jQuery('#' + inputFieldId).attr("value", defaultVal);
        jQuery(emTagElem).text(defaultVal);
    }
    else if (inputFieldId === "rates_id") {

        minVal = akaMinMaxVar[elInd]["rateOfInterestMinValue"]
        maxVal = akaMinMaxVar[elInd]["rateOfInterestMaxValue"]
        defaultVal = akaMinMaxVar[elInd]["rateOfInterestDefaultValue"];

        jQuery(emTagElem).parents('li').find('.bob-min-div').text(minVal);
        jQuery(emTagElem).parents('li').find('.bob-max-div').text(maxVal);

        jQuery('#' + inputFieldId).attr("min", minVal);
        jQuery('#' + inputFieldId).attr("max", maxVal);
        jQuery('#' + inputFieldId).attr("value", defaultVal);
        jQuery(emTagElem).text(defaultVal);

    }

}

function fnNumDifferentiation(value) {
    var val = Math.abs(value)
    if (val >= 10000000) {
        val = (val / 10000000) + 'Cr';
    } else if (val >= 100000) {
        val = (val / 100000) + 'L';
    }
    return val;
}


function numberWithCommas(x) {
    if (jQuery("#currType li.active").attr("value") == 'GBP') {
        return "£ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (jQuery("#currType li.active").attr("value") == 'USD') {
        return "$ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "€ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



}
/* Calc Min Max */