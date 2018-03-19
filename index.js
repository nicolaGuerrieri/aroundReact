import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import Search from './Search'




import { StackNavigator } from 'react-navigation';

class around extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render(){
    const { navigation } = this.props;

    return (
           <App navigation={ navigation }/>
    );
  }
}
const SimpleApp = StackNavigator({
    Home: { screen: around },
    Search: { screen: Search, title: 'ss' },
  });
AppRegistry.registerComponent('around', () => App);


/**<View style={styles.container}>
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
          value={this.state.text}
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
          color="#3589d8"
          width="200"
          style={styles.button}
          onPress={() =>
            navigate('Search', { name: text })
          }
          accessibilityLabel="Search"
        />


      </View> */