angular.module('starships').service('shipSrvc', function ($http) {
  this.ships = ['X-Wing', 'T-Fighter', 'Millenial Falcon', 'DeathStar'];

  this.getShips = function () {
    return $http.get('https://swapi.co/api/starships/').then(response => {
      return response.data.results.map(this.getIdForShip);
    });
  }

  this.getIdForShip = function (ship) {
    let urlArray = ship.url.split('/');
    ship.id = urlArray[5];
    return ship;
  }

  this.getShipById = function (id) {
    return $http.get(`https://swapi.co/api/starships/${id}`).then(response => {
      return response.data;
    }).catch(err => {
      //$state.go('home')
      console.log(err);
      throw new Error('No Ship Found')
    })
  }
});