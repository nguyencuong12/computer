"use client";
import styles from "@/app/style";
import { fishing_logo } from "@/assets";
import { footerLinks, socialMedia } from "../constants";
import Link from "next/link";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart}  flex-col mb-10 w-full`}>
      <Link href="/" className={`w-full flex flex-col justify-center items-center mb-4`}>
        <img src={fishing_logo.src} alt="hoobank" className="w-[350px] h-[100.14px] object-contain" />
      </Link>

      <div className=" w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-semibold text-[16px] leading-[27px] black">{footerlink.title}</h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-black hover:text-red  ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.link != "" ? <Link href={link.link}> {link.name}</Link> : <>{link.name}</>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-slate-400/25">
      <p className=" text-center text-[16px]  text-black font-semibold">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>

      <div className="flex flex-row md:mt-0 mt-6 bg-black p-4 rounded">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon.src}
            alt={social.id}
            className={`  w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
