var app = angular.module('piradio', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/search', {templateUrl: 'html/search.html', controller: SearchController, reloadOnSearch: false}).
            when('/playlist', {templateUrl: 'html/playlist.html', controller: PlaylistController, reloadOnSearch: false}).
            otherwise({redirectTo: '/search'});
  }])
  .service('slimClient', SlimClient)
  .factory('serverStatus', ServerStatus)
  .controller('ServerStatusController', function($scope, serverStatus) {
    $scope.serverStatus = serverStatus;
  });

