'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, businessApiService) {
      $scope.businessApiService = businessApiService;

      businessApiService.getData().then(function() {
        $scope.data = businessApiService.data;
        console.log($scope.data);
      });
});