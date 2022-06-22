import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const HeroBg = styled.div``;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroFrost = styled.div`
  z-index: 2;
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 30% 100%);
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: saturate(180%) blur(10px);
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 1;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
