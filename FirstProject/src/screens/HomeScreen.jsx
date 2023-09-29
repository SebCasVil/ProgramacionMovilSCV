import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Switch, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const navigation = useNavigation()
  const [inputValue, setInputValue] = useState('')
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFIlteredCharacters] = useState([])

  useEffect(() => {
    navigation.setOptions({
      // title: 'HOME',
      // headerRight: () => <Text>NOT HELLO</Text>
    })
    fetchData()
  }, [navigation])

  const fetchData = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json()
      setCharacters(data.results)
      setFIlteredCharacters(data.results)
    }
    catch (error){
      console.error(error);
    }
  }

  const filterData = (value) => {
    if (value) {
      const filteredData = characters.filter(character => character.name.includes(value))
      setFIlteredCharacters(filteredData)
    } else {
      setFIlteredCharacters(characters)
    }
  }


  return (
    <View>
      <TextInput 
        value={inputValue}
        onChangeText={(e) => {setInputValue(e), filterData(e)}}
        style={{borderWidth: 1, padding: 10}}
      />
      <Text>{inputValue}</Text>
      {filteredCharacters.map((character) => {
        return(
          <View key={character.id}>
            <Text>Name: {character.name}</Text>
          </View>
        )
      })}
    </View>
  );
}

{/* <Header/>
<View style={styles.container}> 
  <Text>Home!</Text>
  <Switch
  trackColor={{false: 'red', true: 'green'}}
  thumbColor={isEnabled ? 'green' : 'red'}
  ios_backgroundColor="#3e3e3e"
  onValueChange={toggleSwitch}
  value={isEnabled}
  // style={{transform:[{scaleX:5},{scaleY:5}]}}
  />
  {isEnabled ? (
    <Text>Renderizado condicional</Text>
  ) : null}
  {isFetching ? <View>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View> : <Text>Ya cargó!</Text>}
  <Button title='Go to login page' onPress={() => navigation.navigate('Login', {name: 'Kir'})}/>
  <Button title='GO back!' disabled={!canGoBack()} onPress={() => goBack()}></Button>
</View> */}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});