import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function NumPad() {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      width: 100,
      height: 70,
      backgroundColor: theme.first,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2,
      borderRadius: 25
    },
    buttonText: {
      fontSize: 24,
      color: theme.text
    },
    buttonSend: {
      width: 300,
      height: 70,
      backgroundColor: theme.second,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2,
      marginTop: 20,
      borderRadius: 25
    }
  });

  return (
      <View style={styles.container}>
        <View style={styles.row}>
            {[1, 2, 3].map((number) => (
            <TouchableOpacity key={number} style={styles.button}>
                <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
            ))}
        </View>
        <View style={styles.row}>
            {[4, 5, 6].map((number) => (
            <TouchableOpacity key={number} style={styles.button}>
                <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
            ))}
        </View>
        <View style={styles.row}>
            {[7, 8, 9].map((number) => (
            <TouchableOpacity key={number} style={styles.button}>
                <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
            ))}
        </View>
        <View style={styles.row}>
            {['<', 0, '.'].map((number) => (
            <TouchableOpacity key={number} style={styles.button}>
                <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity style={styles.buttonSend}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: theme.text2}}>Send</Text>
        </TouchableOpacity>

      </View>
  );
}

