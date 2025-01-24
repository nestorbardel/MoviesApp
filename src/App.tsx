import '../gesture-handler';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
        <NavigationContainer>
            <View>
                <Text>MoviesApp</Text>
            </View>
        </NavigationContainer>
  );
}
