angular.module('starships', ['ui.router']);

angular.module('starships').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    template: 'Welcome to the Home Screen'
  })
    .state('ships', {
      url: '/starships',
      templateUrl: '/app/views/ships/ships.html',
      controller: 'shipsCtrl'
    })
    .state('ship', {
      url: '/starships/:id',
      templateUrl: '/app/views/ship/ship.html',
      controller: 'shipCtrl'
    })

  $urlRouterProvider.otherwise('/home');
});