import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputValue: '',
    todos: [],
    editar: false,
    idEditar: '',
    modalVisible: false,
    toDoSelected: ''
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    handleAddTodo: (state, action) => {
        if(state.inputValue === '') return(handleShowError('Debes ingresar un nombre a la tarea'))
    
        if(state.inputValue.length >= 15) return(handleShowError('El nombre de la tarea es muy largo'))
    
        const existingToDo = state.todos.some(todo => todo.name.toLowerCase() === state.inputValue.toLowerCase())
        if (existingToDo) return(handleShowError('Ya existe una tarea con ese nombre'))
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agregar un cero inicial si el mes es < 10
        const day = String(currentDate.getDate()).padStart(2, '0'); // Agregar un cero inicial si el día es < 10
      
        const formattedCurrentDate = `${year}-${month}-${day}`;
    
        state.todos = ([
            ...state.todos,
            {
            id: new Date().toISOString(),
            name: state.inputValue,
            isCompleted: false,
            created: formattedCurrentDate,
            modified: '',
          }
        ])
        state.inputValue = ''
    },

    handleDeleteToDo: (state, action) => {
        const filteredArray = state.todos.filter(todo => todo.id !== action.payload)
        state.todos = filteredArray
      },

    handleCompleteToDo: (state, action) => {
        const mappedArray = state.todos.map(todo => {
          if (todo.id === action.payload){
            return{
              ...todo,
              isCompleted: true
            }
          }
          return todo
        })
        state.todos = mappedArray
      },

      handleEditarTodo: (state, action) => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agregar un cero inicial si el mes es < 10
        const day = String(currentDate.getDate()).padStart(2, '0'); // Agregar un cero inicial si el día es < 10
      
        const formattedCurrentDate = `${year}-${month}-${day}`;
    
        if(state.inputValue === '') return(handleShowError('Debes ingresar un nombre a la tarea'))
        
        if(state.inputValue.length >= 15) return(handleShowError('El nombre de la tarea es muy largo'))
    
        const existingToDo = state.todos.some(todo => todo.name.toLowerCase() === state.inputValue.toLowerCase())
        if (existingToDo) return(handleShowError('Ya existe una tarea con ese nombre'))
    
        const editedArray = state.todos.map(todo => {
          if (todo.id === action.payload){
            return{
              ...todo,
              name: state.inputValue,
              modified: formattedCurrentDate
            }
          }
          return todo
        })
        state.todos = editedArray
        state.editar = false
        state.inputValue = ''
    },
    
    handleActivaEditar: (state, action) =>{
        const todoToEdit = state.todos.find(todo => todo.id === action.payload)
        state.inputValue = todoToEdit.name
        state.idEditar = action.payload
        state.editar = true
      },

    handleMostrarModal: (state, action) => {
        const todoSel = state.todos.find(todo => todo.id === action.payload)
        state.toDoSelected = todoSel
        state.modalVisible = true
      },
    setModalVisible: (state, action) => {
        state.modalVisible = action.payload
    },
    setInputValue: (state, action) => {
        state.inputValue = action.payload
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    handleAddTodo, 
    handleDeleteToDo, 
    handleCompleteToDo,
    handleEditarTodo,
    handleActivaEditar,
    handleMostrarModal,
    setModalVisible,
    setInputValue
 } = todoSlice.actions

export default todoSlice.reducer