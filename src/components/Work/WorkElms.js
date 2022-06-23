import styled from "styled-components";

export const WorkContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding-bottom: 5rem;
`;

export const WorkContent = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  height: 80%;
  width: 95%;
  max-width: 1300px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const WorkH1 = styled.h1`
  color: #000;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const WorkP = styled.p`
  color: #000;
  text-align: center;
  width: 75%;
  max-width: 800px;
  z-index: 3;
  margin-bottom: 3rem;
  font-size: 20px;
  font-family: var(--fnt-second);
`;
