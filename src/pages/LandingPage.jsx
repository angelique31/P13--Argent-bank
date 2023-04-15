import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FeatureItems from "../components/FeatureComponents/FeatureItems";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItems />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
