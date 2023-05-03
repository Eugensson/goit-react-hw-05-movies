import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/api';

import {} from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <section>
      <h2>Reviews</h2>
      {movie.length === 0 && <p>We don`t have any reviews for this movie</p>}
      <ul>
        {movie.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
