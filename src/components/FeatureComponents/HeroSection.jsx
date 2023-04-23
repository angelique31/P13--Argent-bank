import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  background-image: url(${process.env.PUBLIC_URL +
  "/assets/img/bank-tree.jpeg"});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: 400px;
  @media (min-width: 520px) {
    height: 400px;
  }
  @media (min-width: 845px) {
    height: 530px;
  }
  @media (min-width: 1079px) {
    height: 664px;
  }
  @media (min-width: 1500px) {
    height: 864px;
  }
  @media (min-width: 1500px) {
    height: 960px;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 75px;
  background: white;
  padding: 5px;
  text-align: left;
  right: -280px;
  @media (min-width: 440px) {
    right: -310px;
  }
  @media (min-width: 519px) {
    width: 167px;
  }
  @media (min-width: 720px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
    padding: 10px;
  }
  @media (min-width: 1400px) {
    padding: 40px;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 0.6rem;
  margin: 0;
  @media (min-width: 520px) {
    font-size: 1rem;
  }

  @media (min-width: 720px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1090px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.7rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.5rem;
  @media (min-width: 720px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1090px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroContent>
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
