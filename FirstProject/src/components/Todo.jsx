import React from "react";
import { View, StyleSheet, Text} from "react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../assets";


const Todo = ({
    name,
     id, 
     handleDelete,
     handleComplete,
     isCompleted
    }) => {
    return(
        <View style={[styles.container, isCompleted && styles.todoCompleted]}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', width: 55}}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
                <CustomButton text={'Delete'} light width={50} onPress={() => handleDelete(id)}/>
                <CustomButton text={'Edit'} light width={50}/>
                <CustomButton text={isCompleted ? 'Done' : 'Complete'} light width={65} onPress={() => handleComplete(id)}/>
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
    todoCompleted:{
        backgroundColor: '#CA15AC',
        borderColor: COLORS.backgroundColor,
    }

})

export default Todo