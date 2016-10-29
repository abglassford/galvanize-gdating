// sample angular code

(function() {

  'use strict';


  angular
    .module('gDating', [
      'ngAnimate',
      'ngRoute',
      'ui.materialize',
      'gDating.config',
      'gDating.services',
      'gDating.components.main',
      'gDating.components.signup',
      'gDating.components.login',
      'gDating.components.members',
    ]);

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.collapsible').collapsible();

})();
