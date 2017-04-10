
import React, { Component } from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native'
import { Button, BottomNavigation} from 'react-native-material-ui'

import BottomNavigationBar from './BottomNavigationBar'

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
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

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

        <View style={styles.space}><Text>fdsafsad</Text></View>        
        <BottomNavigationBar />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {    
    flex: 4
  },
  button: {
    marginBottom: 15,    
  },
  space: {
    flex: 1
  }
});

export default Profile