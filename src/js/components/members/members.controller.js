(function() {
  'use strict';

  angular
    .module('gDating.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = [];

  function membersController () {
    this.test = 'THIS IS MEMBERS';
  }
}());
