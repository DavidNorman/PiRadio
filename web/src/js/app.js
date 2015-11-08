var app = angular.module('piradio', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/search', {templateUrl: 'html/search.html', controller: SearchController, reloadOnSearch: false}).
            when('/local/album/:album', {templateUrl: 'html/browse_album.html', controller: AlbumController, reloadOnSearch: true}).
            when('/local/artist/:artist', {templateUrl: 'html/browse_artist.html', controller: ArtistController, reloadOnSearch: true}).
            when('/local/track/:track', {templateUrl: 'html/browse_track.html', controller: TrackController, reloadOnSearch: true}).
            when('/playlist', {templateUrl: 'html/playlist.html', controller: PlaylistController, reloadOnSearch: false}).
            otherwise({redirectTo: '/search'});
  }])
  .service('slimClient', SlimClient)
  .factory('serverStatus', ServerStatus)
  .controller('ServerStatusController', function($scope, serverStatus) {
    $scope.serverStatus = serverStatus;
  })
  .controller('TransportController', function($scope, slimClient) {
    $scope.ctrl_fb = slimClient.ctrl_fb;
    $scope.ctrl_play = slimClient.ctrl_play;
    $scope.ctrl_pause = slimClient.ctrl_pause;
    $scope.ctrl_ff = slimClient.ctrl_ff;
  });

