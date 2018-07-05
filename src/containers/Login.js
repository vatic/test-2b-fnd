import { connect } from 'react-redux';

import { login as loginAction } from '../actions/auth/auth';
import saveToken from '../actions/auth/saveToken';
import Login from '../components/Login';


const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { loginAction, saveToken })(Login);
