import {Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from "../../components/movie/MovieHeader.tsx";
import {MovieDetails} from '../../components/movie/MovieDetails.tsx';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
    const {movieId} = route.params;
    const {isLoading, movie} = useMovie(movieId);
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <MovieHeader
                 originalTitle={movie!.originalTitle}
                 poster={movie!.poster}
                 title={movie!.title}
            />

            <MovieDetails movie={movie!}/>
        </ScrollView>
    );
};
