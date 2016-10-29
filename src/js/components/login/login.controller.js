(function() {
  'use strict';

  angular
    .module('gDating.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$location', '$window', 'gService'];

  function loginController ($rootScope, $location, $window, gService) {
    const vm = this;
    vm.loggedIn = $rootScope.loggedIn
    vm.login = () => {
      gService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.data.token)
        $location.path('/members')
        $window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      vm.user = {}
    }


  }
}());
