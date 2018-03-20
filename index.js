import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import Search from './Search'
import GoogleSearchAutoComplete from './GoogleSearchAutoComplete'




import { StackNavigator } from 'react-navigation';

class around extends Component {
  
  static navigationOptions = {
    header: null
}
 
  render() {
    const { navigation } = this.props;

    return (
      <App navigation={navigation } >

      </App> 
    );
  }
}
class Second extends Component {
  static navigationOptions = { 
    
    headerStyle: { backgroundColor: '#336799' },
    headerTitleStyle: { color: 'white'}
 

  };

  render() {
    const { navigation } = this.props;

    return (
      <Search navigation={navigation } >

      </Search> 
    );
  }
}
class Autoc extends Component {
  static navigationOptions = { 
    
    headerStyle: { backgroundColor: '#336799' },
    headerTitleStyle: { color: 'white'}
 
  };

  render() {
    const { navigation } = this.props;

    return (
      <Search navigation={navigation } >

      </Search> 
    );
  }
}
const NAVIGAZIONE = StackNavigator({
  Home: { screen: around},
  Search: { screen: Second },
  GoogleSearchAutoComplete: { screen: Autoc},
});
AppRegistry.registerComponent('around', () => NAVIGAZIONE);
