/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Components/HomeScreen/HomeScreen.component';
import FillForm from './Components/FillForm/FillForm.component';

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CreateForm: FillForm,


  }, {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppStackNavigator);

class App extends Component {
  render() {
    return (


      <AppContainer />

    );
  }
}
export default App;
