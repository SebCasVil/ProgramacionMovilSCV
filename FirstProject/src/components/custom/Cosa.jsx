import React from "react"
import {View, Text, StyleSheet, Image} from 'react-native'

const Cosa = ({primero, segundo, index, image}) => {
    return(
        <View>
            <View style={styles.container}>
                <Image source={image} style={styles.imagenPerfil}></Image>
                <View style={styles.segundo}>
                    <Text style={styles.texto}>{primero} </Text>
                    <Text>{segundo}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#3D4B6D',
        borderRadius: 25,
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        gap: 20
    },segundo: {
        flexDirection: 'column'
    },
    texto: {
        fontSize: 25 ,
        color: 'aliceblue',
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

  
export default Cosa