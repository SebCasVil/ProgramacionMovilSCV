import {ScrollView, StyleSheet, Text, View, Image, FlatList} from "react-native"
import Constants from 'expo-constants';

import { Card } from "../components/WelcomeScreen/Card"
import {Ionicons} from '@expo/vector-icons'
import {SymptomsCard} from "../components/WelcomeScreen/SymptomsCard"
import { Therapist } from "../components/WelcomeScreen/Therapist";
import { MenuBar } from "../components/WelcomeScreen/MenuBar";

import { THERAPOSTS, IMAGE, CARDS } from "../../constants";

//unidad1/practica9
//unidad1/tarea8

export const WelcomeScreen = () => {
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Ionicons name='notifications' size={24} color="black"/>
                <Image style={styles.headerImage} source={{ uri: IMAGE}}/>
            </View>

            <Text style={styles.titleText}>
                <Text style={{color: 'gray'}}>Hello,</Text>
                <Text>Chris 👍</Text>
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20}}>
                {CARDS.map(({id, iconName, text, iconType, isDarkBlue}) => 
                <Card key={id} isDarkBlue={isDarkBlue} iconName={iconName} text={text} iconType={iconType}/>)}

            </ScrollView>

            <Text style={styles.textHeader}>What are your symptoms?</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20, gap: 10}}>
                <SymptomsCard symptomp='none'/>
                <SymptomsCard symptomp='fever'/>
                <SymptomsCard symptomp='Notihing'/>
            </ScrollView>

            <Text style={styles.textHeader}>Popular therapist</Text>

            <FlatList
                data={THERAPOSTS}
                renderItem={({item: {name, image, job, rate}}) => 
                    <Therapist name={name} image={image} job={job} rate={rate}/>
                }
                keyExtractor={(item) => item.id}
                style={{height: 150}}
            />
            
            <MenuBar/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight+10,
        paddingHorizontal: 15,
        width:400,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50

    },
    titleText:{
        marginTop: 5,
        marginBottom:5,
        fontSize: 30,
        fontWeight: '900',
        paddingHorizontal: 20
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
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});