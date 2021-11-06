import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import Drug from './components/Drug';

const firebaseConfig = {
  apiKey: "AIzaSyDXc9JbUAYoMKFPrGkJhxQr8KNhdCtE5BI",
  authDomain: "mars-b7c0f.firebaseapp.com",
  projectId: "mars-b7c0f",
  storageBucket: "mars-b7c0f.appspot.com",
  messagingSenderId: "357315583008",
  appId: "1:357315583008:web:2b56d4894bf917c9083045",
  measurementId: "G-FPGW1Y4NC2"
};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drug">
        <Stack.Screen name="Drug" component={Drug} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}