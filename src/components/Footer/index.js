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

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo />
        <FooterH1>Always raise your level of awareness.</FooterH1>
        <FooterBtnRow>
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
