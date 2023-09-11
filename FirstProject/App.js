import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  // console.log(React.useState)
  // console.log(useState)

  // const state = React.useState


  // const [state, setState] = useState({
  //   name: 1,
  //   age: 23,
  //   function: () => ({
  //     regresar: 'regresar'
  //   })
  // })

  const [state, setState] = useState(1)

  // const sumaValor = () => setState(state+1)

  const sumaValor = (value) => setState(state+value)

  const [inputValue, setInputValue] = useState('Default value')


  // console.log(state, 'With React')
  console.log(state,  '**STATE  0**')
  console.log(setState,  '**STATE  1**')

  return (
    <View style={styles.container}>
    {/* <WelcomeScreen/> */}
    <TextInput 
      value={inputValue} 
      style={{borderWidth:1 , padding: 10, fontSize: 20}}
      onChangeText={(value) => setInputValue(value)}
      ></TextInput>
    <Text style={{fontSize: 40}}>{JSON.stringify(inputValue)}</Text>
    <TouchableOpacity onPress={(value)=> sumaValor(value)}>
        <Text>Change state</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
