import React, { Component } from 'react';
import {
  View, StyleSheet, Button, ScrollView,
} from 'react-native';
import style from './NewForm.style';
import Header from '../Header/Header.component';
import CustomTextField from '../CustomTextField/CustomTextField.component';
import SaveButton from '../SaveButton/SaveButton.component';
import { httpPost } from '../../utils/httpPost';
import { URL_FOR_POSTING_FORM } from '../../constants';

const styles = StyleSheet.create(style);
export default class NewForm extends Component {
  state = {
    rows: [],
    formFields: [],
  }

  rows = [];

  count = 0

  onChangeHandle = (text, id) => {
    let { formFields } = this.state;
    formFields = [...formFields];
    formFields[id] = text;
    this.setState({ formFields });
  }

  addFieldClick = () => {
    const { rows } = this.state;
    rows.push(<CustomTextField
      key={this.count}
      onChangeText={(text) => {
        console.log(text);
        this.onChangeHandle(text, this.count);
      }}
    />);
    this.setState({ rows });
    this.count += 1;
  };

  submitForm = async () => {
    const { formFields } = this.state;
    const payload = {
      formName: formFields[0],
      formFields: formFields.slice(1),
    };
    console.log(payload);
    await httpPost(URL_FOR_POSTING_FORM, payload);
    const { navigation } = this.props;
    navigation.navigate('Home');
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <CustomTextField
          key={0}
          onChangeText={(text) => {
            console.log(text);
            this.onChangeHandle(text, 0);
          }}
        />
        <View
          style={styles.formHorizontalBar}
        />
        <View style={styles.addFieldButton}>
          <Button title="Add Field" onPress={this.addFieldClick} />
        </View>
        <ScrollView>
          {this.state.rows.map((value, index) => value)}
        </ScrollView>
        <SaveButton onPress={() => {
          console.log(this.state.formFields);
          this.submitForm();
        }}
        />
      </View>
    );
  }
}
