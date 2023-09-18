import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacity } from "react-native";


const TodoInput = ({value, onChangeText}) => {
    return(
        <TouchableOpacity style={[styles.container, light && styles.whiteButton]} onPress={onPress}>
            <Text style={{color: light ? 'white' : 'auto', }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A6355'
    },

})


export default TodoInput