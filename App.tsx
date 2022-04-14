import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Picture from './src/pages/picture';
import Header from './src/components/header';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <Header />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="Picture" component={Picture}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}




