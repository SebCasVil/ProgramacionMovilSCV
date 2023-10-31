import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { useMemo, useReducer, useState } from 'react';


export default function App() {

  const [counter, setCounter] = useState(0)
  const [newcounter, setNewcounter] = useState(0)

  // const multiplyCounter = () => {
  //   console.log("COunter")
  //   // setCounter(counter*2)
  //   return counter * 2
  // }

  const multiplyCounter = useMemo(() => {
    console.log("COunter")
    // setCounter(counter*2)
    return counter * 2

  }, [counter])

  const sayHello = () => {
    console.log("SAY HELLO")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={{fontSize: 40}}>Multiply Counter: {multiplyCounter}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1, padding: 20}} onPress={() => setCounter(counter + 1)}>
        <Text>Increment by one</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1, padding: 20}} onPress={() => setNewcounter(newcounter + 1)}>
        <Text>Increment new counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1, padding: 20}} onPress={sayHello()}>
        <Text>Say Hello</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{borderWidth: 1, padding: 20}} onPress={() => multiplyCounter()}>
        <Text>Multiply counter</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10
  },
  row : {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 20
  },
  result: {
    fontSize: 80,
    textAlign: 'right'
  },
  text : {
    fontSize: 80,
    textAlign: 'right',
    width: '100%',
    marginRight: 100
  },
    igual: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 80,
    borderRadius: 50,
    margin: 2.5,
    backgroundColor: '#B05FFF'
  },
});
