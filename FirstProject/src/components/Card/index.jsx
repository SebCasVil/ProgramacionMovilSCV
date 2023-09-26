import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card({item, onPress}) {
  const[episode, setEpisode] = useState(JSON)

  const getApiData = async () => {
    try{
        const response = await fetch(item.episode[0])
        const data = await response.json()
        setEpisode(data)
    }catch (error){
        console.log('ERROR: '+error)
    }

  }
  const icono = (status) =>{
    if (status === 'Dead') return( <MaterialCommunityIcons name="emoticon-dead" size={15} color="red" />)
    else if (status === 'Alive') return(<MaterialCommunityIcons name="emoticon-happy" size={15} color="green" />)
    else if (status === 'unknown') return(<MaterialCommunityIcons name="progress-question" size={15} color="black" />)
  }
  useEffect(() => {
    getApiData()
  },[])

  return (
    <TouchableOpacity onPress={onPress ? onPress : null}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image source={{uri: item.image}} style={{height: 150, width: 150, borderRadius: 10}}/>
          <View style={{gap: 5, width: 190}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
            <View style={{flexDirection: 'row', gap: 5,  alignItems: 'center'}}>
              {icono(item.status)}
              <Text style={{color: 'white' }}>{item.status} - {item.species}</Text>
            </View>
            <View style={{width: 150}}>
              <Text style={{color: '#9B9D9E'}}>Last known location:</Text>
              <Text style={{color: 'white'}}>{item.location.name}</Text>
              <Text style={{color: '#9B9D9E'}}>First seen in:</Text>
              <Text style={{color: 'white'}}>{episode.name}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#3C3E44',
    borderRadius: 10,
    margin: 5,
  },
});