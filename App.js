/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, ScrollView,
} from 'react-native';
import LandingPageHeader from './Components/LandingPageHeader/LandingPageHeader.component';
import styles from './App.style';

export default class App extends Component {
  render() {
    return (
      <ScrollView>

        <View style={styles.main}>
          <LandingPageHeader />


        </View>
      </ScrollView>
    );
  }
}
