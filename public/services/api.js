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

export const fetchProfile = async username => {
  return new Promise(async function(resolve, reject) {
    try {
      let result = await callApi(`/profile/${username}`);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

export const fetchStats = async username => {
  return new Promise(async function(resolve, reject) {
    try {
      let result = await callApi(`/stats/${username}`);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};
