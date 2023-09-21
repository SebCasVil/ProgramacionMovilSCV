import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Todo from './src/components/Todo';
import CustomButton from './src/components/CustomButton';
import TodoInput from './src/components/TodoInput';
import Constants from 'expo-constants';
import Sun from './src/components/Sun';
import { COLORS, IMAGES } from './assets';
import { useTodos } from './src/hooks/useTodos';
import ModalTodo from './src/components/ModalTodo';

export default function App() {

  const {
    inputValue,
    setInputValue,
    todos,
    handleAddTodo,
    handleDeleteToDo,
    handleCompleteToDo,
    handleEditarTodo,
    handleActivaEditar,
    handleMostrarModal,
    setToDoSelected,
    setModalVisible,
    editar,
    idEditar,
    modalVisible,
    toDoSelected
  } = useTodos()


  return (
    <ImageBackground 
      source={IMAGES.backgroundSun}
      style={{ flex: 1, resizeMode: 'cover' }}
      >
      <ModalTodo setModalVisible={setModalVisible} modalVisible={modalVisible} toDo={toDoSelected ? toDoSelected : ''}/>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>To do list</Text>
            <View style={{flexDirection: 'row', marginTop: 20, gap:20}}>
              <TodoInput 
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
                />
              <CustomButton onPress={editar ? () => handleEditarTodo(idEditar) : handleAddTodo} text={editar ? 'Edit task' : 'Add Task'} light width={80}/>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                  data={todos}
                  keyExtractor={(item) => item.id}
                  renderItem={(({ item: { name, id, isCompleted, created, modified } }) => 
                  <View style={styles.toDo}>
                    <Sun/>
                    <Todo name={name} created={created} modified={modified} handleDelete={handleDeleteToDo} id={id} handleComplete={handleCompleteToDo} isCompleted={isCompleted} handleActivaEditar={handleActivaEditar} handleMostrarModal={handleMostrarModal}/>
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
    width: '100%',
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
