import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function CustomButton({text, role, onPress}) {
  return (
    <TouchableOpacity 
    style={[styles.container, role === "number" ? styles.numberContainer : role === "operator" ? styles.operatorContainer : styles.operatorContainer2]}
    onPress={onPress}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 2.5
  },
  numberContainer: {
    backgroundColor: '#525F7D'
  },
  operatorContainer: {
    backgroundColor: '#B05FFF'
  },
  operatorContainer2: {
    backgroundColor: '#D57C52'
  }

});