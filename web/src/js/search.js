function SearchController($scope, $location, slimClient) {

  $scope.client = slimClient;
  $scope.searchText = "";
  $scope.albums = [];
  $scope.artists = [];
  $scope.tracks = [];

  $scope.add_track = slimClient.add_track;
  $scope.add_album = slimClient.add_album;
  $scope.add_artist = slimClient.add_artist;

  $scope.submitSearch = function() {
    if ($scope.searchText != "") {
      slimClient.tracks( "search:" + $scope.searchText ).
        success(function(result) {
          $scope.tracks = result['titles_loop'];
        });
      slimClient.albums( "search:" + $scope.searchText ).
        success(function(result) {
          $scope.albums = result['albums_loop'];
        });
      slimClient.artists( "search:" + $scope.searchText ).
        success(function(result) {
          $scope.artists = result['artists_loop'];
        });
    }
  };

  $scope.$watch("searchText", function(val) {
    if (!val || val.length == 0) {
      $location.search('search', null);
    } else {
      $location.search('search', val);
    }
  });

  $scope.init = function() {
    if ($location.search().search) {
        $scope.searchText = $location.search().search;
        $scope.submitSearch();
    } else {
        $scope.searchText = "";
    }
  };

}

