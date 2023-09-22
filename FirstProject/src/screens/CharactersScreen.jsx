import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CharactersScreen() {
    const[input, setInput] = useState('')
    const[input2, setInput2] = useState('')

    const getApiData = async () => {
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            console.log(data)
        }catch (error){
            console.log('ERROR: '+error)
        }

    }

    useEffect(() => {
        getApiData()
    })

  return (
    <View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
