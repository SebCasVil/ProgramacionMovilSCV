import {StyleSheet, Text, View} from "react-native"

import { Ionicons, AntDesign} from '@expo/vector-icons';

export const Card = ( isDarkBlue, text, iconName, iconType) => {
    const customIconColor = isDarkBlue ? 'black' : 'white'
    const CustomIcon = iconType ==='Ionicons' ? <Ionicons name={iconName} size={30} color={customIconColor}/> : <AntDesign name={iconName} size={30} color={customIconColor}/>
    return(
        <View style={styles.container}>
            <View style={[styles.cardContainer, isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight]}>
                {CustomIcon}
                <Text style={ isDarkBlue ? styles.cardTextDark : styles.cardTextLight}>Texto</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cardContainer:{
        height: 200,
        width: 220,
        borderRadius: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: 'space-evenly'

    },
    cardContainerDark:{
        backgroundColor: 'blue'
    },
    cardContainerLight:{
        backgroundColor: 'white'
    },
    cardTextDark:{
        color: 'white'
    },
    cardTextLight:{
        color: 'black'
    },
});