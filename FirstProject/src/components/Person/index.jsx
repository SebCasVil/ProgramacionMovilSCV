import React from "react"
import {View, Text, StyleSheet, Image} from 'react-native'
import { antenaImage } from "../../../assets"

const Person = ({name, lastname, index, image}) => {
    return(
        <View>
            <View style={styles.imageContainer}>
                <Image source={antenaImage} style={styles.image}></Image>
            </View>
            <View style={styles.container}>
                <Text style={styles.texto}>{name} {lastname}</Text>
                <Image source={image} style={styles.imagenPerfil}></Image>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        borderWidth: 8,
        backgroundColor: '#2D2D2D',
        borderColor: '#5C5C5C',
        borderRadius: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },texto: {
        fontSize: 25 ,
        color: '#27E01F',
        fontFamily: 'Roboto'
    },imageContainer: {
        overflow: 'hidden',
        height: 40,
    },
    image: {
        width: 50,
        height: 50,
    },
    imagenPerfil: {
        width: 50,  
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ABABAB',
        borderWidth: 5,
        borderColor: '#525252'
    }
  });

  
export default Person