import {View, Text} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({route} : Props) => {
    const {movieId} = route.params;
    console.log(movieId);
    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    );
};
