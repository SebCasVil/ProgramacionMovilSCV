import {ScrollView, StyleSheet, Text, View, Image} from "react-native"
import { Card } from "../components/Card"

import {Ionicons} from '@expo/vector-icons'

export const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name='notifications' size={24} color="black"/>
                <Image style={styles.headerImage} source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
            </View>
            <Text style={styles.titleText}>
                <Text style={{color: 'gray'}}>Hello,</Text>
                <Text>Chris 👍</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card isDarkBlue={false} text='Start' iconName='hdd' iconType='Ionicons'/>
                <Card isDarkBlue={false} text='Start' iconName='hdd' iconType='Ionicons'/>
                <Card isDarkBlue={false} text='Start' iconName='hdd' iconType='Ionicons'/>

            </ScrollView>
            <Text>What are your symptoms?</Text>
            <ScrollView>
                <View style={styles.symptompsContainer}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>I'm fine</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50

    },
    titleText:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 25
    },
    cardContainer:{
        height: 60,
        width: 60,
        backgroundColor: 'red',
        borderRadius: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: 'space-evenly'

    },
    cartText:{

    },
    symptompsContainer:{
        backgroundColor: 'blue',
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
});