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
  // async componentDidMount() {


  // }

  render() {
    console.log('inside homescreen', this.props);
    return (
      <ScrollView style={styles.main}>
        <LandingPageHeader heading="Awesome Forms" />
        <View style={styles.body}>
          <FormBlock title="ballay ballay" />
          <FormBlock title="ballay ballay" />
          <FormBlock title="ballay ballay" />
          <FormBlock title="ballay ballay" />
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
