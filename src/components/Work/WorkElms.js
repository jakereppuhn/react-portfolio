import styled from "styled-components";

export const WorkContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding-top: 4rem;
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
  width: 80%;
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkH1 = styled.h1`
  color: #000;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
