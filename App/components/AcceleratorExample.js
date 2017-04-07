
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity
} from 'react-native';
import { Accelerometer, Gyroscope } from 'react-native-sensors';
import Orientation from 'react-native-orientation'


export default class testNative extends Component {
  constructor(props) {
    super(props)
  
    // const accelerationObservable = whatever.Accelerometer({});
    const accelerationObservable = new Accelerometer({
      updateInterval: 1000, // defaults to 100ms
    });

    // console.log('acceleration', accelerationObservable);    
    //   accelerationObservable
    //  .subscribe(({ x, y, z }) => console.log(`x: ${x * 1000}, y: ${y * 1000}, z: ${z * 1000}`));
    



    //Gyroscope
    // const gyroscopeObservable = new Gyroscope({
    //   updateInterval: 100, // defaults to 100ms
    // });

    // console.log ('gyroscope', gyroscopeObservable);    
    // gyroscopeObservable
    // .subscribe(data => console.log(` ${JSON.stringify(data)}`));    
  }
  
  componentDidMount() {
    console.log('locking to landscape');
    console.log(Orientation);
    Orientation.lockToLandscape();
  }

  handlePress(event) {
    // console.log('nativeEvent', event.nativeEvent);
    console.log('x', event.nativeEvent.locationX);
    console.log('y', event.nativeEvent.locationY);

  } 

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={(evt) => this.handlePress(evt)} >
        <Text> Stuff </Text>
      </TouchableOpacity>      
    );
  }
}

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

