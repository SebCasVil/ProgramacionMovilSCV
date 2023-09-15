import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";

export const User = ({ imagen, text})=> {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imagen}}></Image>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    image:{
        height: 50,
        width: 50,
        borderRadius: 25
    }
})