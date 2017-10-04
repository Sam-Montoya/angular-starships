angular.module('starships').controller('shipCtrl', function ($scope, shipSrvc, $stateParams) {

  shipSrvc.getShipById($stateParams.id).then(ship => {
    $scope.ship = ship;
  }).catch(err => {
    $scope.errorMessage = err;
  })
})
