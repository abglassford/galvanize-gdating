(function() {

  'use strict';

  angular
    .module('gDating.components.main', ['ngAnimate'])
    .controller('mainController', mainController);

  mainController.$inject = ['$window', '$location', 'gService'];

  function mainController($window, $location, gService) {
    const vm = this
    vm.members = []
    vm.features = {}
    gService.getApi()
    .then((members) => {
      vm.members = members.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    vm.logOut = () => {
      localStorage.removeItem('token')
      $location.path('/')
      $window.location.reload()
    }


  }
})();
