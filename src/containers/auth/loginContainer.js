import { connect } from 'react-redux';
import LoginComponent from '../../components/login/loginComponent';
import { fetchLogin } from '../../actions/auth/fetchLogin';

const mapStateToProps = (state, ownProps) => {
    return {
       
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: (dataLogin) => dispatch(fetchLogin(dataLogin)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);
