import React from "react";
import { View, StyleSheet, Text} from "react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../assets";


const Todo = ({name}) => {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', width: 120}}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
                <CustomButton text={'Delete'} light width={50}/>
                <CustomButton text={'Edit'} light width={50}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: COLORS.backgroundColor,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
    },

})

export default Todo