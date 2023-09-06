import { View, StyleSheet } from 'react-native';
import { FirstHeader } from '../components/First/FirstHeader';
import { FirstBody } from '../components/First/FirstBody';
import Withdraw from '../components/Withdraw';
import { useState } from 'react';

export default function First() {
  const [secondScreenShow, setSecondScreenShow] = useState(false);

  const handleShowSecondScreen = (e) => {
    e.preventDefault();
    setSecondScreenShow(!secondScreenShow);
  };

  return (
    <View style={styles.first}>
      {!secondScreenShow ? (
        <>
          <FirstHeader />
          <FirstBody handleShowSecondScreen={handleShowSecondScreen} />
        </>
      ) : (
        <Withdraw handleShowSecondScreen={handleShowSecondScreen} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    width: '100%',
  },
});
