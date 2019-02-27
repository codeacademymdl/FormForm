import React, { Component } from 'react';
import {
  View, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import LandingPageHeader from '../LandingPageHeader/LandingPageHeader.component';
import styles from './HomeScreen.style';
import addIcon from '../../assets/add.png';
import FormBlock from '../FormBlock/FormBlock.component';

export default class HomeScreen extends Component {
  state = {
    formData: [],
  }

  async componentDidMount() {
    const fetchedData = await axios.get('http://localhost:8080/FormData');
    const forms = fetchedData.data.form;
    this.setState({
      formData: forms,
    });
  }

  render() {
    // console.log('inside homescreen', this.props);
    // console.log(this.state.formData);
    return (
      <ScrollView style={styles.main}>
        <LandingPageHeader heading="Awesome Forms" />
        <View style={styles.body}>
          {
            this.state.formData.map(object => <FormBlock key={object.formName} title={object.formName} date={object.createdAt} />)
          }

          <View style={styles.buttonPos}>

            <TouchableOpacity
              underlayColor="blue"
              onPress={() => this.props.navigation.navigate('CreateForm')}
            >
              <Image
                source={addIcon}
                style={styles.icon}
              />
            </TouchableOpacity>

          </View>


        </View>
      </ScrollView>
    );
  }
}
