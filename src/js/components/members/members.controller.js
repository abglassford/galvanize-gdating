(function() {
  'use strict';

  angular
    .module('gDating.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['gService'];

  function membersController (gService) {
    const vm = this;

    vm.memberList = []
    gService.getApi()
    .then((data) => {
      vm.memberList = data.data.data
      console.log(vm.memberList);
      return data
    })


    this.test = 'THIS IS MEMBERS';
  }
}());
