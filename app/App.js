import React, {Component} from 'react'
import {Image,StyleSheet, View, Text} from 'react-native'

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Veiw style = { styles.imageContainer}>
                    <Image style={styles.cardImage} source={require('../')}></Image>
                </Veiw>
            </View>
         </View>
        )
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>{props.children}</View>
)

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent:'center',
        alignItems: 'center'
    },
    example: {
        marginBottom : 15,
    },
})
 export default App;