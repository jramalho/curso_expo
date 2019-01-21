import React from 'react'
import { View, Text, ImageBackground, Dimensions, TextInput, Button, Alert } from 'react-native'



var bG = require('../assets/landing.jpg')

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }
    onLogin(){
        var user = this.state.username;
        var pass = this.state.password;
        Alert.alert('Credentials', `${user} + ${pass}`);
        this.props.logMeIn(user,pass)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={bG} style={styles.bG}>
                    <View style={styles.container} >
                        <TextInput
                            onChangeText={(username) => this.setState({username})}
                            placeholder="Usuário" style={styles.input} />
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Senha" style={styles.input} secureTextEntry={true}/>
                        <Button
                        title='Login' color='#3c5aa6' style={styles.input} onPress={this.onLogin.bind(this)}/>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    bG: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        heigth: Dimensions.get('window').heigth
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 100,
        height: 20,
        padding: 0,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
}

export default SignIn