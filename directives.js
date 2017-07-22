weatherApp.directive("weatherReport", function() {

    return {
        restrict: 'E',
        tenplateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=", 
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }

});