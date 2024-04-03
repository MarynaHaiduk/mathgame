import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}></Text>
      <Pressable
        onPress={() => navigation.navigate('Card')}
        accessibilityLabel="button"
        style={styles.button}>
        <Text style={styles.buttonText}>Multiplication</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  regularText: {
    fontSize: 24,
    padding: 120,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#FE5000',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Home;