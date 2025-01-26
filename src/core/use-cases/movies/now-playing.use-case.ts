import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter) => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('movie/now_playing');
        console.log({nowPlaying});

        return [];
        
    } catch (error) {
        
    }
}
