import React from "react";
import Cards from "../Cards";
import { WorkH1, WorkContainer, WorkContent } from "./WorkElms";

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>My Recent Work</WorkH1>
      <WorkContent>
        <Cards />
      </WorkContent>
    </WorkContainer>
  );
};
export default Work;
