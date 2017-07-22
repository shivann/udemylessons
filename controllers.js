weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', 
    [   '$scope', '$routeParams', '$location', 'cityService', 'weatherService', function (
         $scope, $routeParams, $location, cityService, weatherService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    
    $scope.convertToCelsius = function (kelvin) {

        return Math.round(300 - 273.15);

    }

    $scope.weatherResult = weatherService.Getweather();

    $scope.convertToDate = function (date) {

        return new Date(date * 1000);

    }

    $scope.submit = function() {
        $location.path("/forecast");
    };

}]);