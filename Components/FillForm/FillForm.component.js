import React, { Component } from 'react';
import {
  Text, View, TextInput,
} from 'react-native';

import styles from './FillForm.style';


export default class FillForm extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.content}>this is Fill Form</Text>
      </View>

    );
  }
}
