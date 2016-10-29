(function() {

  'use strict';

  angular
    .module('gDating.config', [])
    .config(appConfig)
    .run(routeStart);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.html',
      controller: 'mainController',
      controllerAs: 'vm',
      access: true
    })
    .when('/signup', {
      templateUrl: 'js/components/signup/signup.html',
      controller: 'signupController',
      controllerAs: 'vm',
      access: true
    })
    .when('/login', {
      templateUrl: 'js/components/login/login.html',
      controller: 'loginController',
      controllerAs: 'vm',
      access: true
    })
    .when('/members', {
      templateUrl: 'js/components/members/members.html',
      controller: 'membersController',
      controllerAs: 'vm',
      access: false
    })
    .otherwise('/');
  }

  function routeStart ($rootScope, $location, $route, gService) {
    $rootScope.$on('$routeChangeStart', (event, next, current) => {
      if (!next.access) {
        if (!localStorage.getItem('token')) {
            $location.path('/login')
        }
      }
    })
  }

})();
