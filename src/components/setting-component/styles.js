// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
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
        paddingVertical: 6,
        paddingHorizontal: 40,
    },
});
