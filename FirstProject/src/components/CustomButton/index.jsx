import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function CustomButton({text, role, onPress}) {
  return (
    <TouchableOpacity 
    style={[styles.container, role === "number" ? styles.numberContainer : styles.operatorContainer]}
    onPress={onPress}>
        <Text style={{fontSize: 20}}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 15,
    margin: 2.5
  },
  numberContainer: {
    backgroundColor: 'blue'
  },
  operatorContainer: {
    backgroundColor: 'gray'
  }

});