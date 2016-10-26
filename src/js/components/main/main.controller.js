(function() {

  'use strict';

  angular
    .module('gDating.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['gService'];

  function mainController(gService) {
    /*jshint validthis: true */
    console.log(gService.test);
    this.greeting = 'Hello World!';
  }

})();
