import styled from "styled-components";

export const Title = styled.h1`
  font-size: 5em;
  color: #FFF;
  animation: flipTitle 1s;

  @keyframes flipTitle {
    from{
      transform: rotateX(360deg);
    }
    to{
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 620px){
      font-size: 4em;
  }
`;