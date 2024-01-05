interface Params {
  id: number | null;
}

interface TvDetails {
    id: number | null;
    name: string,
    first_air_date: string,
    genres: any[],
    last_air_date: string,
    last_episode_to_air: {},
    number_of_episodes: number | null,
    number_of_seasons: number | null,
    overview: string,
    poster_path: string,
    seasons: any[],
    status: string,
    vote_average: number | null
}

interface Genre {
  id: number | null;
  name: string;
}
interface LastEpisode {
  id: number | null;
  name: string;
  season_number: string;
}

interface Season {
  id: number | null;
  name: string;
  poster_path: string,
  season_number: number | null
}

export { Params, Genre, LastEpisode, Season, TvDetails };
