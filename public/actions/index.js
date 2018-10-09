export const VALID_URL = "VALID_URL";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_STATS = "FETCH_STATS";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const dispatchcounter = () => action(INCREMENT);
export const fetchProfile = () => action(FETCH_PROFILE);
export const fetchStats = () => action(FETCH_STATS);

export const checkvalidURL = bValid => {
  return action(VALID_URL, { bValid });
};
