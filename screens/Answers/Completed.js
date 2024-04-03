import React from 'react';
import {ScrollView, Text, Pressable, StyleSheet} from 'react-native';

const Completed = ({ navigation }) => {
  const emoji = '🌟';

  return (
    <ScrollView style={styles.container}>
      <Text style={{paddingTop: 80}}></Text> 
      <Text style={styles.headerText}>Congratulations!!!</Text> 
      {/* <Text style={styles.headerText}>Well Done!!!</Text>  */}
      <Text style={styles.emojiText}>{emoji}</Text> 
      <Text style={styles.regularText}>Well Done! You are Professional!</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        accessibilityLabel="button completed"
        style={styles.button}>
        <Text style={styles.buttonText}>Start again</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  headerText: {
    fontSize: 34,
    padding: 10,
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emojiText: {
    fontSize: 120,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    padding: 8,
    marginVertical: 8,
    marginTop: 30,
    marginLeft: 120,
    marginRight: 120,
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

export default Completed;
