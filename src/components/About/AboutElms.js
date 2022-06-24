import styled from "styled-components";

export const AboutContainer = styled.div`
  background: var(--clr-second);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutBg = styled.div`
  width: 100%;
  height: 33rem;
  background: var(--clr-main);
  position: absolute;
  z-index: 2;
`;

export const AboutContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: var(--clr-second);
  border-radius: 0.8rem;
  height: max-content;
  width: 95%;
  max-width: 1200px;
  margin-top: 7rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 3rem;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutGroup = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid #eee;
  height: 42rem;
  width: 33%;

  &:first-of-type {
    border-left: none;

    @media screen and (max-width: 768px) {
      border-top: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-top: 2px solid #eee;
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: max-content;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutH1 = styled.h1`
  color: var(--clr-second);
  font-size: 32px;
  text-align: center;
  z-index: 3;
  margin-top: 8rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 5rem;
  }
`;
export const AboutH2 = styled.h2`
  color: var(--clr-third);
  font-size: 24px;
  text-align: center;
  margin-bottom: 1rem;
`;
export const AboutH3 = styled.h3`
  color: var(--clr-main);
  margin-top: 2rem;
  font-size: 24px;
  text-align: center;
  margin-bottom: 1rem;
`;
export const AboutP = styled.p`
  color: var(--clr-second);
  text-align: center;
  width: 75%;
  max-width: 900px;
  z-index: 3;
  font-family: var(--fnt-second);
  font-weight: 300;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const AboutP2 = styled.p`
  color: var(--clr-third);
  text-align: center;
  font-size: 20px;
  font-family: var(--fnt-second);
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutIcon = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 0 10px;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
