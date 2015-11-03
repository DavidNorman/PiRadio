function SlimClient($http, $location, serverStatus) {

    var slimRequest = function(data) {
        return $http.post("http://" + $location.host() + ":3000/", data).
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

    this.search = function(text) {
      data = [ "search", 0, 100, "term:" + text ];

      return slimRequest(data);
    };
};
