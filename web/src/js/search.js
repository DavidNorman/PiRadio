function SearchController($scope, slimClient) {

  $scope.client = slimClient;
  $scope.searchText = "";
  $scope.albums = [];
  $scope.artists = [];
  $scope.tracks = [];

  $scope.submitSearch = function() {
    if ($scope.searchText != "") {
      slimClient.search( $scope.searchText ).
        success(function(result) {

          res = result['result'];

          $scope.albums = res['albums_loop'];
          $scope.tracks = res['tracks_loop'];
          $scope.artists = res['contributors_loop'];
        }).
        error(function(result) {
          alert("Failed: " + result);
        });
    }
  };

  $scope.init = function() {
  };

}

