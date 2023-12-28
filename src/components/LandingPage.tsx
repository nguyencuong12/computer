import React from "react";
import { Banner, HeroComponent, StatsComponent, BusinessComponent, BillingComponent, CardDealComponent, Testimonials, Clients } from "@/components";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <HeroComponent />
      <StatsComponent />

      <BusinessComponent />
      <BillingComponent />
      <CardDealComponent />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default LandingPage;
