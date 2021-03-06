import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e96fc;
`;

export const FooterLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 5rem;
`;

export const FooterH1 = styled.h1`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterP = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterBtnRow = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin-top: 3rem;
  height 50px;
`;

export const FooterBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 1rem;
  margin-left: 1rem;
  border: none;
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  &:hover {
    background: #fff;
  }
`;

export const FooterIcon = styled.div``;
