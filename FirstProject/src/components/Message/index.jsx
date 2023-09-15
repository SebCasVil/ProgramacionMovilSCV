import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const Message = ({name, lastname, imagen, hora, mensaje})=> {

    return(
        <View style={styles.container}>
            <Image  style={styles.image} source={{ uri: imagen}}></Image>
            <View style={styles.message}>
                <Text style={styles.name}>{name} {lastname}</Text>
                <Text>{mensaje}</Text>
            </View>
            <View style={styles.hora}>
                <Text>{hora}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 10
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',

    },
    message: {
        fontSize: 15,
        fontWeight: 'bold',

    },hora:{
        justyifyContent: 'flex-start',
        height: 50
    }
})