import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FeatureItems from "../../components/FeatureComponents/FeatureItems";
import HeroSection from "../../components/FeatureComponents/HeroSection/HeroSection";
import { MainContainer, Main } from "./LandingPageStyles";

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
