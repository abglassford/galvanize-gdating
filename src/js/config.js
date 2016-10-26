(function() {

  'use strict';

  angular
    .module('gDating.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.html',
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when('/signup', {
      templateUrl: 'js/components/signup/signup.html',
      controller: 'signupController',
      controllerAs: 'vm'
    })
    .when('/login', {
      templateUrl: 'js/components/login/login.html',
      controller: 'loginController',
      controllerAs: 'vm'
    })
    .when('/members', {
      templateUrl: 'js/components/members/members.html',
      controller: 'membersController',
      controllerAs: 'vm'
    })
    .otherwise('/');
  }

})();
