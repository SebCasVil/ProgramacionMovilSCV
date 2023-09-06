import {StyleSheet, Text, View} from "react-native"

import {Ionicons} from '@expo/vector-icons'

export const Card = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cardContainer:{
        height: 60,
        width: 60,
        backgroundColor: 'red',
        borderRadius: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: 'space-evenly'

    },
});