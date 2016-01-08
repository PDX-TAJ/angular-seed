'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http, $window, businessApiService) {
      $scope.businessApiService = businessApiService;

/*      businessApiService.getData().then(function() {
        $scope.data = businessApiService.data;
        console.log($scope.data);
      });*/

        $http.get('restaurants.json').then(function(datas) {
            console.log(datas);
            var i = businessApiService.getNax().toString();
            console.log(i);
            $scope.data = datas.data[i];
            console.log($scope.data[i]);
        });

        $scope.openTab = function(url) {
          $window.open(url,'_blank');
        };
/*        businessApiService.getTheData().then(function() {
            $scope.jsonData = function() {
                return businessApiService.jsondata;
            }
        });*/

/*      businessApiService.getYelpData().then(function() {
        $scope.yelpData = businessApiService.yelpData;
        console.log($scope.yelpData);
      });*/
});