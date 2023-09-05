import { View, StyleSheet, FlatList, Text} from "react-native"
import Coin from "../Coin";
import { FirstMenuBar } from "./FirstMenuBar";

const DATA = [
    {id: 1, nombre: 'Etherium', porcentaje: '29.75% ($28,015)', icon: 'ethereum', backgroundColor: 'red', cantidad: "79.006 ETH", precio: "$100,000.00"},
    {id: 2, nombre: 'Bitcoin', porcentaje: '15.96% ($28,015)', icon: 'bitcoin', backgroundColor: 'blue', cantidad: "107.70 BIT", precio: "$30,000.92"},
    {id: 3, nombre: 'Viacoin', porcentaje: '29.75% ($28,015)', icon: 'viacoin', backgroundColor: 'green', cantidad: "79.006 VIA", precio: "$100,000.00"},
    {id: 4, nombre: 'Coins', porcentaje: '13.78% ($28,015)', icon: 'coins', backgroundColor: 'yellow', cantidad: "45.037 CNS", precio: "$27,000.74"},]

    export const FirstBody = () => {
        return (
          <View style={styles.content}>
            <View style={styles.lista}>
              <FlatList
                data={DATA}
                renderItem={({ item: { nombre, porcentaje, icon, backgroundColor, precio, cantidad}, index }) => (
                  <Coin nombre={nombre} porcentaje={porcentaje} icon={icon} backgroundColor={backgroundColor} cantidad={cantidad} precio={precio} />
                )}
                keyExtractor={({ id }) => id.toString()} // Asegúrate de convertir el ID a una cadena
              />
                <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}></View>
                <FirstMenuBar/>
            </View>
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        content: {
          flex: 0.6,
          backgroundColor: '#E76500',
          padding: 5,
          alignContent: 'center',
          justifyContent: 'flex-end'
        },
        lista: {
          borderRadius: 20,
        },
      });