import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from "../../components/movie/MovieHeader.tsx";

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
    const {movieId} = route.params;
    const {isLoading, movie} = useMovie(movieId);
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View>
            <MovieHeader
                 originalTitle={movie!.originalTitle}
                 poster={movie!.poster}
                 title={movie!.title}
            />
        </View>
    );
};
