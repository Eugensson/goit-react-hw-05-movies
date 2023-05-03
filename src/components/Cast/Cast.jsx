import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../services/api';

import {
  CastContainer,
  CastTitle,
  CastList,
  CastListItem,
  CastText,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {movie.map(({ id, name, character, profile_path }) => (
          <CastListItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="150"
            />
            <CastText>
              <b>{name}</b>
            </CastText>
            <CastText>
              Character:
              <b>{character}</b>
            </CastText>
          </CastListItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
