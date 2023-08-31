import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person';

const DATA = [
  {id: 1, name: 'Gonzalo', lastname: 'Avila'},
  {id: 2, name: 'Sebastian', lastname: 'Castro'},
  {id: 3, name: 'Humberto', lastname: 'Morales'},
  {id: 4, name: 'Israel', lastname: 'Lulo'},
]

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item: {name, lastname}, index }) =>
        <Person name={name} lastname={lastname} index={index}/>
      }
      ItemSeparatorComponent={<Text>a</Text>}
      keyExtractor={({id}) => id}
    />
    <StatusBar style='auto'></StatusBar>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35
    // flex: 1,
    // backgroundColor: '#b2b2ff',
    // alignItems: 'start',
    // justifyContent: 'center',
  },
});
