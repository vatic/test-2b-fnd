const API_ROOT_NODE = (process.env.NODE_ENV === 'production')
  ?
  'https://2b-test-backend.herokuapp.com'
  :
  `http://${window.location.hostname}:8080`;

const config = {
  API_ROOT_NODE,

  ENDPOINTS: {
    CHECK_PHONE: phone => `${API_ROOT_NODE}/phones/check/${phone}`,
    LOGIN: `${API_ROOT_NODE}/login`,
    LOGOUT: `${API_ROOT_NODE}/logout`,
    PHONES: `${API_ROOT_NODE}/phones`,
    PHONES_TOTAL: `${API_ROOT_NODE}/phones/total`,
    DEL_PHONE: phone => `${API_ROOT_NODE}/phones/${phone}`,
  },
};

export default config;
