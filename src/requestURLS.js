const API_KEY = "0f4a35a2cd202a735fe608ee034152ab";

const Requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=en-Us`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovie: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovie: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentariesMovie: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
};

export default Requests;
