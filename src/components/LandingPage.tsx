import React from "react";
import { HeroComponent, StatsComponent, BusinessComponent, BillingComponent, CardDealComponent } from "@/components";

const LandingPage = () => {
  return (
    <div>
      <HeroComponent />
      <StatsComponent />
      <BusinessComponent />
      <BillingComponent />
      <CardDealComponent />
    </div>
  );
};

export default LandingPage;
