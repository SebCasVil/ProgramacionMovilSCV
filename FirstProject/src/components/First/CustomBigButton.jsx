import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function CustomBigButton({text, icon}) {
  const { theme } = useContext(AppContext);
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 85,
      width: 110,
      borderRadius: 30,
      backgroundColor: theme.first
  
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
        <MaterialCommunityIcons name={icon} size={24} color={theme.text} />
        <Text style={{color:  theme.second }}>{text}</Text>
    </TouchableOpacity>
  );
}

