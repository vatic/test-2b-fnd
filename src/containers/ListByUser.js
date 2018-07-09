import { connect } from 'react-redux';
import deleteToken from '../actions/auth/deleteToken';
import { disablePizza, enablePizza, getPizzasByUser, getTotalByUser } from '../actions/pizzas/list';
import ListByUser from '../components/ListByUser';


const mapStateToProps = (state) => {
  const { list } = state.pizzas;
  return {
    list,
  };
};

export default connect(mapStateToProps, {
  getPizzasByUser,
  getTotalByUser,
  enablePizza,
  disablePizza,
  deleteToken,
})(ListByUser);
