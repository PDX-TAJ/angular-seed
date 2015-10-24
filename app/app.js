'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp.services', []).
    factory('businessApiService', function($http) {
      var businessApiService = {};
      //do they get here
      //businessApiService.whateverDataIsReturnedGoesHere
      /*businessApiService.getData = function(){

      };
      businessApiService.newVariable = whateverYouwWant;*/

      //return the entire object. Access the things in the controllers u use them in.
      return businessApiService;
});