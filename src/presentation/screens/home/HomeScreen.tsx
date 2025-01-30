//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

// create a component
export const HomeScreen = () => {
    const {} = useMovies();
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

