import { connect } from 'react-redux';
import deleteToken from '../actions/auth/deleteToken';
import { getIngredients } from '../actions/ingredients/list';
import { addPizza } from '../actions/pizzas/list';
import { getTypes } from '../actions/types/list';
import Constructor from '../components/Constructor';


const mapStateToProps = (state) => {
  const { list } = state.ingredients;
  const { add } = state.pizzas;
  const typesList = state.types.list;
  return {
    add,
    list,
    typesList,
  };
};

export default connect(mapStateToProps, {
  getIngredients,
  getTypes,
  addPizza,
  deleteToken,
})(Constructor);
