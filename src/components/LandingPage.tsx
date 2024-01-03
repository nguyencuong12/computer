"use client";
import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Banner,
  HeroComponent,
  Policy,
  StatsComponent,
  BusinessComponent,
  BillingComponent,
  CardDealComponent,
  Testimonials,
  Clients,
  SectionWithGallery,
  BannerVer2,
} from "@/components";

import { bill } from "@/assets";
const LandingPage = () => {
  const ref = useRef(null);

  const galleries: ItemWithLink[] = [
    {
      id: uuidv4(),
      title: "Mini PC ASRock DeskMini X300 - X300/B/BB/BOX/US",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
    {
      id: uuidv4(),
      title: "This is titel",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
    {
      id: uuidv4(),
      title: "This is titel",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
    {
      id: uuidv4(),
      title: "This is titel",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
    {
      id: uuidv4(),
      title: "This is titel",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
    {
      id: uuidv4(),
      title: "This is titel",
      price: "500000",
      beforeDiscount: "100000",
      image: bill.src,
    },
  ];
  const isInView = useInView(ref, { once: true });
  const slideControls = useAnimation();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={"visible"}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {/* <Banner /> */}
      <BannerVer2/>
      <Policy />
      <SectionWithGallery title="Sản phẩm bán chạy" categories={[]} galleries={galleries}></SectionWithGallery>

      <BusinessComponent />

      <CardDealComponent />

      <Testimonials />
      <Clients />
    </motion.div>
  );
};

export default LandingPage;
