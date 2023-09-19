import React from "react";
import { StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import { COLORS } from "../../assets";


const TodoInput = ({value, onChangeText}) => {
    return(
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        borderRadius: 5,
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: 'white',
        backgroundColor: COLORS.backgroundColor,
        borderColor: COLORS.borderColor
    },

})


export default TodoInput