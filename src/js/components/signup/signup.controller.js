(function() {
  'use strict';

  angular
    .module('gDating.components.signup', [])
    .controller('signupController', signupController)

    signupController.$inject = []

    function signupController () {
      this.test = 'THIS IS SIGNUP'
    }
}());
