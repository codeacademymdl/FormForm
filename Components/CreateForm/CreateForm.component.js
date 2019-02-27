import React, { Component } from 'react';
import {
  Text, View, TextInput, ScrollView, TouchableHighlight, Button,
} from 'react-native';

import styles from './CreateForm.style';
import Header from '../LandingPageHeader/LandingPageHeader.component';

export default class FillForm extends Component {
  state = {
    count: 0,
    fields: [],
    formName: '',
  }

  counterIncrement = () => {
    this.setState({
      count: this.state.count + 1,

    });
  }

  onChangeAddField = (text, index) => {
    let { fields } = this.state;
    fields = [...fields];
    fields[index] = text;
    this.setState({ fields });
  }

  // addField = () => {
  //   const fields = [];
  //   for (let j = 0; j < this.state.count; j += 1) {
  //     fields.push(this.refs.j.value);
  //   }
  //   this.setState({
  //     form: fields,
  //   });
  // }


  render() {
    console.log(this.state);
    // val=this.refs.<refname>.value
    const fields = [];


    for (let i = 0; i < this.state.count; i += 1) {
      fields.push(
        <View style={styles.box}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter Field Name"
            onChangeText={(text) => {
              this.onChangeAddField(text, i);
            }}
          />
        </View>,
      );
    }


    return (
      <ScrollView>

        <Header heading="Create Form" />

        <View style={styles.main}>


          <View style={styles.box}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Form Name"
              onChangeText={text => this.setState({ formName: text })}
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
          {fields}

          <View style={styles.footer}>
            <TouchableHighlight>


              <Text style={styles.footerContent}>Save</Text>

            </TouchableHighlight>
          </View>

        </View>
      </ScrollView>
    );
  }
}
