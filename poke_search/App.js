import React, { Component} from 'react'
import {Text, View, Platform} from 'react-native'
import {Button} from 'native-base'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>TTEXXXXXXXXXXTOOOOOOOOOOOOOOOOOO</Text>
      <Button></Button>
      </View>
    )
  }
}

const styles = {
  container:{
    flex: 1,
    marginTop: Platform.OS === 'android'? 24 : 0
  }
}