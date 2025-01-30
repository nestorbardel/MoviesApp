import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '135cfe76d755bec50f4f8a4869a5dd93',
        language: 'es',
    },
});
