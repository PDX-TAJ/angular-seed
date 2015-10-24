'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $location, businessApiService) {

      $scope.businessApiService = businessApiService;

/*      businessApiService.getData().then(function() {
        $scope.data = businessApiService.data;
        console.log($scope.data);
      });*/
      $scope.goToNext = function() {
        $location.path('/view2');
      }
});