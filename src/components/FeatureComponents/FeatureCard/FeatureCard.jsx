import React from "react";
import {
  FeatureItem,
  FeatureIcon,
  FeatureItemTitle,
} from "./FeatureCardStyles";

const FeatureCard = ({ imgSrc, imgAlt, title, children }) => {
  return (
    <FeatureItem>
      <FeatureIcon src={imgSrc} alt={imgAlt} />
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <p>{children}</p>
    </FeatureItem>
  );
};

export default FeatureCard;
