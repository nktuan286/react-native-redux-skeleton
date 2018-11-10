import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, View, Text, TextInput, TouchableOpacity, Alert, Image, KeyboardAvoidingView, ActivityIndicator
} from 'react-native';
import styles from './stylesheets/style';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isSubmit: false
        };
    }

    getErrorMessage = () => {
        let message = 'Username or password is invalid.';
        return (
            <View style={{padding:10, backgroundColor:'#d5dbe2'}}>
                <Text style={{color:'red'}}>
                    {message}
                </Text>
            </View>
        );
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.dataLogin.status) {
            nextProps.navigation.navigate('Tabs');
        }
    }

    _onPress = () => {
        const { username, password } = this.state;
        if ((username === '' || password === '') && this.props.isLoading === false) {
            Alert.alert(
                'Required!',
                'Username or Password can not empty!',
            )
        } else {
            const data = {
                username,
                password
            }
            this.props.doLogin(data);
        }
    }

    render() {
        const {
            isLoading,
            loginError,
            dataLogin,
        } = this.props;

        return (
            <View>
                <View>
                    <Text style={styles.screenLabel}>
                        LOGIN SCREEN
                    </Text>
                </View>
                {isLoading ? <ActivityIndicator /> : null}
                {loginError ? this.getErrorMessage() : null}
                <View style={{marginTop: 10}}>
                    <View style={{padding:10}}>
                        <TextInput 
                            style={styles.inputLogin}
                            placeholder="Username"
                            onChangeText={(text) => this.setState({ username: text.trim() })}
                            value={this.state.username}
                        />
                    </View>
                    <View style={{padding:10}}> 
                        <TextInput 
                            style={styles.inputLogin}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ password: text.trim() })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={{padding:10}}>
                        <Button
                            onPress={this._onPress}
                            title='LOGIN'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

LoginComponent.propTypes = {
    loginError: PropTypes.bool,
    isLoading: PropTypes.bool,
    dataLogin: PropTypes.object,
    doLogin: PropTypes.func
};

export default LoginComponent;