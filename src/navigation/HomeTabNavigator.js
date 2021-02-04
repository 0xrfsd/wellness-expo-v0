import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Travel from '../screens/Travel';
import Experience from '../screens/X';
import Saved from '../screens/Favoritos';
import Efil from '../screens/Efil';
import Guests from '../screens/Guests';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'home',
  },
  Walleta: {
    lib: AntDesign,
    name: 'search1',
  },
  Walletb: {
    lib: AntDesign,
    name: 'book',
  },
  Settings: {
    lib: AntDesign,
    name: 'hearto',
  },
  Perfil: {
    lib: AntDesign,
    name: 'user',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          paddingTop: 10,
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#333',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={Travel}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Walleta"
        component={Experience}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Walletb"
        component={Experience}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Saved}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Efil}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}