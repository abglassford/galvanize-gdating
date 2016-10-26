(function() {
  'use strict';

  angular
    .module('gDating.services', [])
    .service('gService', gService)

    gService.$inject = []

    function gService () {
      this.test = 'THIS IS GSERVICE!'
    }
}());
