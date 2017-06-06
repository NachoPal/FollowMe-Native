import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
/*import NavigationRoot from './components/NavigationRoot';*/
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import ReduxThunk from 'redux-thunk';
import Promise from 'redux-promise';
import createLogger from 'redux-logger'
import { StackNavigator } from 'react-navigation';
import { LoginInScreen } from './components/screens';



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
    const logger = createLogger();
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, Promise, logger));

    return(
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <LoginInScreen/>
        </ThemeProvider>
      </Provider>
    );
  }
}