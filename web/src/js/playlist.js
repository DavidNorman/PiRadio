function PlaylistController($scope, slimClient) {

  $scope.init = function() {
    slimClient.player_status().
      success(function(result) {
        $scope.data = result;
      });    
  };
}

