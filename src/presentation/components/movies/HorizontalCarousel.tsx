import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
}

export const HorizontalCarousel = ({movies, title}: Props) => {
    return (
        <View style={{height: title ? 260 : 220}}>
            {
                title && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: '300',
                            marginLeft: 10,
                            marginBottom: 10,
                        }}
                    >
                        {title}
                    </Text>
                )
            }

            <FlatList
                data={movies}
                renderItem={({item}) => (
                    <MoviePoster movie={item} height={200} width={140} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
