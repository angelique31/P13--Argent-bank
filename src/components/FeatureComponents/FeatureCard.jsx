import React from "react";
import styled from "styled-components";

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

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
