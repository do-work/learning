function () {
    'use strict';
    var $;
    var n = 0;
    init();

    function init(n) {
        if (typeof jQuery !== 'undefined') {
            $ = jQuery;
            bindToAjax();
        } else if (n < 20) {
            n++;
            setTimeout(init, 500); // soooo... .we loop waiting for jQuery?

            // this function should be wrapped in a iife

        }
    }

    function bindToAjax() {
        // this kind of stuff is hard to trace, better to use a callback function
        // function apiCall(obj, callback) <- if it should be called everywhere, put the following contents in the bind in the apiCall() function
        $(document).bind('ajaxComplete', function (evt, jqXhr, opts) {
            var responseData = jqXhr.responseJSON || jqXhr.responseXML || jqXhr.responseText || '';
            responseData = JSON.parse(responseData); //contains confirm
            if (responseData.confirm) { // should be if !responseData.hasOwnProperty('confirm){ report error }
                // then you don't need another nested block if you return first
                dataLayer.push({
                    'transactionId': responseData.confirm,
                    'transactionTotal': 0.00,
                    'transactionProducts': [{
                        // good practice to hide weird munging with functions:
                        // ie: getSku(document) { return document.getElementsByTagName("b")[1].textContent + "-0" }
                        // though i bet bobby would disagree
                        'sku': document.getElementsByTagName("b")[1].textContent + "-0",
                        'name': document.getElementsByTagName("td")[3].textContent,
                        'category': 'Greens Fee' + ' ' + document.getElementsByTagName("b")[0].textContent + ' ' + document.getElementsByTagName("td")[7].textContent,
                        'price': 0.00,
                        'quantity': document.getElementsByTagName("td")[7].textContent.charAt(0)
                    }],
                    'event': '121AnalyticsTrigger'
                });
            }
        });
    }
}


// this function should be wrapped in a iife
(function($){
    // executes after page loads
    // jquery is passed in
    // we've isolated scope
    $.doSomething('forDavid')
})($);