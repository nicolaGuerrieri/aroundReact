/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  View,
 } from 'react-native';

const instructions = Platform.select({
  ios: 'Search a place',
  android: 'Search a place',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { city: this.props.navigation.state.params.city};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.city}</Text>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#336799',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  imageHome: {
    width: 150,
    height: 150,
  },
  inputRound: { 
    textAlign: 'center',
    color: 'white',
    width: 300,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius:10,
  },
  button: { 
    textAlign: 'center',
    color: '#3589d8',
    width: 400,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius:20,
  },
  
});
