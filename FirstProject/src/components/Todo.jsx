import React from "react";
import { View } from "react-native";


const Todo = ({name}) => {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}></Text>
        </View>
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
    whiteButton:{
        color: 'white',
        borderColor: 'white'
    }

})

export default Todo