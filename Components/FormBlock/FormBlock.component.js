import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import styles from './FormBlock.style';


export default class FormBlock extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.content}>{this.props.title}</Text>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Created On:dsfljsdfkjsh</Text>
        </View>
      </View>

    );
  }
}
