import { View, StyleSheet, FlatList, Text, TouchableOpacity} from "react-native"
import Coin from "../Coin";
import { FirstMenuBar } from "./FirstMenuBar";

const DATA = [
    {id: 1, nombre: 'Etherium', porcentaje: '29.75% ($28,015)', icon: 'ethereum', backgroundColor: '#D57143', cantidad: "79.006 ETH", precio: "$100,000.00"},
    {id: 2, nombre: 'Bitcoin', porcentaje: '15.96% ($28,015)', icon: 'bitcoin', backgroundColor: '#F7C238', cantidad: "107.70 BIT", precio: "$30,000.92"},
    {id: 3, nombre: 'Viacoin', porcentaje: '29.75% ($28,015)', icon: 'viacoin', backgroundColor: '#80248E', cantidad: "79.006 VIA", precio: "$100,000.00"},
    {id: 4, nombre: 'Bacterium', porcentaje: '31.79% ($28,015)', icon: 'bacterium', backgroundColor: '#528E24', cantidad: "44.44 VIA", precio: "$44,000.00"},
    {id: 5, nombre: 'Coins', porcentaje: '13.78% ($28,015)', icon: 'coins', backgroundColor: '#243A8E', cantidad: "45.037 CNS", precio: "$27,000.74"},]

    export const FirstBody = () => {
        return (
          <View style={styles.content}>
            <View style={styles.lista}>
              <View style={styles.tabs}>
                <TouchableOpacity style={[styles.tabActive, {backgroundColor: 'white',}]}>
                  <Text>My Assets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabActive}>
                  <Text>My Transactions</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={DATA}
                renderItem={({ item: { nombre, porcentaje, icon, backgroundColor, precio, cantidad}, index }) => (
                  <Coin nombre={nombre} porcentaje={porcentaje} icon={icon} backgroundColor={backgroundColor} cantidad={cantidad} precio={precio} />
                )}
                keyExtractor={({ id }) => id.toString()} // Asegúrate de convertir el ID a una cadena
                style={{height:300}}
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
          backgroundColor: '#E1651B',
          padding: 5,
          alignContent: 'center',
          justifyContent: 'flex-end'
        },
        lista: {
          borderRadius: 20,
        },
        tabs:{
          width: '100%',
          flexDirection: 'row',
        },
        tabActive:{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 20,
          width: '50%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: -10
        },
      });