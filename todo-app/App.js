import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native'

class App extends React.Component {
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo :arr, text: ''})
  }
  deleteTodo= (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr})
  }


  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t} s>
        <Text style={styles.todo}
        onPress={() => {this.deleteTodo(t)}}
        >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>Bloco de notas!</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}/>
        <Button
          title="Add Todo"
          color='white'
          onPress={this.addTodo}
        />
        <View style={{marginTop: 100}}/>
        {this.renderTodos()}
      </View>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    
  },
  inputStyle:{
    height: 40,
    borderColor: "white",
    borderWidth: 1
  },
  header:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  wholeStyle:{
    backgroundColor: "#B3E5FC",
    flex:1
  },
  todo:{
    fontSize: 24,
    color: 'white'
  }
}


export default App;