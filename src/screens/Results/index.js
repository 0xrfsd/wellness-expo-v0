import React, { Component, } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Guests extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
});