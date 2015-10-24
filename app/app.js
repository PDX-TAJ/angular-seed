'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp.services', []).
    factory('businessApiService', function($http) {
      var businessApiService = {};
      var naicsCode = '72251';

      businessApiService.getData = function(){

        return $http({
          method: 'GET',
          url: 'http://api.civicapps.org/business-licenses/category/'+naicsCode+'?count=20',
        }).then(function successCallback(response) {
          businessApiService.data = response.data.results;
          console.log(businessApiService.data);
        }, function errorCallback() {
          console.log("error in http request");
        });

      };

      return businessApiService;
});;