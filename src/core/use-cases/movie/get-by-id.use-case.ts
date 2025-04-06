import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db-movie.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        return MovieMapper.fromMovieDBToEntity(movie);
        //fetcher
        //mapeo
        //return fullMovie


    } catch (error) {
        console.log({error});
        throw new Error('Error cannot get movie by ID: ' + movieId);
    }

};
