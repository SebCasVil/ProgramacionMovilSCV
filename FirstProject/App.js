import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './src/components/Todo';
import CustomButton from './src/components/CustomButton';

export default function App() {


  const TODOS = [
    {id:1, name: 'Task 1', isCompleted: false},
    {id:2, name: 'Task 2', isCompleted: false},
  ]

  const [inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if(inputValue === '') return

    setTodos([
        ...todos,
        {
        id: new Date().toISOString,
        name: inputValue,
        isCompleted: false
      },
    ])
    setInputValue('')
  }


  return (
    <View style={styles.container}>
      {/* <WelcomeScreen/> */}
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Todo list</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TextInput 
          style={{borderWidth:1 , padding: 10, fontSize: 20, flex: 1, borderRadius: 5}}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          ></TextInput>
          <CustomButton onPress={handleAddTodo} text={'Add Task'}/>
      </View>
      <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={(({ item: {name}}) =>{ <Todo text/>})}


      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
});
