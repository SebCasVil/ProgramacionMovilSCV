import { useState, useReducer } from 'react'
import { handleShowError } from '../utils/showError'

const TODO_FUNCTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  ACTIVATE_EDIT: 'ACTIVATE_EDIT',
  SET_INPUT_VALUE: 'SET_INPUT_VALUE',
}

function reducer(state, action) {
  switch (action.type) {
    case TODO_FUNCTIONS.ADD_TODO:
      if (action.payload.inputValue === '') {
        return handleShowError('Debes ingresar un nombre a la tarea')
      }
      if (action.payload.inputValue.length >= 15) {
        return handleShowError('El nombre de la tarea es muy largo')
      }
      const existingToDo = state.todos.some(
        (todo) => todo.name.toLowerCase() === action.payload.inputValue.toLowerCase()
      )
      if (existingToDo) {
        return handleShowError('Ya existe una tarea con ese nombre')
      }
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = String(currentDate.getMonth() + 1).padStart(2, '0')
      const day = String(currentDate.getDate()).padStart(2, '0')
      const formattedCurrentDate = `${year}-${month}-${day}`

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().toISOString(),
            name: action.payload.inputValue,
            isCompleted: false,
            created: formattedCurrentDate,
            modified: '',
          },
        ],
        inputValue: '',
      }

    case TODO_FUNCTIONS.DELETE_TODO:
      const filteredArray = state.todos.filter((todo) => todo.id !== action.payload.toDoId)
      return {
        ...state,
        todos: filteredArray,
      }

    case TODO_FUNCTIONS.COMPLETE_TODO:
      const mappedArray = state.todos.map((todo) => {
        if (todo.id === action.payload.toDoId) {
          return {
            ...todo,
            isCompleted: true,
          }
        }
        return todo
      })
      return {
        ...state,
        todos: mappedArray,
      }

    case TODO_FUNCTIONS.EDIT_TODO:
      const currentDate2 = new Date()
      const year2 = currentDate2.getFullYear()
      const month2 = String(currentDate2.getMonth() + 1).padStart(2, '0')
      const day2 = String(currentDate2.getDate()).padStart(2, '0')
      const formattedCurrentDate2 = `${year2}-${month2}-${day2}`

      if (action.payload.inputValue === '') {
        return handleShowError('Debes ingresar un nombre a la tarea')
      }
      if (action.payload.inputValue.length >= 15) {
        return handleShowError('El nombre de la tarea es muy largo')
      }
      const existingToDo2 = state.todos.some(
        (todo) => todo.name.toLowerCase() === action.payload.inputValue.toLowerCase()
      )
      if (existingToDo2) {
        return handleShowError('Ya existe una tarea con ese nombre')
      }

      const editedArray = state.todos.map((todo) => {
        if (todo.id === action.payload.toDoId) {
          return {
            ...todo,
            name: action.payload.inputValue,
            modified: formattedCurrentDate2,
          }
        }
        return todo
      })

      return {
        ...state,
        todos: editedArray,
        inputValue: '',
        editar: false,
        idEditar: '',
      }

    case TODO_FUNCTIONS.ACTIVATE_EDIT:
      return {
        ...state,
        inputValue: action.payload.inputValue,
        editar: true,
        idEditar: action.payload.idEditar,
      }

      case TODO_FUNCTIONS.SET_INPUT_VALUE:
        return {
          ...state,
          inputValue: action.payload,
        }

    default:
      return state
  }
}

export const useTodos = () => {
  const initialState = {
    inputValue: '',
    todos: [],
    editar: false,
    idEditar: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddTodo = () => {
    dispatch({ type: TODO_FUNCTIONS.ADD_TODO, payload: { inputValue: state.inputValue } })
  }

  const handleDeleteToDo = (toDoId) => {
    dispatch({ type: TODO_FUNCTIONS.DELETE_TODO, payload: { toDoId } })
  }

  const handleCompleteToDo = (toDoId) => {
    dispatch({ type: TODO_FUNCTIONS.COMPLETE_TODO, payload: { toDoId } })
  }

  const handleEditarTodo = (toDoId) => {
    dispatch({
      type: TODO_FUNCTIONS.EDIT_TODO,
      payload: { inputValue: state.inputValue, toDoId },
    })
  }

  const handleActivaEditar = (toDoId) => {
    const todoToEdit = state.todos.find((todo) => todo.id === toDoId)
    dispatch({ type: 'ACTIVATE_EDIT', payload: { inputValue: todoToEdit.name, idEditar: toDoId } })
  }
  

  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [toDoSelected, setToDoSelected] = useState();


  const handleMostrarModal = (toDoID) => {
    const todoSel = state.todos.find(todo => todo.id === toDoID)
    setToDoSelected(todoSel)
    setModalVisible(true)
  }

  return {
    inputValue: state.inputValue,
    setInputValue: (value) => dispatch({ type: TODO_FUNCTIONS.SET_INPUT_VALUE, payload: value }),
    todos: state.todos,
    handleAddTodo,
    handleDeleteToDo,
    handleCompleteToDo,
    handleEditarTodo,
    handleActivaEditar,
    handleMostrarModal,
    setToDoSelected,
    setModalVisible,
    editar: state.editar,
    idEditar: state.idEditar,
    modalVisible,
    toDoSelected,
  }
}
