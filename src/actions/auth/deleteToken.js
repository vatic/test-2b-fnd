export const DEL_TOKEN = 'DEL_TOKEN';

const deleteToken = () => ({
  type: DEL_TOKEN,
  run: () => localStorage.removeItem('token'),
});
export default deleteToken;
