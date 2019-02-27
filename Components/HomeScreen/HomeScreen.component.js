import React, { Component } from 'react';
import {
  View, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import LandingPageHeader from '../LandingPageHeader/LandingPageHeader.component';
import styles from './HomeScreen.style';
import addIcon from '../../assets/add.png';

export default class HomeScreen extends Component {
  render() {
    console.log('inside homescreen', this.props);
    return (
      <ScrollView style={styles.main}>

        <View style={styles.main}>
          <LandingPageHeader />
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
