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
  TouchableOpacity
} from 'react-native';
//Redux stuff
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

/*
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
      ),
    )
  return createStore(reducer, intialState, enhancer);
}


const store = configureStore({});


*/

export default class testNative extends Component {
  constructor(props) {
    super(props)     
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text> fdsafadf </Text>
      </View>
    )
  } 
  
}


const App = () => (
  <Provider store={store}>
    <testNative />
  </Provider>
)



AppRegistry.registerComponent('testNative', () => testNative);
