import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { useReducer, useState } from 'react';


const CALCULATOR_TYPES = {
  SELECT_NUMBER: 'SELECT_NUMBER',
  SELECT_OPERATOR: 'SELECT_OPERATOR',
  CALCULATE: 'CALCULATE',
  SELECT_FUNCTION: 'SELECT_FUNCTION',
}

const initialState={
  displayNumber: 0,
  operator: '',
  previousNumber: 0,
  currentNumber: 0,
}

function reducer(state, action){
  switch(action.type){
    case CALCULATOR_TYPES.SELECT_NUMBER: 
    let acumulado= state.currentNumber*10+action.payload
    return{
      ...state,
      displayNumber: acumulado,
      currentNumber: acumulado
    }
    case CALCULATOR_TYPES.SELECT_OPERATOR: 
      return{
        ...state, 
        operator:action.payload, 
        previousNumber: state.currentNumber,
        currentNumber: 0
      }
    case CALCULATOR_TYPES.CALCULATE: 
      let result = 0
      switch (state.operator){
        case '*':
          result = state.previousNumber * state.currentNumber
          break;
        case '-':
          result = state.previousNumber - state.currentNumber
          break;
        case '+':
          result = state.previousNumber + state.currentNumber
          break;
        case '/':
          result = state.previousNumber / state.currentNumber
          break;
        default: return state
      }
      return{
        ...state, 
        previousNumber: 0,
        displayNumber: result,
        currentNumber: result,
      }
    case CALCULATOR_TYPES.SELECT_FUNCTION:
      switch (action.payload){
        case 'C':return{
          ...state, displayNumber: 0, currentNumber:0, operator:'', previousNumber:0
        }
        case '<-': 
          const errased = (state.currentNumber-state.currentNumber%10)/10
        return{
          ...state, currentNumber: errased, displayNumber: errased,
        }
        case '%':
          const percent = state.currentNumber/100
          return{
            ...state, currentNumber: percent, displayNumber: percent,
          }
      }
  }
}

export default function App() {


  const  [state, dispach] = useReducer(reducer, initialState);
  const handleSelectNumber= (number) => {
    dispach({type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number})
  }
  const handleSelectOperator = (operator) => {
    if(state.operator){
      handleCalculate()
    }
    dispach({type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator})
    
  }
  
  const handleCalculate = () =>{
    dispach({type: CALCULATOR_TYPES.CALCULATE})
  }

  const handleFunction = (task) =>{
    dispach({type: CALCULATOR_TYPES.SELECT_FUNCTION, payload: task})

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
      <CustomButton text='C' role='function' onPress={() => handleFunction('C')}/>
      <CustomButton text='%' role='function' onPress={() => handleFunction('%')}/>
      <CustomButton text='<-' role='function' onPress={() => handleFunction('<-')}/>
      <CustomButton text='/' role='operator' onPress={() => handleSelectOperator('/')}/>
      </View>
      <View style={styles.row}>
        <CustomButton text='7' role='number' onPress={() => handleSelectNumber(7)}/>
        <CustomButton text='8' role='number' onPress={() => handleSelectNumber(8)}/>
        <CustomButton text='9' role='number' onPress={() => handleSelectNumber(9)}/>
        <CustomButton text='x' role='operator' onPress={() => handleSelectOperator('*')}/>
      </View>
      <View style={styles.row}>
        <CustomButton text='4' role='number' onPress={() => handleSelectNumber(4)}/>
        <CustomButton text='5' role='number' onPress={() => handleSelectNumber(5)}/>
        <CustomButton text='6' role='number' onPress={() => handleSelectNumber(6)}/>
        <CustomButton text='-' role='operator' onPress={() => handleSelectOperator('-')}/>
      </View>
      <View style={styles.row}>
        <CustomButton text='1' role='number' onPress={() => handleSelectNumber(1)}/>
        <CustomButton text='2' role='number' onPress={() => handleSelectNumber(2)}/>
        <CustomButton text='3' role='number' onPress={() => handleSelectNumber(3)}/>
        <CustomButton text='+' role='operator' onPress={() => handleSelectOperator('+')}/>
      </View>
      <View style={styles.row}>
        <CustomButton text='0' role='number' onPress={() => handleSelectNumber(0)}/>
        <CustomButton text='=' role='operator' onPress={() => handleCalculate()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row : {
    flexDirection: 'row'
  },
  result: {
    fontSize: 80,
    textAlign: 'right'
  }
});
