import { connect } from 'react-redux';
import deleteToken from '../actions/auth/deleteToken';
import { getIngredients } from '../actions/ingredients/list';
import Constructor from '../components/Constructor';


const mapStateToProps = (state) => {
    const { list } = state.ingredients;
    return {
        list,
    };
};

export default connect(mapStateToProps, {
    getIngredients,
    deleteToken,
})(Constructor);
