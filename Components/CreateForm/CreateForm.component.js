import React, { Component } from 'react';
import {
  Text, View, TextInput, ScrollView, TouchableHighlight, Button, SafeAreaView,
} from 'react-native';

import axios from 'axios';
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

  onSubmit = () => {
    const fieldObject = {};
    this.state.fields.forEach((val, index) => {
      fieldObject[val] = val;
    });
    fieldObject.FormName = this.state.formName;

    console.log(fieldObject);

    axios.post('http://localhost:8080/insertFormField', { id: 1, field: fieldObject });
  }


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
      <SafeAreaView>
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
              <TouchableHighlight onPress={this.onSubmit}>


                <Text style={styles.footerContent}>Save</Text>

              </TouchableHighlight>
            </View>

          </View>
        </ScrollView>

      </SafeAreaView>

    );
  }
}
