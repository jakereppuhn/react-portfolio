import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(50, 50, 93, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 2rem;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.button`
  height: 2.5rem;
  width: 6rem;
  border-radius: 1.25rem;
  border: none;
  background: #1e96fc;
  color: #fff;
  font-size: 1rem;
  margin: 0.8rem;

  &:hover {
    transition: ease-in-out 0.2s;
    border: solid 2px #1e96fc;
    background: #fff;
    color: #1e96fc;
  }
`;
