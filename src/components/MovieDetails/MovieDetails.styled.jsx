import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const LinkBtn = styled(NavLink)`
  font-size: 18px;
  color: #00f;
`;

export const MovieReviewContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 2px solid #000;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 30px;
`;

export const MovieSubTitle = styled.h3`
  font-size: 20px;
`;

export const MovieText = styled.p`
  font-size: 16px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieListItem = styled.li`
  list-style: none;
`;

export const MovieAdditionalLink = styled(Link)`
  font-size: 16px;
  color: #00f;
`;
