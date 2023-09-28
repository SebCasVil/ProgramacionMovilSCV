import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Switch, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import Header from '../components/Header';

export default function HomeScreen({navigation}) {
  const {canGoBack, goBack} = navigation
  const [isEnabled, setIsEnabled] = useState(false);

  const[isFetching,setIsFetching] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true)
        const res = await fetch("https://rickandmortyapi.com/api/character")
        await delay(5000)
        setIsFetching(false)
      }
      catch (error){
        console.error(error);
      }
    }

    fetchData()
  }, [])

  return (
    <View>
    <Header/>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});