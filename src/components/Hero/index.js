import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  VideoBg,
  HeroFrost,
} from "./HeroElms";
import Video from "../../videos/video.mp4";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer id="home">
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroFrost />
      <HeroContent>
        <HeroH1>Developer / Artist / Designer</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
