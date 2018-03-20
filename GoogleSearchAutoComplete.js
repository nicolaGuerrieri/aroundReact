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
  TouchableNativeFeedback
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };


const instructions = Platform.select({
  ios: 'Search a place',
  android: 'Search a place',
});




type Props = {};
export default class App extends Component<Props> {
 //navigazione
static navigationOptions =
{
  title: 'Search a city',
};

FunctionToOpenSecondActivity = () => {
this.props.navigation.navigate('Search');

}
  constructor(props) {
    super(props);
    this.caller = { city: this.props.navigation.state.params.caller};
   }
  render() {
    const { navigate } = this.props.navigation;
    return ( 
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={true}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            data.description;
             
            this.props.navigation.navigate(this.caller.city, { city: data.description })
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCPLOZiKPHlSfJKv4Ym_Ii_MDj1hPeXK8M',
            language: 'it', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0
            },
            description: {
              fontWeight: 'bold', 

            },
            predefinedPlacesDescription: {
              color: '#ffffff', 
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
