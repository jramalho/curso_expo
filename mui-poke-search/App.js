import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Landing from './src/Landing'
import Search from './src/Search'

export default class App extends React.Component {
  state = {
    cS : "landing"
  }
  renderScreen = () => {
    if (this.state.cS === "landing") {
      return (
        <Landing switchScreen={this.switchScreen} />
      )
    } else if (this.state.cS === "search") {
      return (
        <Search />
      )
    }
  }

  switchScreen = (cS) => {
    this.setState({ cS })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tittleStyle: {
    color: 'blue',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
});
