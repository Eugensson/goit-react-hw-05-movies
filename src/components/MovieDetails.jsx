import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import { searchMovieById } from '../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const prePage = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    searchMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <Link to={prePage.current}>Go back</Link>
      {Object.keys(movie).length > 0 && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average.toFixed(1)}</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </div>
            <div>
              <h3>Additional Info</h3>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
