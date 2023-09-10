import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import validate from 'react-native-email-validator';

export default function App() {
  let isValid = validate('alauddin12340@gmail.com');
  return (
    <View style={styles.container}>
      {isValid ? (
        <Text style={{ fontSize: 22 }}>Email is valid</Text>
      ) : (
        <Text>Email is not valid</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
