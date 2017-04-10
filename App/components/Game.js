import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    WebView
} from 'react-native'


import BottomNavigationBar from './BottomNavigationBar'
const Game = () => (
  /*
  <View>

    <Text>
    Gamefsadfasdfsadfasdfasdfadsfasdfasdfdsafasdfdsafsfsda
  fadfasd
  fadfasdfadsfds
  afdsa
  fadfasdfadsfdsadf
  dsa
    </Text>

    
    
    
    <View style={styles.space}><Text>fas</Text></View>
    <BottomNavigationBar />  
  </View>

  */

    <WebView
      source={{uri: 'https://pearl-jam-game-server.herokuapp.com/'}}
      style={{marginTop: 20}}
    
    />
   

  
)


const styles = StyleSheet.create({
  space: {
    flex: 1
  }
});


export default Game