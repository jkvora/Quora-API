export const VALID_URL = "VALID_URL";
export const API_OUTPUT = "API_OUTPUT";
export const API_OUTPUT_LOADING = "API_OUTPUT_LOADING";
export const API_OUTPUT_LOADED = "API_OUTPUT_LOADED";

export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_STATS = "FETCH_STATS";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const dispatchcounter = () => action(INCREMENT);
export const fetchProfile = data => action(FETCH_PROFILE, { data });
export const fetchStats = data => action(FETCH_STATS, { data });

export const checkvalidURL = bValid => {
  return action(VALID_URL, { bValid });
};
