import React from 'react'
import {View, Text} from 'react-native'
import { Toolbar, ListItem, Icon , Input, Button} from 'react-native-material-ui'
import axios from 'axios'
import PokeLoader from './PokeLoader'
import SearchBody from './SearchBody'



var B_URL = "http://pokeapi.co/api/v2/pokemon/"
class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            pokeSearch:'',
            onCall: 'true',
            data:{}
        }
        this.searchPoke= this.searchPoke.bind(this)
        this.renderBody = this.renderBody.bind(this)
    }


    searchPoke = () => {
        this.setState({onCall: true})
        var self = this
        axios.get(`${B_URL}${this.state.pokeSearch.toLowerCase()}`)
        .then(function(response){
            self.setState({data: response.data })
            self.setState({onCall: false})
        })
        .catch(function(e){
            console.log(e)
        })
    }
  
  
    renderBody = () => {
        if(this.state.onCall){
            return (
                <PokeLoader/>
            )
        } else {
            return (
                <SearchBody data={this.state.data}/>
            )
        }
    }


    render(){
        return(
            <View style={{flex:1}} >
            <Toolbar
                leftElement='menu' centerElement='Searchable'  searchable={{
                    autoFocus: true,
                    placeholder: 'Digite o pokemon desejado',
                    onChangeText: v => {
                        this.setState({ pokeSearch: v})
                    },
                    onSubmitEditing: () => {
                        this.searchPoke()
                    }
                }}  
            >
            </Toolbar>
            {this.renderBody()}
            </View>
        )
    }
}

export default Search