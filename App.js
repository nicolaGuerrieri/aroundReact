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
    this.state = { city: 'Search city...' };
  }
  render() {

    const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
    const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

    return (
      <View style={styles.container}>
        <Image
          style={styles.imageHome}
          source={require('./icon.png')} />
        <Text style={styles.welcome}>
          Welcome in AroundTheWOD App !!!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TextInput
          style={styles.inputRound} placeholder="prova" placeholderTextColor="white"
          onChangeText={(city) => this.setState({ city })}
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


        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            this.state.city = data.description;
            console.log(data);
            console.log(details);
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCPLOZiKPHlSfJKv4Ym_Ii_MDj1hPeXK8M',
            language: 'en', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0
            },
            description: {
              fontWeight: 'bold'
            },
            predefinedPlacesDescription: {
              color: 'white'
            }
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food'
          }}

          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          // predefinedPlaces={[homePlace, workPlace]}

          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        //    renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
        //  renderRightButton={() => <Text>Custom text after the inputg</Text>}
        />

        <Button
          title="Search"
          width="200"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Search', { city: this.state.city })}
          accessibilityLabel="Search"
        />
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
    borderRadius: 10,
  },
  button: {
    textAlign: 'center',
    color: '#3589d8',
    backgroundColor: 'red',
    width: 400,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },

});


