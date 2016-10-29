(function() {
  'use strict';

  angular
    .module('gDating.components.signup', [])
    .controller('signupController', signupController);

  signupController.$inject = ['$window', 'gService'];

  function signupController ($window, gService) {
    const vm = this;

    vm.register = () => {
      gService.register(vm.new)
      .then((user) => {
        localStorage.setItem('token', user.data.data.token)
        $window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      vm.new = {}
    }
  }
}());
