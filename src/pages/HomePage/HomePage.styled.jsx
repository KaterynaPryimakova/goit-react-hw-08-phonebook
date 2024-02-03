import styled from '@emotion/styled';

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const Image = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  max-width: 600px;
`;
export const Donate = styled.a`
  margin-left: 8px;
  text-decoration: none;
  color: #fff;
  background-color: #1976d2;
  border-radius: 50%;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover,
  :focus {
    background-color: orange;
  }
`;
