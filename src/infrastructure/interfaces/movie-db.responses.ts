export interface NowPlayingResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface MoviesDBMoviesResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface MovieDBCastResponse {
    id:   number;
    cast: MovieDBCast[];
    crew: MovieDBCast[];
}

export interface MovieDBCast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}






