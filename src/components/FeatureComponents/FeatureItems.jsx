import React from "react";
import styled from "styled-components";
import featureItemsData from "../../data/featureItemsData";
import FeatureCard from "./FeatureCard";

const Features = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

/**
 * Afficher les composants FeatureCard basé sur les données du tableau featureItemsData.
 *
 * Display FeatureCard components based on data from the featureItemsData array.
 *
 * @component
 */

function FeatureItems() {
  return (
    <Features>
      {featureItemsData.map((item) => (
        <FeatureCard
          key={item.imgSrc}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
        >
          {item.description}
        </FeatureCard>
      ))}
    </Features>
  );
}

export default FeatureItems;
