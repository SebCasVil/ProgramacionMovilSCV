import {useState, } from 'react';
import { handleShowError } from '../utils/showError';

export const useTodos = () => {

    
  // const TODOS = [
  //   {id:1, name: 'Task 1', isCompleted: false},
  //   {id:2, name: 'Task 2', isCompleted: false},
  // ]

  const [inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState([])
  const[editar, setEditar] = useState(false)
  const[idEditar, setidEditar] = useState('')

  const handleAddTodo = () => {
    if(inputValue === '') return(handleShowError('Debes ingresar un nombre a la tarea'))
    
    if(inputValue.length >= 15) return(handleShowError('El nombre de la tarea es muy largo'))

    const existingToDo = todos.some(todo => todo.name.toLowerCase() === inputValue.toLowerCase())
    if (existingToDo) return(handleShowError('Ya existe una tarea con ese nombre'))
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agregar un cero inicial si el mes es < 10
    const day = String(currentDate.getDate()).padStart(2, '0'); // Agregar un cero inicial si el día es < 10
  
    const formattedCurrentDate = `${year}-${month}-${day}`;

    setTodos([
        ...todos,
        {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false,
        created: formattedCurrentDate,
        modified: '',
      }
    ])
    setInputValue('')
  }


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

  const handleEditarTodo = (toDoId) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agregar un cero inicial si el mes es < 10
    const day = String(currentDate.getDate()).padStart(2, '0'); // Agregar un cero inicial si el día es < 10
  
    const formattedCurrentDate = `${year}-${month}-${day}`;

    if(inputValue === '') return(handleShowError('Debes ingresar un nombre a la tarea'))
    
    if(inputValue.length >= 15) return(handleShowError('El nombre de la tarea es muy largo'))

    const existingToDo = todos.some(todo => todo.name.toLowerCase() === inputValue.toLowerCase())
    if (existingToDo) return(handleShowError('Ya existe una tarea con ese nombre'))

    const editedArray = todos.map(todo => {
      if (todo.id === toDoId){
        return{
          ...todo,
          name: inputValue,
          modified: formattedCurrentDate
        }
      }
      return todo
    })
    setTodos(editedArray)
    setEditar(false)
    setInputValue('')
  }

  const handleActivaEditar = (toDoId) =>{
    const todoToEdit = todos.find(todo => todo.id === toDoId)
    setInputValue(todoToEdit.name)
    setidEditar(toDoId)
    setEditar(true)
  }


  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [toDoSelected, setToDoSelected] = useState();


  const handleMostrarModal = (toDoID) => {
    const todoSel = todos.find(todo => todo.id === toDoID)
    setToDoSelected(todoSel)
    setModalVisible(true)
  }




  return({
    inputValue,
    setInputValue,
    todos,
    handleAddTodo,
    handleDeleteToDo,
    handleCompleteToDo,
    handleEditarTodo,
    handleActivaEditar,
    handleMostrarModal,
    handleMostrarModal,
    setToDoSelected,
    setModalVisible,
    editar,
    idEditar,
    modalVisible,
    toDoSelected
}
  )
}