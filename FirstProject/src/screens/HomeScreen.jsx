import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, StatusBar  } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import EldenCard from '../components/EldenCard';

export default function HomeScreen() {
  const[incantations,setIncantations] = useState([])
  const[isFetching,setIsFetching] = useState(false)


  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true)
        const res = await fetch("https://eldenring.fanapis.com/api/incantations")
        const data = await res.json()
        setIncantations(data.data)
        await delay(5000)
        setIsFetching(false)
      }
      catch (error){
        console.error(error);
      }
    }

    fetchData()
  }, [])

  return (
    <View>
      <StatusBar backgroundColor="#323228" barStyle="light-content" />
      <View style={styles.container}> 
        {isFetching ? <View>
          <ActivityIndicator size="large" color='#636253' />
        </View> : 
        
        <FlatList 
          data={incantations}
          renderItem={({item}) =>{
            return(
              <EldenCard item={item}/>
            )
          }
          }
        />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#323228',
  },
});