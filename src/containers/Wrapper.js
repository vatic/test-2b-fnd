import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { logout, me } from '../actions/auth/auth';
import deleteToken from '../actions/auth/deleteToken';
import App from '../App';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { logout, deleteToken, me })(App);
