import { connect } from 'react-redux';
import { logout, me } from '../actions/auth/auth';
import deleteToken from '../actions/auth/deleteToken';
import TopMenu from '../components/TopMenu';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { logout, deleteToken, me })(TopMenu);
