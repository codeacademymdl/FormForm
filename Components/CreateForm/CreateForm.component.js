import React, { Component } from 'react';
import {
  Text, View, TextInput, ScrollView, TouchableHighlight, Button,
} from 'react-native';

import styles from './CreateForm.style';
import Header from '../LandingPageHeader/LandingPageHeader.component';

export default class FillForm extends Component {
  state = {
    count: 0,
    check: -1,
  }

  counterIncrement = () => {
    this.setState({
      count: this.state.count + 1,
      check: this.state.check + 1,
    });
  }


  // addField = () => {
  //   const field = (

  //     <View style={styles.box}>
  //       <TextInput style={{ height: 40 }} id={this.state.count} placeholder="Field Name" />
  //     </View>

  //   );
  //   return field;
  // }

  render() {
    console.log(this.state);
    return (
      <ScrollView>

        <Header heading="Create Form" />

        <View style={styles.main}>


          <View style={styles.box}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Form Name"

            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={this.counterIncrement}
            >
              <Text style={styles.text}>Add Field</Text>

            </TouchableHighlight>
          </View>


        </View>
      </ScrollView>
    );
  }
}
