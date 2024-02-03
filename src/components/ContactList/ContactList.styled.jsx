import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  padding: 12px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
