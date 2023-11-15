import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Counter from './src/components/counter';


export default function App() {


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter/>
      </View>
    </Provider>
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
