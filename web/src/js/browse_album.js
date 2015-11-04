function AlbumController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;
  $scope.tracks = [];

  $scope.init = function() {
    var album = $routeParams.album;
    if (album != "") {
      slimClient.tracks_for_album(album).
        success(function(result) {

          res = result['result'];

          $scope.tracks = res['titles_loop'];
        }).
        error(function(result) {
          alert("Failed: " + result);
        });
    }
  };

}

