// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0067a7',
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
        color: "yellow",
        fontSize: 20
    },
});
