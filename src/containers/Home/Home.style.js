import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`

`;

export const Image = styled.img`
width: 45%;
display: flex;
margin: 0 auto;
`

export const HeroImage = styled.div`
height: 100vh;
background-image: url('${require('../../assets/programmer1.gif')}');
background-repeat: no-repeat;
background-size: cover;
background-position: center;

display: flex;
flex-direction:column;
align-content: center;
justify-content: flex-start;
text-align: center;

font-size: 2em;

h1 {
  margin-bottom: 0;
}
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 10s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

export const HomerImg = styled.img`
width: 50%;
height: auto;
display: flex;
flex-direction: row;
margin: 0 auto;
`;
