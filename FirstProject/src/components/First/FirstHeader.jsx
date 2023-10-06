import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEMES } from '../../../assets';
import { Feather } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';


export default function FirstHeader() {

  const { theme, toggleTheme } = useContext(AppContext);
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Image  style={styles.button} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg'}}/>
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Send</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <TouchableOpacity style={styles.button} onPress={toggleTheme}>
              <Feather name={theme === THEMES.DARKMODE ? 'moon' : 'sun' } size={24} color={theme.text}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Ionicons name="chatbubbles" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 400,
    marginTop: 30
  },
  button: {
    borderWidth: 1,
    borderColor: '#1F1F1F',
    width: 50, 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
});
