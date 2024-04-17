import React, { useState, useEffect, useRef } from 'react';
import {ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const Multiplication = ({ navigation }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  const allNumbers = [
    // [0,0],  [0,1],  [0,2],  [0,3],  [0,4],  [0,5],  [0,6],  [0,7],  [0,8],  [0,9], 
    // [1,0],  [1,1],  [1,2],  [1,3],  [1,4],  [1,5],  [1,6],  [1,7],  [1,8],  [1,9],
    [2,0],  [2,1],  [2,2],  [2,3],  [2,4],  [2,5],  [2,6],  [2,7],  [2,8],  [2,9],
    [3,0],  [3,1],  [3,2],  [3,3],  [3,4],  [3,5],  [3,6],  [3,7],  [3,8],  [3,9],
    [4,0],  [4,1],  [4,2],  [4,3],  [4,4],  [4,5],  [4,6],  [4,7],  [4,8],  [4,9],
    [5,0],  [5,1],  [5,2],  [5,3],  [5,4],  [5,5],  [5,6],  [5,7],  [5,8],  [5,9],
    [6,0],  [6,1],  [6,2],  [6,3],  [6,4],  [6,5],  [6,6],  [6,7],  [6,8],  [6,9],
    [7,0],  [7,1],  [7,2],  [7,3],  [7,4],  [7,5],  [7,6],  [7,7],  [7,8],  [7,9],
    [8,0],  [8,1],  [8,2],  [8,3],  [8,4],  [8,5],  [8,6],  [8,7],  [8,8],  [8,9],
    [9,0],  [9,1],  [9,2],  [9,3],  [9,4],  [9,5],  [9,6],  [9,7],  [9,8],  [9,9],
  ];

  const [arr, setArr] = useState([...allNumbers]);

  const getNumbers = (numbers) => {
    const random = Math.floor(Math.random() * numbers.length);
    setFirstNumber(numbers[random][0]);
    setSecondNumber(numbers[random][1]);
    setCorrectAnswer(numbers[random][0] * numbers[random][1]);
    numbers.splice(random, 1);
    setArr([...numbers]);
    return numbers;
  };

  useEffect(() => {
    getNumbers(arr);
    inputRef.current.focus();
  }, [score]);

  const changeInput = (val) => {
    setUserInput(val);
    const correctAnswer = {firstNumber} * {secondNumber};
    if (correctAnswer == val) {
      setScore = score + 1;
    }
  };

  const correct = () => {
    if (arr.length) {
      if (userInput == correctAnswer) {
        setScore(score + 1);
        setQuestionCount(questionCount + 1);
        setUserInput("");
        return navigation.navigate('Correct');
      }
      if (userInput != correctAnswer) {
        setScore(0);
        setQuestionCount(1);
        setUserInput("");
        return navigation.navigate(
          'Incorrect'
        );
      }
    } else {
      return navigation.navigate('Completed');
    }
  };

  return (
      <ScrollView style={styles.container}>
        <Text 
          style={styles.headerText}
          aria-label="the number of question"
        > 
          Question {questionCount}:
        </Text>
        <Text 
          style={styles.regularText}
          aria-label="multiplication of numbers"
        > 
          {firstNumber} * {secondNumber} = 
        </Text>
        <TextInput
          style={styles.textInput}
          aria-label="input"
          value={userInput}
          ref={inputRef}
          onChangeText={changeInput}
          keyboardType="numeric"
          required={true}
          autoFocus={true}
        />
        <Pressable
          style={styles.button}
          onPress={correct}
        >
          <Text 
            style={styles.buttonText}
            aria-label="button submit"
          >Submit</Text>
        </Pressable>
        <Text 
          style={styles.emojiText}
          aria-label="total correct answers"
        > Correct answers: ⭐{score}</Text>
      </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  headerText: {
    fontSize: 30,
    marginTop: 100,
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
  },
  textInput: {
    marginTop: 30,
    height: 40,
    margin: 20,
    borderWidth: 1,
    fontSize: 30,
    backgroundColor: '#fff',
    borderColor: '#EDEFEE',
    borderRadius: 10,
    textAlign: 'center',
  },
  emojiText: {
    marginTop: 30,
    fontSize: 30,
    textAlign: 'center',
    color: "#fff"
  },
  button: {
    fontSize: 30,
    padding: 8,
    marginTop: 30,
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
    fontSize: 30,
  },
});

export default Multiplication;
