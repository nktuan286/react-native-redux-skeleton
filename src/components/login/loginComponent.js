import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, View, Text, TextInput, TouchableOpacity, Alert, Image, KeyboardAvoidingView, ActivityIndicator
} from 'react-native';
import styles from './styles/style';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    _onPress = () => {
        this.props.navigation.navigate('Tabs');
    }

    render() {
        const {
            isLoading,
            loginError,
            dataLogin,
        } = this.props;
    
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                <View>
                    <View>
                        <TextInput />
                    </View>
                    <View>
                        <TextInput />
                    </View>
                    <View>
                        <Button
                            onPress={this._onPress}
                            title='LOGIN'
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

LoginComponent.propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    weatherInfo: PropTypes.object,
    fetchLogin: PropTypes.func
};

export default LoginComponent;