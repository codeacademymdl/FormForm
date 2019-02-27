import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import moment from 'moment';
import styles from './FormBlock.style';

// moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z")


export default class FormBlock extends Component {
  // date = moment(this.props.date, 'YYYY-MM-DD HH:mm');

  // formatDate = this.date._d;


  render() {
    // console.log('this date', this.date._d);
    return (
      <View style={styles.main}>
        <Text style={styles.content}>{this.props.title}</Text>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            Created On:
            {this.props.date}
          </Text>
        </View>
      </View>

    );
  }
}
