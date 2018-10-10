const API_PATH = "http://localhost:5000/api";

function callApi(endpoint) {
  const fullURL = API_PATH + endpoint;
  return new Promise(function(resolve, reject) {
    fetch(fullURL).then(response =>
      response.json().then(json => {
        if (!json) {
          reject(error => ({
            error: json.message || "Something bad happened"
          }));
        } else {
          resolve(json);
        }
      })
    );
  });
}

export const fetchProfile = username => {
  callApi(`/profile/${username}`);
};

export const fetchStats = username => {
  callApi(`/stats/${username}`);
};
