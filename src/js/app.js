// sample angular code

(function() {

  'use strict';

  angular
    .module('gDating', [
      'ngRoute',
      'gDating.config',
      'gDating.services',
      'gDating.components.main',
      'gDating.components.signup',
      'gDating.components.login',
      'gDating.components.members',

    ]);

})();
