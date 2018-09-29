export const VALID_URL = 'VALID_URL';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function action(type, payload = {}) {
  return { type, ...payload };
}

export const counter = () => action(INCREMENT);
export const validURL = bValid => action(VALID_URL, bValid);
