import React from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import Footer from "../components/Footer";
import FeatureItems from "../components/FeatureComponents/FeatureItems";
import HeroSection from "../components/FeatureComponents/HeroSection";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1 1;
`;

const LandingPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <Main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItems />
        </section>
      </Main>
      <Footer />
    </MainContainer>
  );
};

export default LandingPage;
