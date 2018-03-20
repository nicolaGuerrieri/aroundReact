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
  View,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'





const instructions = Platform.select({
  ios: 'Search a place',
  android: 'Search a place',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = { city: this.props.navigation.state.params.city };
    this.state = { isLoading: true };
    this.state = {
      dataSource: null,
    };
    this.getPlaceFromCity();
  }
  getPlaceFromCity() {
    if (this.props.navigation.state.params.city) {
      return fetch('http://45.62.253.187:3000/getListaForCity?citta=' + this.props.navigation.state.params.city)
        .then((response) => response.json())
        .then((responseJson) => {

          console.log(responseJson.listaLuoghi);
          this.setState({
            isLoading: false,
            dataSource: responseJson.listaLuoghi,
          });
        })
        .catch((error) => {
          console.error(error);
          console.error(">>>>>>>>>>>>>>>>");
        });
    }
  }
  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>{this.state.city}</Text>
          <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.ricerca}</Text>}
            />
        </View>
      </ScrollView>
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
    color: '#ffffff',
  },
 

});

/** this.state.listaLuoghi.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    
                    <Text style={styles.name}>{u.ricerca}</Text>
                  </View>
                );
              })
 * import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

 * <Card styles={card}>
          <CardTitle styles={cardTitle}>
            <Text style={styles.title}>Card Title</Text>
          </CardTitle>
          <CardContent>
            <Text>Content</Text>
          </CardContent>
          <CardAction >
          <Button
            title="Detail"
            style={styles.button}
            onPress={() => {}}>
            Detail
          </Button>
          </CardAction>
        </Card> */