import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const Therapist = ({image, name, job, rate})=> {

    return(
        <View style={styles.container}>
            <Image  style={styles.image} source={{ uri: image}}></Image>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.rateText}>{job}</Text>
            </View>
            <View style={styles.therapistRates}>
                <AntDesign name={rate > 4 ? 'star' : 'staro'} size={24} color="blue" />
                <Text style={styles.rateText}>{rate.toFixed(1)}</Text>
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
        height: 40,
        width: 40,
        borderRadius: 50
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',

    },
    rateText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    therapistRates:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})
