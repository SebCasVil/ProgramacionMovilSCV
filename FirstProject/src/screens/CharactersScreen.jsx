import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';

export default function CharactersScreen() {
    const[characters, setCharacters] = useState({})

    const getApiData = async () => {
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
        }catch (error){
            console.log('ERROR: '+error)
        }

    }

    useEffect(() => {
        getApiData()
    },[])

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>CHARACTERS</Text>
      <FlatList 
          data={characters}
          renderItem={({item}) =>{
            return(
              <Card item={item}/>
            )
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272B33'
  },
});
