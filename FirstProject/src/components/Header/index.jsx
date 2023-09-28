import {Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    const {canGoBack, goBack} = useNavigation()
 return (
    <View style={{ backgroundColor: 'red', paddingVertical: 20, flexDirection: 'row', gap: 10, padding: 10}}> 
        <AntDesign name="banckward" size={24} color="black" disabled={!canGoBack()} onPress={() => goBack()}/>
        <Text style={{color: 'white'}}>Header!</Text>
    </View>
  );
}