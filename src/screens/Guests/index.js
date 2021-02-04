import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Counter from './counter'
import Search from './search'

import styles from './styles'

import {Press} from './styless'

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={{ marginTop: 20, justifyContent: 'space-between', height: '100%' }}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Press
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Press>

                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

                        <Press
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Press>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 2-12</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Press
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Press>

                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

                        <Press
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Press>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                        <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Press
                            onPress={() => setInfants(Math.max(0, infants - 1))}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Press>

                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>

                        <Press
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Press>
                    </View>
                </View>
            </View>

            <Press
                onPress={() =>
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults',
                            params: {
                                guests: adults + children,
                                viewport: route.params.viewport,
                            }
                        },
                    })
                }
                style={{
                    marginBottom: 20,
                    backgroundColor: '#f15454',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Search
          </Text>
            </Press>
        </View>
    );
};

export default GuestsScreen;