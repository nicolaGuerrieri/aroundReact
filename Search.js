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
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Search a place',
  android: 'Search a place',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { city: 'Search city...' };
  }
  render() {

    return (
      <View style={styles.container}>
       
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            height: 10,
          }}
        />
        

      
      </View>
    );
  }
}
 