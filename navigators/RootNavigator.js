import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Multiplication from '../screens/Multiplication';
import Correct from '../screens/Answers/Correct';
import Incorrect from '../screens/Answers/Incorrect';
import Completed from '../screens/Answers/Completed';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#4285F4' },
        headerTintColor: '#EDEFEE',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Multiplication" component={Multiplication} />
      <Stack.Screen name="Correct" component={Correct} />
      <Stack.Screen name="Incorrect" component={Incorrect} />
      <Stack.Screen name="Completed" component={Completed} />
    </Stack.Navigator>
  );
};           

export default RootNavigator;
