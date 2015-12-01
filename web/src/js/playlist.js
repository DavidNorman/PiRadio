function PlaylistController($scope, $location, slimClient) {

  $scope.playlist_remove = function(id) {
    slimClient.playlist_remove(id).
      success(function(result) {
        location.reload();
      });
  };

  $scope.init = function() {
    slimClient.player_status().
      success(function(result) {
        $scope.data = result;
      });    
  };
}

