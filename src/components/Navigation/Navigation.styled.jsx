import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 6px 12px;
  border-radius: 14px;
  text-decoration: none;
  margin-right: 14px;
  width: 64px;
  text-align: center;
  transition: scale 250ms ease-in-out;

  :hover,
  :focus {
    scale: 1.1;
  }

  &.active {
    color: #fff;
    background-color: orange;
    border: 1px solid orange;
  }
`;
