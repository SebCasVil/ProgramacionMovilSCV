import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({text, text2, navigation }) => {
    return(
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()}/>
            <View style={{alignItems: 'center', marginLeft: 50}}>
                <Text style={{color:'black', fontSize: 30, fontWeight: 'bold' }}>{text}</Text>
                <Text style={{color:'black', }}>{text2}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ECDCC2',
        padding: 20
        
    },

})


export default CustomHeader