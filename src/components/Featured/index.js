/** @format */

import React from "react";
import { ArrowUpward } from "@material-ui/icons";
import { featuredData } from "../../data";
import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedMoneyContainer,
  FeaturedTitle,
  FeaturedSub,
} from "./FeaturedElements";

const Featured = () => {
  return (
    <FeaturedContainer>
      {featuredData &&
        featuredData.map((item, index) => (
          <FeaturedItem key={index}>
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedMoneyContainer>
              <span className="featuredMoney">{item.money}</span>
              <span className="featuredMoneyRate">
                {item.moneyRate} <ArrowUpward className="featuredIcon" />
              </span>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to Previous month</FeaturedSub>
          </FeaturedItem>
        ))}
    </FeaturedContainer>
  );
};

export default Featured;
