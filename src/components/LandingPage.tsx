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
  ModalQuickView,
} from "@/components";

import { bill } from "@/assets";
import { useSelector, useDispatch } from "react-redux";
import { showQuickView, closeQuickView, isOpenQuickView } from "@/store/slices/quickViewProduct";
import styles from "@/app/style";
const LandingPage = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(isOpenQuickView);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const slideControls = useAnimation();
  const item = {
    title: "string",
    id: "dsf",
  };
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
      <ModalQuickView isVisible={isOpenModal} />

      <BannerVer2 />
      <div className={`${styles.boxWidth} m-auto`}>
        <SectionWithGallery banner="" title="PC Máy bộ" categories={"Cần câu cá"}></SectionWithGallery>
      </div>
      {/* <div className={`${styles.boxWidth} m-auto`}>
        <SectionWithGallery title="Ổ cứng SSD" categories={[]} galleries={galleries}></SectionWithGallery>
      </div>
      <div className={`${styles.boxWidth} m-auto`}>
        <SectionWithGallery title="RAM PC" categories={[]} galleries={galleries}></SectionWithGallery>
      </div>
      <div className={`${styles.boxWidth} m-auto`}>
        <SectionWithGallery title="Gaming Gear" categories={[]} galleries={galleries}></SectionWithGallery>
      </div> */}
    </motion.div>
  );
};

export default LandingPage;
