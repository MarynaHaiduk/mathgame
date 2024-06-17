import React from 'react';
import {ScrollView, Text, Pressable, StyleSheet} from 'react-native';

const Incorrect = ({ navigation }) => {
  const emoji = ['🙃', '🫢', '😶'];
  const answer = "Sorry, that's not correct";
  const randomEmoji = Math.floor(Math.random() * emoji.length);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Ooops</Text> 
      <Text style={styles.emojiText}>{emoji[randomEmoji]}</Text>     
      <Text style={styles.regularText}>{answer}</Text>
      {/* <Text style={styles.regularText}>Correct answer: </Text> */}
      <Pressable
        onPress={() => navigation.navigate('Multiplication')}
        accessible={true}
        accessibilityLabel="Tap me!"
        accessibilityHint="Navigates to the Multiplication screen"
        style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
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
    paddingTop: 80,
    fontSize: 38,
    padding: 20,
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emojiText: {
    fontSize: 120,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 30,
    padding: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    fontSize: 30,
    padding: 8,
    marginVertical: 8,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#FE5000',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
  },
});  

export default Incorrect;
