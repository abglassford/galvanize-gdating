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
    gService.getSmallApi()
    .then((members) => {
      vm.members = members.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    vm.logOut = () => {
      localStorage.removeItem('token')
      $window.location.reload()
      $location.path('/')

    }


  }
})();
