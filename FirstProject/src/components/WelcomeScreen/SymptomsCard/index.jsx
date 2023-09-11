import React from "react";
import { Text, View, StyleSheet} from "react-native";


export const SymptomsCard = ({symptomp})=> {

    return(

<View style={styles.symptomsContainer}>
    <Text style={styles.text}>{symptomp === 'none' ? '😊' : symptomp === 'fever' ? '🥲' : '🫥' } {symptomp === 'none' ? 'Im fine' : symptomp === 'fever' ? 'Fever' : 'Nothing' }</Text>
</View>
    )
}

const styles = StyleSheet.create({
    symptomsContainer:{
        backgroundColor: '#e6ebff',
        width: 125,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop:10,
        height: 50,
        marginHorizontal: 5
    },
    text: {
        fontSize: 18, 
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
})
