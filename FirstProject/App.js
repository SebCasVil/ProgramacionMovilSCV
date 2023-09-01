import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person';
import { usuario1 } from './assets';
import { usuario2 } from './assets';

const DATA = [
  {id: 1, name: 'Gonzalo', lastname: 'Avila', image: usuario1 },
  {id: 2, name: 'Sebastian', lastname: 'Castro', image: usuario2 },
  {id: 3, name: 'Humberto', lastname: 'Morales', image: usuario2 },
  {id: 4, name: 'Israel', lastname: 'Lulo', image: usuario1 },
  {id: 5, name: 'Paolo', lastname: 'Solis', image: '' },
  {id: 6, name: 'Marco', lastname: 'Solis', image: usuario1 },
  {id: 7, name: 'Marco', lastname: 'Castro', image: '' },
]

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item: {name, lastname, image}, index }) =>
        <Person name={name} lastname={lastname} index={index} image={image}/>
      }
      ItemSeparatorComponent={<Text></Text>}
      keyExtractor={({id}) => id}
    />
    <StatusBar style='auto'></StatusBar>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#7C7C7C',
    flex: 1
    // flex: 1,
    // backgroundColor: '#b2b2ff',
    // alignItems: 'start',
    // justifyContent: 'center',
  },
});
