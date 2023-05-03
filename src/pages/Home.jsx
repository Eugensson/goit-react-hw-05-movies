import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from '../services/api';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(setTrending);
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
