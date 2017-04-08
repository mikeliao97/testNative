/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity,
  TouchableHighlight,
  Navigator
} from 'react-native';

//Components
import Profile from './App/components/Profile'
import Login from './App/components/Login'


//Fb Stuff
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'




//Redux stuff
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './App/reducers/index'
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});


function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
      ),
    )
  return createStore(reducer, enhancer);
}

//Material UI Stuff
import {ThemeProvider} from 'react-native-material-ui'



const store = configureStore({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }     
  }

  handlePress() {
    console.log('store', store.getState());
  }


  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }
    switch(route.title) {
      case "Profile":
        return (
          <Profile {...globalNavigatorProps} />
        )
      default:
        return (
          <Login />
        ) 
    }
  }



  render() {
    
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <ThemeProvider>
        <Provider store={store}>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={this._renderScene}
          />
        </Provider>
      </ThemeProvider>
    )
  } 
}






AppRegistry.registerComponent('testNative', () => App);
