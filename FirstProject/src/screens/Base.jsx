import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, ScrollView, Image, Text } from 'react-native';
import { MenuBar } from '../components/MenuBar';
import { IMAGE, USERS } from '../../constants';
import { Message } from '../components/Message';
import { User } from '../components/User';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons';
import MenuHeader from '../components/MenuHeader';
import CenterBar from '../components/Centerbar';

export default function Base() {
  return (
    <View style={styles.container}>
        <MenuHeader/>
        <View style={styles.tres}>
            <Text style={{fontWeight: 'bold'}}>Stories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20, gap: 10}}>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
                <User text='Ejemplo' imagen={IMAGE}/>
            </ScrollView>
        </View>
        <CenterBar/>
        <FlatList
            data={USERS}
            renderItem={({item: {name, lastname, imagen, hora, mensaje}}) => 
                <Message name={name} lastname={lastname} imagen={imagen} hora={hora} mensaje={mensaje}/>
            }
            keyExtractor={(item) => item.id}
            style={{height: 150}}
        />
        <MenuBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight+10,
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
headerContent:
{flexDirection: 'row', 
alignItems: 'center', 
justifyContent: 'center', 
gap: 10},
tres: {
    gap: 10,
    padding: 10
}

});