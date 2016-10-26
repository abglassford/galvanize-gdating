(function() {

  'use strict';

  angular
    .module('gDating.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = [];

  function mainController() {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
