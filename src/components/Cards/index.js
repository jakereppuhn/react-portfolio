import React from "react";
import {
  CardContainer,
  CardTop,
  CardDot,
  CardBar,
  CardImg,
  CardBtn,
  RowContainer,
} from "./CardElms";
import S1 from "../../images/screen1.png";

const Cards = () => {
  return (
    <RowContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
      <CardContainer>
        <CardTop>
          <CardDot />
          <CardDot />
          <CardDot />
          <CardBar />
        </CardTop>
      </CardContainer>
    </RowContainer>
  );
};

export default Cards;
