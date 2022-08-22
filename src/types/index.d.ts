export interface IMovie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  release_date: Date;
}

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface ISearch {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
