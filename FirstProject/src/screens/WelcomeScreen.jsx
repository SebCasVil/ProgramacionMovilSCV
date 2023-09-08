import {ScrollView, StyleSheet, Text, View, Image, FlatList} from "react-native"
import Constants from 'expo-constants';
import { Card } from "../components/Card"

import {Ionicons} from '@expo/vector-icons'
import { SymptomsCard } from "../components/symptomCard";
import { Therapist } from "../components/Therapist";

//unidad1/practica9
//unidad1/tarea8

export const WelcomeScreen = () => {
    const IMAGE = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const THERAPOSTS = [{
        id:1, name:'Dr. Alice Johnson',image: IMAGE, rate:4.0, job:'Doctor',
        id:2, name:'Dr. Mike Smith',image: IMAGE, rate:5.0, job:'Physio',
        id:1, name:'Dr. Mark',image: IMAGE, rate:3.5, job:'Therapist',
        id:1, name:'Dr. Ariel',image: IMAGE, rate:5.0, job:'Speciallist', }]

    const CARDS =[
        {
        id: 1, isDarkBlue: true, text: 'Start training', iconType:'Ionicons', iconName:'alarm',
        id: 2, isDarkBlue: true, text: 'Start training2', iconType:'Ionicons', iconName:'alarm',
        id: 3, isDarkBlue: true, text: 'Start training3', iconType:'Ionicons', iconName:'alarm',
        id: 4, isDarkBlue: true, text: 'Start training4', iconType:'Ionicons', iconName:'alarm',}
    ]

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
                <SymptomsCard symptomp='none'/>
                <SymptomsCard symptomp='none'/>
                <SymptomsCard symptomp='none'/>
                <SymptomsCard symptomp='none'/>
            </ScrollView>
            <Text style={styles.textHeader}>Popular therapist</Text>
            <FlatList
                data={THERAPOSTS}
                renderItem={({item: {name, image, job, rate}}) => 
                    <Therapist name={name} image={image} job={job} rate={rate}/>
                }
                keyExtractor={(item) => item.id}
            />

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
        justifyContent: 'flex-start'
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50

    },
    titleText:{
        marginTop: 15,
        marginBottom:15,
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
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});