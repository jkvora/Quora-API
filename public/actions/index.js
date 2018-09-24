export const INVALID_URL = "INVALID_URL";
export const VALID_URL = "VALID_URL";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const increment = () => action(INCREMENT);
