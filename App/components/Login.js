
import React, { Component } from 'react';
import {StyleSheet, View, Text, Picker, TouchableHighlight} from 'react-native'
//FB
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
//T comb, for forms
import t from 'tcomb-form-native'

//Import bottom navigation
import BottomNavigationBar from './BottomNavigationBar'

var Form = t.form.Form;
var LoginModel = t.struct({
  username: t.String,
  password: t.String
})


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {     
    }

  }

  handlePress() {
    console.log('pressed');
    console.log('state', this.state);

  }

  render() {
    var _this = this; 
    return (
      <View style={styles.container}> 
        <View style={styles.space} />           
         <View style={styles.content} >
          <Form ref="frm" type={LoginModel} />
          <FBLogin style={{ marginBottom: 10, }}/>        
         </View>
        <View style={styles.space} ></View>      
        <BottomNavigationBar />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  space: {
    flex: 1
  }
});

export default Login