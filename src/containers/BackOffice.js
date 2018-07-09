import { connect } from 'react-redux';
import deleteToken from '../actions/auth/deleteToken';
import { addPizza, disablePizza, enablePizza, getPizzas, getPizzasByUser, getTotal } from '../actions/pizzas/list';
import BackOffice from '../components/BackOffice';


const mapStateToProps = (state) => {
  const { add, list } = state.pizzas;
  return {
    list,
    add,
  };
};

export default connect(mapStateToProps, {
  getPizzas,
  getPizzasByUser,
  getTotal,
  addPizza,
  enablePizza,
  disablePizza,
  deleteToken,
})(BackOffice);
