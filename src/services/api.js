export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=133c2d7094f741475ddc1c9cf006a400`
  );
  const data = await response.json();
  return data.results;
};

export const searchMoviesByQuery = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=133c2d7094f741475ddc1c9cf006a400&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovieById = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=133c2d7094f741475ddc1c9cf006a400`
  );
  const data = await response.json();
  return data;
};

export const getMovieCredits = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=133c2d7094f741475ddc1c9cf006a400`
  );
  const data = await response.json();
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=133c2d7094f741475ddc1c9cf006a400`
  );
  const data = await response.json();
  return data.results;
};
