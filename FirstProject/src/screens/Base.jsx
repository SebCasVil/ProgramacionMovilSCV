import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native"
import Constants from 'expo-constants';

import { Card } from "../components/WelcomeScreen/Card"
import {AntDesign} from '@expo/vector-icons'
import {TagCard} from "../components/WelcomeScreen/TagCard"
import { MenuBar } from "../components/WelcomeScreen/MenuBar";

import { IMAGE, CARDS, COLORS } from "../../constants";

//unidad1/practica9
//unidad1/tarea8

export const Base = () => {
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.textHeader}>Discover</Text>
                    <Text style={{ fontSize: 20,}}>your products</Text>
                </View>
                <Image style={styles.headerImage} source={{ uri: IMAGE}}/>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.search}>
                    <AntDesign name="search1" color={'black'} size={24}/>
                    <TextInput placeholder="Buscar"/>
                </View>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <AntDesign name='bars' size={30} color='black' />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TagCard tag='none'/>
                <TagCard tag='fever'/>
                <TagCard tag='Notihing'/>
            </ScrollView>

            <Text style={styles.textHeader}>Popular products</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
                {CARDS.map(({id, imagen, tag, name, precio}) => 
                <View key={id} style={{marginRight: 20}}>
                    <Card imagen={imagen} tag={tag} name={name} precio={precio}/>
                </View>)}

            </ScrollView>
            <MenuBar/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight+10,
        backgroundColor: COLORS.gray,
        justifyContent: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        flex: 1,
        padding: 20,
        gap: 10
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    search: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'white',
        height: 50,
        width: 260,
        borderRadius: 20,
        padding: 10,
        gap: 10
    },

    titleText:{
        marginTop: 5,
        marginBottom:5,
        fontSize: 30,
        fontWeight: '900',
    },
    cardContainer:{
        height: 60,
        width: 60,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        width: 50, 
        height: 50, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: COLORS.yellow
      },
});