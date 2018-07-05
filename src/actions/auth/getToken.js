export const GET_TOKEN = 'GET_TOKEN';

const getToken = () => ({
  type: GET_TOKEN,
  run: () => localStorage.token,
});
export default getToken;
