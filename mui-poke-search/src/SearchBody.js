import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { ListItem, List } from 'react-native-material-ui'

class SearchBody extends React.Component {
    render() {
        var poke = this.props.data
        const pab = poke.abilities
        if (!poke) {
            return <View></View>
        } else {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <Text style={styles.header}>#{poke.id} - {poke.name}</Text>
                    <View style={styles.viewStyle}>
                        <Image source={{ uri: poke.sprites.front_default }} style={styles.img} />
                    </View>
                    <View style={styles.info}>
                        <ListItem Divider centerElement={{
                            primaryText: 'SIZE'
                        }}/>
                        <ListItem Divider centerElement={{
                            primaryText: `WEIGHt - ${poke.weight}`
                        }}/>
                        <ListItem  centerElement={{
                            primaryText: `HEIGHT - ${poke.height}`
                        }}/>
                        <ListItem Divider centerElement={{
                            primaryText: 'Abilities'
                        }}/>
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}

export default SearchBody