import React, { useEffect } from 'react';

import {
  Text,
  View,
} from 'react-native';

import LoginScreen from "./src/screens/LoginScreen";
import AdminHomeScreen from './src/screens/AdminHomeScreen';
import CreateNewMappingScreen from './src/screens/CreateNewMappingScreen';

import SplashScreen from  "react-native-splash-screen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />

          <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
          <Stack.Screen name="CreateNewMappingScreen" component={CreateNewMappingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;