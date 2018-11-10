import { connect } from 'react-redux';
import LoginComponent from '../../components/login/loginComponent';
import { fetchLogin } from '../../actions/auth/loginAction';

const mapStateToProps = (state, ownProps) => {
    return {
       ...state.auth
    };
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin) => dispatch(fetchLogin(dataLogin)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);
