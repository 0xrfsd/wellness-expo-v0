import React,{Component} from 'react';
import { StatusBar } from 'react-native';

import Router from './navigation/Router';
// import StackNavigation from './stackNavigation';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
        {/* react-native-maps */}
      {/* StackNavigator for explore tab, TabNavigation for searchpageresult */}
      {/* <As/> StackNavigator and TabNavigation cannot render in same screen fix it! */}
      <Router />
    </>
  );
}
