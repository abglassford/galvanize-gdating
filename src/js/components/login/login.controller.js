(function() {
  'use strict';

  angular
    .module('gDating.components.login', [])
    .controller('loginController', loginController)

    loginController.$inject = []

    function loginController () {
      this.test = "THIS IS LOGIN"
    }
}());
