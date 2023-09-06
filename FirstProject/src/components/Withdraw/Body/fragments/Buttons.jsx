import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import React from 'react';

const Buttons = ({ title = '', icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {title !== '' ? (
        <Text style={styles.text}>{title}</Text>
      ) : (
        <Ionicons name={icon} size={24} color='black' />
      )}
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    borderRadius: 45,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
