import styled from '@emotion/styled';

export const CastContainer = styled.section`
  padding: 20px;
`;

export const CastTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastListItem = styled.li`
  width: calc((100% - 20px * 7) / 8);
  background-color: #fff;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 4px 2px 2px #999696;
  list-style: none;
`;

export const CastText = styled.p`
  text-align: center;
  font-size: 14px;
`;
