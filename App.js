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
import {
  StackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Search a place',
  android: 'Search a place',
});

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



type Props = {};
export default class App extends Component<Props> {

 
  constructor(props) {
    super(props);

    this.state = { city: '' };

  }
  render() {
      return (
       <View style={styles.container}>
         <Image source={ require('./icon.png') } style={styles.imageHome} />
         <Text style={styles.welcome}>
           Welcome in AroundTheWOD App !!!
         </Text>
         <Text style={styles.instructions}>
           {instructions}
         </Text>
         <TextInput
           style={styles.inputRound} placeholder="City..." placeholderTextColor="#ffffff"
           onChangeText={(city) => this.setState({ city })}
           //onFocus={(city) => this.props.navigation.navigate('GoogleSearchAutoComplete', { caller: 'Home' })}
           underlineColorAndroid='transparent'
           value={this.state.city}
         />
         <View
           style={{
             borderBottomColor: 'black',
             borderBottomWidth: 1,
             height: 10,
           }}
         />       
         <Button
           title="Search"
           width="200"
           style={styles.button}
           onPress={() => this.props.navigation.navigate('Search', { city: this.state.city.toLowerCase() })}
           accessibilityLabel="Search"
         />
       </View>
     ); 
  }
}

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    top:  0,
    bottom: 0,
    left: -80,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'flex-start',
     
  },
  container: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#336799',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#ffffff',
  },
  imageHome: {
    width: 150,
    height: 150,
  },
  inputRound: {
    textAlign: 'center',
    color: '#ffffff',
    width: 300,
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    textAlign: 'center',
    color: '#3589d8',
    width: 400,
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 20,
  },

});


