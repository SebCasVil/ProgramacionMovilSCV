import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CharacterDetailScreen({ route }) {
  const { item } = route.params;

  const icono = (status) =>{
    if (status === 'Dead') return( <MaterialCommunityIcons name="emoticon-dead" size={15} color="red" />)
    else if (status === 'Alive') return(<MaterialCommunityIcons name="emoticon-happy" size={15} color="green" />)
    else if (status === 'unknown') return(<MaterialCommunityIcons name="progress-question" size={15} color="black" />)
  }

  return (
    <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Status: </Text>
            <Text style={styles.value}> {icono(item.status)} {item.status}</Text>
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Species: </Text>
            <Text style={styles.value}>{item.species}</Text>
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Type: </Text>
            <Text style={styles.value}>{item.type}</Text>
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Gender: </Text>
            <Text style={styles.value}>{item.gender}</Text>
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Origin: </Text>
            <Text style={styles.value}>{item.origin.name}</Text>
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'flex-end'}}>
            <Text style={styles.label}>Location: </Text>
            <Text style={styles.value}>{item.location.name}</Text>
        </View>

      <Text style={{ ...styles.name, fontSize: 20, marginTop: 30 }}>Episodes:</Text>
      <ScrollView horizontal>
        {item.episode.map((episode, index) => (
          <TouchableOpacity
            key={index}
            style={styles.episodeItem}
          >
            <Text>Episode {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    padding: 16,
    backgroundColor: '#3C3E44',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
  label: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'white'
  },
  value: {
    fontSize: 15,
    color: 'white'
  },
  episodeItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 40
  },
});