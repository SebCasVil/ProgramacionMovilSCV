import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'


export default function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const incrementValue = () => dispatch(increment())
  const decrementValue = () => dispatch(decrement())

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Counter value: {count}</Text>
        <TouchableHighlight style={styles.button} onPress={incrementValue()}>
          <Text style={styles.text}>increment by one</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={decrementValue()}>
          <Text style={styles.text}>increment by one</Text>
        </TouchableHighlight>
        <StatusBar style="light" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'aliceblue',
  },
  button:{
    borderWeight: 3,
    padding: 5
  }
});
