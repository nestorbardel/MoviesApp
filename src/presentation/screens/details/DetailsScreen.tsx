import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
    const {movieId} = route.params;
    const {} = useMovie(Number(movieId));
    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    );
};
