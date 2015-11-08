function AlbumController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;

  $scope.add_track = slimClient.add_track;
  $scope.add_album = slimClient.add_album;
  $scope.add_artist = slimClient.add_artist;

  $scope.init = function() {
    var album = $routeParams.album;
    if (album != "") {

      slimClient.albums("album_id:" + album).
        success(function(result) {
          $scope.album_info = result['albums_loop'][0];
        });

      slimClient.tracks("album_id:" + album).
        success(function(result) {
          $scope.tracks = result['titles_loop'];
        });

    }
  };

}

