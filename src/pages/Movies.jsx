import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { searchMovieByQuery } from '../services/api';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    searchMovieByQuery(searchParams)
      .then(setSearchResult)
      .catch(error => console.log(error));
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query);
  };

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Search movies"
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      {searchResult.length > 0 && (
        <ul>
          {searchResult.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
