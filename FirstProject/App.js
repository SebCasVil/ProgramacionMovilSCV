import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, Alert, View } from 'react-native';
import Todo from './src/components/Todo';
import CustomButton from './src/components/CustomButton';
import TodoInput from './src/components/TodoInput';
import Constants from 'expo-constants';
import Sun from './src/components/Sun';
import { COLORS, IMAGES } from './assets';

export default function App() {


  // const TODOS = [
  //   {id:1, name: 'Task 1', isCompleted: false},
  //   {id:2, name: 'Task 2', isCompleted: false},
  // ]

  const [inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if(inputValue === '') return(handleShowError('Debes ingresar un nombre a la tarea'))

    const existingToDo = todos.some(todo => todo.name.toLowerCase() === inputValue.toLowerCase())

    if (existingToDo) return(handleShowError('Ya existe una tarea con ese nombre'))

    setTodos([
        ...todos,
        {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false
      }
    ])
    setInputValue('')
  }

const handleShowError = (error,) =>
  Alert.alert('Error', error, [
    {
      text: 'Aceptar',
      // onPress: 
    },

  ])

  const handleDeleteToDo = (toDoId) => {
    const filteredArray = todos.filter(todo => todo.id !== toDoId)
    setTodos(filteredArray)
  }

  const handleCompleteToDo = (toDoId) => {
    const mappedArray = todos.map(todo => {
      if (todo.id === toDoId){
        return{
          ...todo,
          isCompleted: true
        }
      }
      return todo
    })
    setTodos(mappedArray)
  }
  return (
    <ImageBackground 
      source={IMAGES.backgroundSun}
      style={{ flex: 1, resizeMode: 'cover' }}
      >
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>To do list</Text>
            <View style={{flexDirection: 'row', marginTop: 20, gap:20}}>
              <TodoInput 
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
                />
              <CustomButton onPress={handleAddTodo} text={'Add Task'} light width={80}/>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                  data={todos}
                  keyExtractor={(item) => item.id}
                  renderItem={(({ item: { name, id, isCompleted } }) => 
                  <View style={styles.toDo}>
                    <Sun/>
                    <Todo name={name} handleDelete={handleDeleteToDo} id={id} handleComplete={handleCompleteToDo} isCompleted={isCompleted}/>
                  </View>  )}
                  style={{width: '100%'}}
              />
            </View>
        </View>
        <StatusBar style='light'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight+300,
  },
  listContainer:{
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'flex-start',
    color: 'white',
    backgroundColor: COLORS.backgroundColor,
    borderColor: COLORS.borderColor,
    width: '100%',
    height: 250,
    marginTop: 20,
    paddingHorizontal: 5
  },
  toDo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    gap: 10,
    marginTop: 10
  }
});
