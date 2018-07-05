const API_ROOT_NODE = (process.env.NODE_ENV === 'production')
  ? 'https://2b-test-backend.herokuapp.com'
  : `http://${window.location.hostname}:8080`;

const config = {
  API_ROOT_NODE,

  ENDPOINTS: {
    LOGIN: `${API_ROOT_NODE}/login`,
    LOGOUT: `${API_ROOT_NODE}/logout`,
    PIZZAS: `${API_ROOT_NODE}/pizzas`,
  },
};

export default config;
