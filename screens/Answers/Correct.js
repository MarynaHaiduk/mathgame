import React from 'react';
import {ScrollView, Text, Pressable, StyleSheet} from 'react-native';

const Correct = ({ navigation }) => {
  const emoji = ['🤩', '😀', '🌞', '😁', '😊'];
  const answer = ['Correct!', 'Nice work!', 'Awesome!', 'Excellent!', 'Well Done!', 'Keep it Up!'];
  const randomEmoji = Math.floor(Math.random() * emoji.length);
  const randomAnswer = Math.floor(Math.random() * answer.length);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Congratulations</Text> 
      <Text style={styles.emojiText}>{emoji[randomEmoji]}</Text>     
      <Text style={styles.regularText}>{answer[randomAnswer]}</Text>
      <Pressable
        onPress={() => navigation.navigate('Card')}
        accessibilityLabel="button correct"
        style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 34,
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
    fontSize: 20,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    padding: 8,
    marginVertical: 8,
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

export default Correct;
