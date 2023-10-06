import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import NumPad from './NumPad';
import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function ThirdContent() {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30
    },
    first: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: 55,
      height: 55,
      borderRadius: 50,
      marginRight: 20
    },
    icon: {
      padding: 15,
      borderRadius: 50,
      backgroundColor: theme.second,
      position: 'absolute',
      left: 35
    },
    imageContainer: {
      flexDirection: 'row'
    },
    container2: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 300
    },
    input: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      fontSize: 40
    }
  });

  return (
      <View style={styles.container}>
        <View style={styles.first}>
          <TouchableOpacity  style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg'}} />
            <View style={styles.icon}>
              <AntDesign name="wallet" size={24} color={theme.text2} />
            </View>
          </TouchableOpacity>
          <Text style={{color: theme.text, fontSize: 15}}>Benjamin Parker</Text>
          <Text style={{color: 'gray', fontSize: 13}}>**** 3294</Text>
        </View>
        <View style={styles.container2}>
          <TextInput 
            style={styles.input} 
            value='$340.00' 
            cursorColor={theme.second} 
            placeholderTextColor={theme.text}
            color={theme.text}
          />
        </View>
        <NumPad/>
      </View>
  );
}

