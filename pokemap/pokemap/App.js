import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigIn from './src/SignIn'
import Meteor, {createContainer, Accounts} from 'react-native-meteor'



export default class App extends React.Component {
  componentWillMount(){
    Meteor.connect('ws://192.168.0.173:3000/websocket')
  }

  logMeIn = (username,password) => {
    Meteor.loginWithPassword(username,password,(error,data)=>{
        if(error){
          console.log(error)
          if(error.reason === "User not found"){
            console.log('Nao tinha esse user nao...')
            Accounts.createUser({username,password}, (error)=> {
              console.log(error);
            })
          } else{
            console.log('Tem o user SIM')
          }
        }
      })
      console.log(Meteor.userId())
    }
  
  render() {
    return (
      <View style={styles.container}>
        <SigIn logMeIn={this.logMeIn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
