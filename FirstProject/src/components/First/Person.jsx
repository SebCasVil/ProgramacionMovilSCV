import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Person({image, account, name}) {
  const { theme } = useContext(AppContext);

  return (
      <TouchableOpacity style={[styles.container]}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={{gap: 10, marginRight: 40}}>
            <Text style={{color: theme.text, fontSize:20}}>{name}</Text>
            <Text style={{color: theme.text}}>**** {account}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color={theme.text} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    marginVertical: 2.5
  },
  image:{
    width: 55,
    height: 55,
    borderRadius: 50,
  },
});
