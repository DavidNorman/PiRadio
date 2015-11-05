function TrackController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;

  $scope.init = function() {
    var track = $routeParams.track;
    if (track != "") {
      slimClient.songinfo("track_id:" + track).
        success(function(result) {
          $scope.track = result['songinfo_loop'];
        });
    }
  };

}

