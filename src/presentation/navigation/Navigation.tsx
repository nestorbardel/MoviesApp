import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScreen} from '../screens/details/DetailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: string | number};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
