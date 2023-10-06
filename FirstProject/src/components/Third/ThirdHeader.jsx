import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { THEMES } from '../../../assets';
import { Feather } from '@expo/vector-icons';

export default function ThirdHeader() {
  const { theme, toggleTheme } = useContext(AppContext);


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: 380,
      marginBottom: 40,
      marginTop: 30
    },
    button: {
      borderWidth: 1,
      borderColor: theme.first,
      width: 50, 
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    }
  });

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Ionicons name="arrow-back" size={24} color={theme.text}/>
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

