
import React, { Component } from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native'

import { Button, BottomNavigation} from 'react-native-material-ui'
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomNames: [
        'Eddie',
        'Jeff',
        'Mike',
        'Mycah'
      ],

      currentRoom: 'Eddie'
    }

  }

  render() {
    console.log('button', Button);
    return (
      <View >

        <Text> Welcome User! </Text>


        <Picker style={styles.picker}
        selectedValue={''}
        onValueChange={(room) => this.setState({currentRoom: room})}>
        {
          this.state.roomNames.map((roomName) => {
            return (<Picker.Item key={roomName} label={roomName} value={roomName} />)
          })
        }
        </Picker>
        <View style={styles.button}>
         <Button raised primary text="Join Game!" />
        </View>
         <Button raised accent text="Spectate!" />       

        <View style={styles.bottomNavigation}>
          <BottomNavigation  active={this.state.active} hidden={false} >
            <BottomNavigation.Action
                key="today"
                icon="today"
                label="Today"
                onPress={() => this.setState({ active: 'today' })}
            />
            <BottomNavigation.Action
                key="people"
                icon="people"
                label="People"
                onPress={() => this.setState({ active: 'people' })}
            />
            <BottomNavigation.Action
                key="bookmark-border"
                icon="bookmark-border"
                label="Bookmark"
                onPress={() => this.setState({ active: 'bookmark-border' })}
            />
            <BottomNavigation.Action
                key="settings"
                icon="settings"
                label="Settings"
                onPress={() => this.setState({ active: 'settings' })}
            />
          </BottomNavigation>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    marginTop: -80
  },
  button: {
    marginBottom: 10
  },
  bottomNavigation: {
    flex: 1
  }
});

export default Profile