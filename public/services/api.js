const API_PATH = 'http://localhost:5000';

function callApi(endpoint) {
  const fullURL = API_PATH + endpoint;

  return fetch(fullURL).then(response =>
    response.json().then(json => {
      if (!json.ok) {
        Promise.reject(error => ({
          error: json.message || 'Something bad happened'
        }));
      }
    })
  );
}

export const fetchProfile = username => {
  callApi(`/profile/${username}`);
};

export const fetchStats = username => {
  callApi(`/stats/${username}`);
};
