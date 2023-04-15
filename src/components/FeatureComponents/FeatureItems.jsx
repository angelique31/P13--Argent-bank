import React from "react";
import featureItemsData from "../../data/featureItemsData";
import FeatureCard from "./FeatureCard";

function FeatureItems() {
  return (
    <div className="features">
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
    </div>
  );
}

export default FeatureItems;
