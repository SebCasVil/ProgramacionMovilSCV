import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ThirdContent from '../components/ThirdContent';
import ThirdHeader from '../components/ThirdHeader';

export default function Third() {


  return (
      <View style={styles.container}>
        <ThirdHeader/>
        <ThirdContent/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
});
