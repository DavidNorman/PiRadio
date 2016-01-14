function SearchController($scope, $location, slimClient) {

  $scope.client = slimClient;
  $scope.searchText = "";
  $scope.albums = [];
  $scope.artists = [];
  $scope.tracks = [];
  $scope.spotify_artists = [];
  $scope.spotify_albums = [];
  $scope.spotify_tracks = [];

  $scope.add_track = slimClient.add_track;
  $scope.add_album = slimClient.add_album;
  $scope.add_artist = slimClient.add_artist;
  $scope.add_spotify_track = slimClient.add_spotify_track;
  $scope.add_spotify_album = slimClient.add_spotify_album;
  $scope.add_spotify_artist = slimClient.add_spotify_artist;

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
      slimClient.spotify_search( "search:" + $scope.searchText ).
        success(function(result) {
          result['loop_loop'].forEach(function(e, i) {
            if (e.name.startsWith("Album")) {
              slimClient.spotify_fetch(e.id).
                success(function(result) {
                  $scope.spotify_albums = result['loop_loop'];
                });
            }
            if (e.name.startsWith("Artist")) {
              slimClient.spotify_fetch(e.id).
                success(function(result) {
                  $scope.spotify_artists = result['loop_loop'];
                });
            }
            if (e.name.startsWith("Track")) {
              slimClient.spotify_fetch(e.id).
                success(function(result) {
                  $scope.spotify_tracks = result['loop_loop'];
                });
            }
          });
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

