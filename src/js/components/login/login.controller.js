(function() {
  'use strict';

  angular
    .module('gDating.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['gService'];

  function loginController (gService) {
    const vm = this;

    vm.login = () => {
      gService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token)
      })
      .catch((err) => {
        console.log(err);
      })
      vm.user = {}
    }


  }
}());
