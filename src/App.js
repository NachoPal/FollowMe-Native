import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import AuthView from './components/AuthView';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import ReduxThunk from 'redux-thunk';


const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {

  componentWillMount() {
    if(__DEV__){
      console.disableYellowBox = true
    }
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <AuthView/>
        </ThemeProvider>
      </Provider>
    );
  }
}