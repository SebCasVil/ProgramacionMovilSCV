import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ThirdHeader() {


  return (
      <View style={styles.container}>
        <View style={styles.button}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Send</Text>
        <View style={styles.button}>
            <Ionicons name="chatbubbles" size={24} color="white" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 380,
    marginBottom: 40
  },
  button: {
    borderWidth: 1,
    borderColor: '#1F1F1F',
    width: 50, 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
});
