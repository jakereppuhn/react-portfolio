import React from "react";
import Cards from "../Cards";
import { WorkH1, WorkP, WorkContainer, WorkContent } from "./WorkElms";

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>My Recent Work</WorkH1>
      <WorkP>
        Here are a few projects I've worked on recently. Want to see more? Email
        me.
      </WorkP>
      <WorkContent>
        <Cards />
      </WorkContent>
    </WorkContainer>
  );
};
export default Work;
