function ArtistController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;

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

