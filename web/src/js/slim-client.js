function SlimClient($http, $location, serverStatus) {

    var slimRequest = function(data) {
        return $http.post("http://" + $location.host() + "/api", data).
            success(function(_, status) {
                serverStatus.available = true;
            }).
            error(function(data, status) {
                if (status == 0) {
                    serverStatus.available = false;
                }
                if (status === 401) {
                    signedOutHandler.alert(data);
                }
                // Note: other error alerts should be generated close to the logic, so behaviour can be tailored to the situation.
            });
    };

    this.songinfo = function(search) {
      data = [ "songinfo", 0, 100, search, "tags:adelsty" ];
      return slimRequest(data);
    };

    this.tracks = function(search) {
      data = [ "titles", 0, 100, search, "sort:albumtrack", "tags:aels" ];
      return slimRequest(data);
    };

    this.albums = function(search) {
      data = [ "albums", 0, 100, search, "tags:alS" ];
      return slimRequest(data);
    };

    this.artists = function(search) {
      data = [ "artists", 0, 100, search ];
      return slimRequest(data);
    };

    this.add_track = function(id) {
      data = ["playlistcontrol", "cmd:add", "track_id:"+id];
      return slimRequest(data);
    };

    this.add_album = function(id) {
      data = ["playlistcontrol", "cmd:add", "album_id:"+id];
      return slimRequest(data);
    };

    this.add_artist = function(id) {
      data = ["playlistcontrol", "cmd:add", "artist_id:"+id];
      return slimRequest(data);
    };

    this.playlist_remove = function(track_num) {
      data = ["playlist", "delete", track_num];
      return slimRequest(data);
    };

    this.ctrl_fb = function() {
      data = ["playlist", "index", "-1"];
      return slimRequest(data);
    };

    this.ctrl_play = function() {
      data = ["play"];
      return slimRequest(data);
    };

    this.ctrl_pause = function() {
      data = ["pause", 1];
      return slimRequest(data);
    };

    this.ctrl_ff = function() {
      data = ["playlist", "index", "+1"];
      return slimRequest(data);
    };

    this.player_status = function() {
      data = ["status", 0, 100, "tags:adelsty"];
      return slimRequest(data);
    };

    this.spotify_search = function(search) {
      data = ["spotify", "items", 0, 100, "item_id:8", search];
      return slimRequest(data);
    };

    this.spotify_fetch = function(id) {
      data = ["spotify", "items", 0, 100, "item_id:"+id];
      return slimRequest(data);
    };

    this.add_spotify_track = function(item) {
      data = ["spotify", "playlist", "add", "item_id:"+item];
      return slimRequest(data);
    };

    this.add_spotify_album = function(item) {
      data = ["spotify", "playlist", "add", "item_id:"+item];
      return slimRequest(data);
    };

    this.add_spotify_artist = function(item) {
      data = ["spotify", "playlist", "add", "item_id:"+item];
      return slimRequest(data);
    };

};

