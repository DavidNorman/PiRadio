function ArtistController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;
  $scope.tracks = [];

  $scope.init = function() {
    var artist = $routeParams.artist;
    if (artist != "") {
      slimClient.albums_for_artist(artist).
        success(function(result) {

          res = result['result'];

          $scope.albums = res['albums_loop'];
        }).
        error(function(result) {
          alert("Failed: " + result);
        });
    }
  };

}

