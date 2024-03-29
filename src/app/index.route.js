(function() {
  'use strict';

  angular
    .module('test')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('entry', {
        url: '/entry',
        templateUrl: 'app/entry/entry.html',
        controller: 'EntryController',
        controllerAs: 'entry'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
