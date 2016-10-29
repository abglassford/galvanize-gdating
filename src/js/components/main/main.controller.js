(function() {

  'use strict';

  angular
    .module('gDating.components.main', ['ngAnimate'])
    .controller('mainController', mainController);

  mainController.$inject = ['gService', '$interval'];

  function mainController(gService, $interval) {
    const vm = this
    vm.members = []
    vm.features = {}
    gService.getApi()
    .then((members) => {
      vm.members = members.data.data
      console.log(vm.members);
    })
    .catch((err) => {
      console.log(err);
    })


  }
})();
