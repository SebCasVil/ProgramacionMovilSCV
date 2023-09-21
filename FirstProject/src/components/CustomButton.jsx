import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets";
import { AntDesign } from '@expo/vector-icons';


const CustomButton = ({text, onPress, light, width}) => {
    return(
        <TouchableOpacity style={[styles.container, width={width}, light && styles.whiteButton]} onPress={onPress}>
            {text === 'Add Task' || text === 'Edit task' ? <Text style={{color: light ? 'white' : 'black', }}>{text}</Text> :<AntDesign name={text} size={25} color={light ? 'white' : 'black'}  />}
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
        borderWidth: 1,
        padding: 5
        
    },
    whiteButton:{
        color: 'white',
    }

})


export default CustomButton