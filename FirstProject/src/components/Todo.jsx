import React from "react";
import { View, StyleSheet, Text} from "react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../assets";


const Todo = ({
    name,
     id,
     created,
     modified,
     handleDelete,
     handleComplete,
     isCompleted,
     handleActivaEditar
    }) => {
    return(
        <View style={[styles.container, isCompleted && styles.todoCompleted]}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', width: 60}}>{name}</Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <CustomButton text={'Delete'} light width={50} onPress={() => handleDelete(id)}/>
                    <CustomButton text={'Edit'} light width={50} onPress={() =>handleActivaEditar(id)}/>
                    <CustomButton text={isCompleted ? 'Done' : 'Complete'} light width={65} onPress={() => handleComplete(id)}/>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 10, color: 'white', width: 60}}>Created at: {created}</Text>
                <Text style={{ fontSize: 10, color: 'white', width: 165}}>{modified === '' ? '' : 'Modified at: '+modified} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: COLORS.backgroundColor,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        gap: 5
    },
    todoCompleted:{
        backgroundColor: '#CA15AC',
        borderColor: COLORS.backgroundColor,
    }

})

export default Todo