import { Text, StyleSheet, View, FlatList } from "react-native";
import Cosa from "../custom/Cosa";
import { facebookImage } from "../../../assets";
import { googleImage } from "../../../assets";

const DATA = [
    {id: 1, name: 'Gonzalo', lastname: 'Avila', image: facebookImage },
    {id: 2, name: 'Sebastian', lastname: 'Castro', image: facebookImage },
    {id: 3, name: 'Humberto', lastname: 'Morales', image: facebookImage },
    {id: 4, name: 'Israel', lastname: 'Lulo', image: facebookImage },
    {id: 5, name: 'Paolo', lastname: 'Solis', image: facebookImage },
    {id: 6, name: 'Marco', lastname: 'Solis', image: facebookImage },
    {id: 7, name: 'Marco', lastname: 'Castro', image: facebookImage },
  ]

export const PageContent = () => {
    return(
     <View style={styles.content}>
        <View></View>
        <View>
        <FlatList
      data={DATA}
      renderItem={({item: {name, lastname, image}, index }) =>
        <Cosa primero={name} segundo={lastname} index={index} image={image}/>
      }
      ItemSeparatorComponent={<Text>----------------------------------------------------------------------------</Text>}
      keyExtractor={({id}) => id}
    />
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.9,
        backgroundColor: '#3D4B6D',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
  });

