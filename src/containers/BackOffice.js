import { connect } from 'react-redux';
import deleteToken from '../actions/auth/deleteToken';
import {
 addPizza, disablePizza, enablePizza, getPizzas, getTotal 
} from '../actions/pizzas/list';
import List from '../components/List';


const mapStateToProps = (state) => {
  const { add, list } = state.pizzas;
  return {
    list,
    add,
  };
};

export default connect(mapStateToProps, {
  getPizzas,
  getTotal,
  addPizza,
  enablePizza,
  disablePizza,
  deleteToken,
})(List);
