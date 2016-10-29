(function() {
  'use strict';

  angular
    .module('gDating.components.signup', [])
    .controller('signupController', signupController);

  signupController.$inject = ['gService'];

  function signupController (gService) {
    const vm = this;

    vm.register = () => {
      gService.register(vm.new)
      .then((user) => {
        localStorage.setItem('token', user.data.token)
      })
      .catch((err) => {
        console.log(err);
      })
      vm.new = {}
    }
  }
}());
