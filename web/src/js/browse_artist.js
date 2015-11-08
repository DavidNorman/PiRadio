function ArtistController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;

  $scope.add_track = slimClient.add_track;
  $scope.add_album = slimClient.add_album;
  $scope.add_artist = slimClient.add_artist;

  $scope.init = function() {
    var artist = $routeParams.artist;
    if (artist != "") {
      slimClient.albums("artist_id:" + artist).
        success(function(result) {
          $scope.albums = result['albums_loop'];
        });
      slimClient.artists("artist_id:" + artist).
        success(function(result) {
          $scope.artist_info = result['artists_loop'][0];
        });
    }
  };

}

