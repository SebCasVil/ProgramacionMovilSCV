import { View, Text, StyleSheet } from 'react-native';

const ColumnText = ({ text1, text2}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.texto1}>{text1}</Text>
        <Text style={styles.texto2}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    margin: 10
  },
  texto1:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto2:{
    fontSize: 15,
  }
});

export default ColumnText;