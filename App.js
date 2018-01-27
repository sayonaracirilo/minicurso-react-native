import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator} from 'react-navigation';
import MainScreen from "./MainScreen";
import ProfileScreen from "./Profilescreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from './screens/SearchScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTitle: 'Pesquisar'
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
