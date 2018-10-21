import React from 'react';
import {Icon} from 'react-native-elements';
import {Dimensions, Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import InfoComponent from '../components/info-component/info-component';
import SettingComponent from '../components/setting-component/setting-component';
import WeatherContainer from '../containers/weather-container/weather-container';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Home': {
        screen: WeatherContainer,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name="home" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Info': {
        screen: InfoComponent,
        navigationOptions: {
            tabBarLabel: 'Info',
            tabBarIcon: ({tintColor}) => <Icon name="info" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Setting': {
        screen: SettingComponent,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({tintColor}) => <Icon name="menu" type="entypo" size={28} color={tintColor}/>
        },
    },
},
{
    tabBarOptions: {
        activeTintColor: 'yellow',
        labelStyle: {
            fontSize: 15,
        },
        style: {
            backgroundColor: 'green',
            padding: -10
        },    
        showLabel: false    
    }
}
);

export default Navigator = createStackNavigator(
    {
        Tabs: {
            screen: Tabs,
            navigationOptions: ({navigation}) => ({
                gesturesEnabled: false,
            })
        }
    },
    {
        headerMode: "none",
        mode: "modal"
    }
);