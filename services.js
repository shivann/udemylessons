weatherApp.service('cityService', function () {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function () {

        var weatherApi =
            $resource(

                "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1"

            );


        // $scope.weatherResult = $scope.weatherApi.get({cnt:$scope.days});
        return weatherApi.get();

    }


}]);