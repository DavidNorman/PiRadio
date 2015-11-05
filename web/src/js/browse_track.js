function TrackController($scope, $routeParams, slimClient) {

  $scope.client = slimClient;

  $scope.init = function() {
    var track = $routeParams.track;
    if (track != "") {
      slimClient.songinfo("track_id:" + track).
        success(function(result) {

         var r = {};
         result['songinfo_loop'].forEach( function(e) {
           var keys = Object.keys(e);
           keys.forEach( function(k) {
             r[k] = e[k];
           });
          });

          $scope.track = r;
        });
    }
  };

}

