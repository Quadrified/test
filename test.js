import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

const test = (props) => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={styles.container?.backgroundColor} />
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default test;
