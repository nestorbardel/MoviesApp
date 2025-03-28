import '../gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigation/Navigation';

export default function App() {
  return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
  );
}
