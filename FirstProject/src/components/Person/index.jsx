import React from "react"
import {View, Text} from 'react-native'

const Person = ({name, lastname, index}) => {
    return(
        <View style={{ borderWidth: 1, borderColor: index % 2 === 0 ? 'red': 'blue'}}>
            <Text style={{fontSize: 40}}>{name}</Text>
            <Text style={{fontSize: 40}}>{lastname}</Text>
        </View>
    )
}

export default Person
