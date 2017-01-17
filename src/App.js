import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers'

export default class App extends Component {

  render() {
    const store = createStore(reducers);

    return(
      <Provider store={store}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}