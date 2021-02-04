import React, { Component, } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Press } from './styles'

// class Search extends Component {

//     state = { count: 0 }

//     render() {
//         const { count } = this.state
//         return (
//             <View>
//                 <Press onPress={() => this.setState({ count: this.state.count + 1 })} />
//                 <Text>Age 13 or above{count}</Text>
//             </View>
//         );
//     }
// }

export default class Search extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Press style={styles.btn} onPress={() => console.log('pressed')}><Text>Click me</Text></Press>
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
    },
    btn: {
        marginTop: 20,
        width: 300,
        backgroundColor: 'red',
    }
});