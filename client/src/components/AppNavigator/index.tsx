import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FirstStep, SecondStep, ThirtyStep } from '../Steps';
import WelcomeScreen from '../WelcomeScreen';
import Login from '../loginScreen';
import Header from '../../commons/Header';
import Recipes from '../Recipes';

const AppNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome" 
        screenOptions={{ header : (props : any) => <Header {...props} /> }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{headerShown : false}}  
        />
        <Stack.Screen 
          name="FirstStep" 
          component={FirstStep} 
        />

        <Stack.Screen 
          name="SecondStep" 
          component={SecondStep} 
        />

        <Stack.Screen 
          name="ThirtyStep" 
          component={ThirtyStep} 
        />

        
        <Stack.Screen 
          name="Recipes" 
          component={Recipes} 
        />


        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default AppNavigator;