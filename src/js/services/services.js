(function() {
  'use strict';

  angular
    .module('gDating.services', [])
    .service('gService', gService);

    gService.$inject = ['$http'];

    function gService ($http) {
      const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';

      this.loggedInUser = {}

      this.getUserStatus = () => {
        if (!localStorage.token) {
          return false
        } else {
          return true
        }
      }
      this.getSmallApi = () => {
        return $http.get(`${baseUrl}members?limit=20`)
      }
      this.getApi = () => {
        return $http.get(`${baseUrl}members`)
      };

      this.login = function(user) {
        return $http({
          method: 'POST',
          url: baseUrl + 'auth/login',
          data: user,
          headers: {'Content-Type': 'application/json'}
        });
      };
      this.register = function (user) {
      return $http({
        method: 'POST',
        url: baseUrl + 'auth/register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    }






  }
}());
