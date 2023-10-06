import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../context/AppContext';

import ThirdHeader from '../components/Third/ThirdHeader';
import ThirdContent from '../components/Third/ThirdContent';

export default function Third() {
  const { theme } = useContext(AppContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.background
    },
  });

  return (
      <View style={styles.container}>
        <ThirdHeader/>
        <ThirdContent/>
      </View>
  );
}

