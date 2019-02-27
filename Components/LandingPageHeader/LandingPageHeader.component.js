import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import styles from './LandingPageHeader.style';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.content}>{this.props.heading}</Text>
      </View>

    );
  }
}
