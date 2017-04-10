
import React, { Component } from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native'
import {connect} from 'react-redux'
import { Button, BottomNavigation} from 'react-native-material-ui'
class BottomNavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log('button', Button);
    return (
      <View >
          <BottomNavigation active={this.state.active} hidden={false} >
            <BottomNavigation.Action
                key="today"
                icon="today"
                label="Login"
                onPress={() => this.props.navigator.push({title: "Login"})}
                // onPress={() => this.setState({ active: 'today' })}
            />
            <BottomNavigation.Action
                key="people"
                icon="people"
                label="Profile"
                onPress={() => this.props.navigator.push({title: "Profile"})}
                // onPress={() => this.setState({ active: 'people' })}
            />
            <BottomNavigation.Action
                key="bookmark-border"
                icon="bookmark-border"
                label="Game"
                onPress={() => this.props.navigator.push({title: "Game"})}
                // onPress={() => this.setState({ active: 'bookmark-border' })}
            />
            <BottomNavigation.Action
                key="settings"
                icon="settings"
                label="Settings"
                // onPress={() => this.setState({ active: 'settings' })}
            />
          </BottomNavigation>
        </View>
    )
  }
}


function mapStateToProps(state){
  console.log('state in bottom', state);
  return {
    navigator: state.navigator
  }
}


export default connect(mapStateToProps)(BottomNavigationBar)