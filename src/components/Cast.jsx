import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../services/api';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      <ul>
        {movie.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="150"
            />
            <p>Actor Name: {name}</p>
            <p>Character Name: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
