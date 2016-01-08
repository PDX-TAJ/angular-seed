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
      var businessApiService = {},
          naicsCode = '72251',
          businessName = 'Wrapmaster Lisa';

      businessApiService.selectBar = function() {
        naicsCode = '72241';
        console.log(naicsCode);
        businessApiService.naicsCode = naicsCode;
      };

      businessApiService.selectRest = function() {
        naicsCode = '72251';
        console.log(naicsCode);
        businessApiService.naicsCode = naicsCode;
      };

      businessApiService.selectCart = function() {
        naicsCode = '72233';
        console.log(naicsCode);
        businessApiService.naicsCode = naicsCode;
      };

      businessApiService.getTheData = function() {
        return $http.get('restaurants'.json)
            .success(function(response){
              businessApiService.jsondata = angular.fromJson(response);
              businessApiService.jsondata = businessApiService.jsondata.naicsCode;
              console.log(businessApiService.jsondata.naicsCode);
            });
/*
        return $http({
          method: 'GET',
          url: 'http://api.civicapps.org/business-licenses/category/'+naicsCode+'?count=20',
        }).then(function successCallback(response) {
          businessApiService.data = response.data.results;
          console.log(businessApiService.data);
        }, function errorCallback() {
          console.log("error in http request for civics app data");
        });*/
      };

      businessApiService.getYelpData = function() {
        return $http({
          method: 'GET',
          url: 'http://localhost:3000/?term='+businessName
        }).then(function successCallback(response) {
          businessApiService.yelpData = response.data;
        }, function errorCallback() {
          console.log("Error in http request for yelp data");
        });
      };

      businessApiService.getNax = function() {
        return naicsCode;
      };

      return businessApiService;
});