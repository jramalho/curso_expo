import React from 'react'
import { Text, View, ImageBackground, Button } from 'react-native'

var Bg = require('../assets/landing.jpg');

class Landing extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Bg} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                    <Text style={styles.tittleStyle}
                    >Bem vindo ao POKESEARCH</Text>
                    <Button block={true} style={styles.buttonStyle} title='Começe a procurar' onPress={() =>this.props.switchScreen('search')} ></Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = {
    container:{
        flex: 1
    },
    tittleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    buttonStyle: {
        marginTop: 100
    },
    buttonText:{
        color: 'white'
    }
    
}
export default Landing