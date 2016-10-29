(function() {
  'use strict';

  angular
    .module('gDating.services', [])
    .service('gService', gService);

    gService.$inject = ['$http'];

    function gService ($http) {
      const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';

      this.getApi = () => {
        return $http.get(baseUrl + 'members?limit=20')
      };






      }



}());
