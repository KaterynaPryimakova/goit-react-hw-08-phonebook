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
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 250ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 2px 1px 8px 0px rgba(255, 255, 255, 1);
  }

  &.active {
    color: #fff;
    background-color: orange;
    border: 1px solid orange;
    box-shadow: none;
  }
  &.active:hover {
    box-shadow: 2px 1px 8px 0px rgba(255, 255, 255, 1);
  }
`;
