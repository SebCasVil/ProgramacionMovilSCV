import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets";


const CustomButton = ({text, onPress, light, width}) => {
    return(
        <TouchableOpacity style={[styles.container, width={width}, light && styles.whiteButton]} onPress={onPress}>
            <Text style={{color: light ? 'white' : 'black', }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A0139',
        borderColor: COLORS.borderColor,
        borderWidth: 1
        
    },
    whiteButton:{
        color: 'white',
    }

})


export default CustomButton