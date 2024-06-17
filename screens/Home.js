import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Policy from './Policy';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.regularText}></Text>
        <Pressable
          onPress={() => navigation.navigate('Multiplication')}
          accessible={true}
          accessibilityLabel="Tap me!"
          accessibilityHint="Navigates to the Multiplication screen"
          style={styles.button}>
          <Text style={styles.buttonText}>Multiplication</Text>
        </Pressable>
      </View>
      <View 
        style={styles.footer}
        accessibilityLabel="Tap me!"
        accessibilityHint="Navigates to the Policy screen"
      >
        <Policy />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  content: {
    flex: 0.8,
  },
  footer: {
    flex: 0.2,
  },
  regularText: {
    fontSize: 30,
    padding: 120,
    marginVertical: 8,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    fontSize: 30,
    padding: 10,
    marginVertical: 8,
    margin: 60,
    backgroundColor: '#FE5000',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Home;
