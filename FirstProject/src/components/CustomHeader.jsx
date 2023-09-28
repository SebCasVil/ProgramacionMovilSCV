import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets";
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({text, navigation }) => {
    return(
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()}/>
            <Text style={{color:'white', }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2A0139',
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        padding: 20
        
    },

})


export default CustomHeader