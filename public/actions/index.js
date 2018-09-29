export const VALID_URL = "VALID_URL";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const dispatchcounter = () => action(INCREMENT);
export const checkvalidURL = bValid => {
  return action(VALID_URL, { bValid });
};
