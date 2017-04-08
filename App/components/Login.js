
import React, { Component } from 'react';
import {StyleSheet, View, Text, Picker, TouchableHighlight} from 'react-native'
//FB
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
//T comb, for forms
import t from 'tcomb-form-native'

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
        <Form ref="frm" type={LoginModel} />
         <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends", "user_events", "user_photos", "user_birthday"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
      <TouchableHighlight onPress={this.handlePress.bind(this)} ><Text> click me </Text></TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

export default Login