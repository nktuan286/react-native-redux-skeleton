// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', // main axis
        alignItems: 'center', // cross axis'
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
    },
    weatherInfoText: {
        textAlign: 'center',
        padding: 20,
        color: "blue",
        fontSize: 20
    },
});
