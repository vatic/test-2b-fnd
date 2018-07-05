export const SAVE_TOKEN = 'SAVE_TOKEN';

const saveToken = token => ({
  type: SAVE_TOKEN,
  run: () => localStorage.setItem('token', token),
});
export default saveToken;
