import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterBtnRow,
  FooterBtn,
  FooterH1,
  FooterIcon,
  FooterP,
} from "./FooterElms";

import logo from "../../images/logo-01.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo src={logo} type="image/svg" />
        <FooterH1>Always raise your level of awareness.</FooterH1>
        <FooterBtnRow>
          <FooterBtn>
            <FooterIcon />
          </FooterBtn>
          <FooterBtn>
            <FooterIcon />
          </FooterBtn>
          <FooterBtn>
            <FooterIcon />
          </FooterBtn>
        </FooterBtnRow>
        <FooterP></FooterP>
      </FooterContainer>
    </>
  );
};

export default Footer;
