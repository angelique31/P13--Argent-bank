import styled from "styled-components";

export const Hero = styled.div`
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
    // height: 530px;
  }
  @media (min-width: 1079px) {
    height: 466px;
    background-position: 0 -149px;
  }
  @media (min-width: 1500px) {
    height: 564px;
  }
  @media (min-width: 1800px) {
    height: 652px;
  }
`;

export const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 75px;
  background: white;
  padding: 5px;
  text-align: left;
  right: -10px;
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

export const Subtitle = styled.p`
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

export const Text = styled.p`
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
