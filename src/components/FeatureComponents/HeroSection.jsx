import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  background-image: url("assets/img/bank-tree.jpeg");
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media (min-width: 520px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 520px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 520px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 520px) {
    font-size: 1.2rem;
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
