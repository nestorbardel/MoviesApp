import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    try {
      const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
        await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieDBFetcher),
          UseCases.moviesUpcomingUseCase(movieDBFetcher),
          UseCases.moviesTopRatedUseCase(movieDBFetcher),
          UseCases.moviesPopularUseCase(movieDBFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setUpcoming(upcomingMovies);
      setTopRated(topRatedMovies);
      setPopular(popularMovies);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading movies', error);
    }
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,

    //methods
    popularNextPage: async() => {
        popularPageNumber++;
        const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {page: popularPageNumber});
        setPopular(prev => [...prev, ...popularMovies]);
    },
  };
};
