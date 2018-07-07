// const API_ROOT_NODE = (process.env.NODE_ENV === 'production')
//   ? 'https://test-2b-backend.herokuapp.com'
//   : `http://${window.location.hostname}:8080`;
const API_ROOT_NODE = 'https://test-2b-backend.herokuapp.com';

const config = {
  API_ROOT_NODE,

  ENDPOINTS: {
    LOGIN: `${API_ROOT_NODE}/login`,
    LOGOUT: `${API_ROOT_NODE}/logout`,
    TOTAL: `${API_ROOT_NODE}/pizzas/count`,
    PIZZAS: `${API_ROOT_NODE}/pizzas`,
    PIZZA: id => `${API_ROOT_NODE}/pizzas/${id}`,
    PIZZA_ENABLE: id => `${API_ROOT_NODE}/pizzas/${id}/enable`,
    INGREDIENTS: `${API_ROOT_NODE}/ingredients`,
    TYPES: `${API_ROOT_NODE}/types`,
  },
};

export default config;
