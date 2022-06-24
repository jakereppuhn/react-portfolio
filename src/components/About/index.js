import React from "react";
import {
  AboutContainer,
  AboutBg,
  AboutContent,
  AboutH1,
  AboutH2,
  AboutH3,
  AboutP,
  AboutP2,
  AboutIcon,
  AboutList,
  AboutGroup,
} from "./AboutElms";

import dev from "../../images/web-programming.png";
import art from "../../images/web-page.png";
import des from "../../images/web-design.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutBg />
      <AboutH1>Hi, I'm Jacob. Nice to meet you.</AboutH1>
      <AboutP>
        My coding journey began in high school developing simple web and
        terminal applications. While learning the MERN Stack, I began to explore
        the world of automation. Building private use applications such as
        Discord Bots, Inventory Monitors, Account Generators as well as
        Autonomous Checkout. I have recently combined my passions for both art
        and development to work on various creative coding projects implementing
        both AI and algorithmic procedures.
      </AboutP>
      <AboutContent>
        <AboutGroup>
          <AboutIcon src={dev} type="image/png" />
          <AboutH2>Full-Stack Developer</AboutH2>
          <AboutP2>
            I enjoy developing from start to finish and bringing ideas to life.
          </AboutP2>
          <AboutH3>Languages:</AboutH3>
          <AboutP2>HTML, CSS, JS & Python</AboutP2>
          <AboutH3>Dev Tools:</AboutH3>
          <AboutList>
            <AboutP2>Mongo DB</AboutP2>
            <AboutP2>Express</AboutP2>
            <AboutP2>React</AboutP2>
            <AboutP2>Node.js</AboutP2>
            <AboutP2>jQuery</AboutP2>
            <AboutP2>Bootstrap</AboutP2>
            <AboutP2>Github</AboutP2>
          </AboutList>
        </AboutGroup>
        <AboutGroup>
          <AboutIcon src={art} type="image/png" />
          <AboutH2>Digital Artist</AboutH2>
          <AboutP2>
            I use various methods to express my visions, dreams and ideas.
          </AboutP2>
          <AboutH3>Mediums:</AboutH3>
          <AboutP2>Pixel, Vector, Voxel & 3D</AboutP2>
          <AboutH3>Art Tools:</AboutH3>
          <AboutList>
            <AboutP2>Photoshop</AboutP2>
            <AboutP2>Illustrator</AboutP2>
            <AboutP2>MagicaVoxel</AboutP2>
            <AboutP2>Blender</AboutP2>
          </AboutList>
        </AboutGroup>
        <AboutGroup>
          <AboutIcon src={des} type="image/png" />
          <AboutH2>UI Designer</AboutH2>
          <AboutP2>
            I value simple structure, clean design and unique interactions.
          </AboutP2>
          <AboutH3>Models:</AboutH3>
          <AboutP2>UX, UI, Web, Mobile, Apps & Logos</AboutP2>
          <AboutH3>Design Tools:</AboutH3>
          <AboutList>
            <AboutP2>Adobe XD</AboutP2>
            <AboutP2>Figma</AboutP2>
            <AboutP2>Sketch</AboutP2>
            <AboutP2>Canva</AboutP2>
          </AboutList>
        </AboutGroup>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
