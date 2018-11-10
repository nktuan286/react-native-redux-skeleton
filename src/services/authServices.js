import axios from '../common/axiosConfig';

export const doLogin = (dataLogin) => {
    return axios({
        method: 'post',
        url: 'do-login',
        data: {
            username: dataLogin.username,
            password: dataLogin.password 
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error
    });
}