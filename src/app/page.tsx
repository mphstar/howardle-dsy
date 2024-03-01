"use client";

import Image from "next/image";
import Header from "./components/organisms/Header";
import CardDoing from "./components/atoms/CardDoing";
import Sidebar from "./components/organisms/Sidebar";
import { HiShoppingCart } from "react-icons/hi";
import { MdNightlightRound } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import Template from "./components/templates/Template";
import LightModeToogle from "./components/molecules/LightModeToogle";
import AOS from "aos";

// import aos styles
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <Template>
      <div className="flex flex-col w-full min-h-[100dvh] container max-w-[1200px] overflow-x-hidden">
        <Header />
        <div className="px-8 flex-1 flex flex-col">
          <div className="flex-1 pb-6 flex flex-col md:flex-row relative">
            <div data-aos="fade-down" data-aos-duration="3000" className="fixed md:absolute pointer-events-none bottom-0  flex w-full items-center h-full justify-center">
              <Image
                className="w-[400px] absolute bottom-0 md:-translate-x-[30px] overflow-hidden flex"
                src={"/assets/images/girl.png"}
                width={776}
                height={517}
                alt="Girl"
              />
            </div>
            <div className="w-fit pr-12 gap-3 justify-center fixed md:static right-0 top-32 z-[50] flex flex-col h-auto">
              <Sidebar />
            </div>
            <div className="flex flex-col pr-4 justify-between">
              <div data-aos="fade-up" className="flex flex-col mt-12">
                <span className=" text-[2rem] dark:text-white duration-300 ease-in-out">
                  Today is
                </span>
                <span className="border-[1px] w-fit px-3 rounded-full text-[2rem] dark:text-white duration-300 ease-in-out">
                  a best
                </span>
                <span className="border-[1px] w-fit px-3 rounded-full text-[2rem] translate-x-4 dark:text-white duration-300 ease-in-out">
                  day to win
                </span>
              </div>
              <div className="flex flex-col gap-4 mt-36 md:mt-0">
                <div data-aos="fade-left" className="flex flex-row gap-1 items-center">
                  <span className=" dark:text-white duration-300 ease-in-out">
                    Daily
                  </span>
                  <span className="border-[2px] rounded-full px-2 duration-300 dark:text-white ease-in-out">
                    summary
                  </span>
                </div>
                <div className="flex flex-row mt-4 gap-3 items-center">
                  <CardDoing title={"To do"} value={"158"} />
                  <CardDoing title={"On going"} value={"42"} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end w-full gap-4 items-end">
              <div data-aos="zoom-in" className="bg-gradient-to-tl from-[#F5F5FB] dark:from-[#39384B] dark:to-[#39384B] to-white hidden md:flex flex-col px-6 py-4 w-fit rounded-2xl items-end">
                <p data-aos="fade-right" data-aos-duration="1000" className="text-4xl font-semibold mb-3 dark:text-white duration-300 ease-in-out">
                  Mphstar
                </p>
                <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="700" className="bg-slate-900 dark:bg-white dark:text-black text-white rounded-full px-2">
                  Website & Mobile Developer
                </p>
                <LightModeToogle />
              </div>
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row items-end w-full gap-4">
                <div className="backdrop-blur-md bg-[#E5E7F4]/30 dark:bg-[#39384B]/30 duration-300 ease-in-out mt-4 h-fit gap-3 border-[1px] dark:border-[#8A8AAB] md:min-w-[350px]  px-4 py-3 border-white rounded-2xl w-full flex flex-row">
                  <div className="flex flex-col flex-1">
                    <h1 className="py-4 dark:text-white duration-300 ease-in-out">
                      Complete
                    </h1>
                    <div className="flex flex-row  items-center gap-2 h-full min-h-[80px] bg-white dark:bg-[#39384B] duration-300 ease-in-out px-3 rounded-2xl w-full relative">
                      <div
                        className={`absolute top-1 right-1 p-2 bg-[#F5F5FB] h-fit rounded-full`}
                      >
                        <Image
                          className=" stroke-white"
                          src={"/assets/icons/ic_arrow.svg"}
                          width={6}
                          height={6}
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-2xl font-bold dark:text-white">
                        02
                      </span>
                      <span className="text-xs mb-2 text-[#757391]">tasks</span>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white dark:bg-[#39384B] duration-300 ease-in-out flex-1 px-5 pr-12 py-2 justify-center rounded-2xl relative">
                    <div
                      className={`absolute bottom-1 right-1 p-2 bg-[#F5F5FB]  h-fit rounded-full`}
                    >
                      <Image
                        className=" stroke-white"
                        src={"/assets/icons/ic_arrow.svg"}
                        width={6}
                        height={6}
                        alt="Arrow"
                      />
                    </div>
                    <div className="flex flex-row gap-2 mb-3 items-center">
                      <HiShoppingCart className="dark:fill-white duration-300 ease-in-out" />
                      <span className="dark:text-white duration-300 ease-in-out">
                        Earnings
                      </span>
                    </div>
                    <p className="font-bold dark:text-white duration-300 ease-in-out">
                      $2,932.07
                    </p>
                    <p className="text-[#757391] text-xs">02 tasks</p>
                  </div>
                </div>
                <div className="flex flex-col z-[5] px-6 py-4 duration-300 ease-in-out bg-[#F5F5FB] border-[1px] dark:border-[#8A8AAB] border-white dark:bg-[#39384B] rounded-2xl w-full">
                  <h1 className="py-4 text-2xl dark:text-white duration-300 ease-in-out">
                    Performance
                  </h1>
                  <div className="flex flex-row justify-between text-xs">
                    <span className="dark:text-white duration-300 ease-in-out">
                      00
                    </span>
                    <span className="dark:text-white duration-300 ease-in-out">
                      08
                    </span>
                    <span className="dark:text-white duration-300 ease-in-out">
                      16
                    </span>
                  </div>
                  <div className="w-full flex flex-col p-2 h-fit bg-[#080A1E] dark:bg-[#29283A] rounded-full mt-2 duration-300 ease-in-out">
                    <div className="flex w-[30%] h-[16px] rounded-full bg-white dark:bg-[#39384B] duration-300 ease-in-out"></div>
                  </div>
                  <h1 className="text-[#a1a1a1] text-xs mt-4">Current</h1>
                  <div className="flex flex-row pb-4">
                    <div className="flex flex-col text-4xl relative font-bold">
                      <div className="bg-[#F5F5FB] border-t-2 border-t-[#080A1E]  absolute w-20 h-1 top-8 -left-2 -rotate-45"></div>
                      <span className="duration-300 ease-in-out dark:text-white">
                        35
                      </span>
                      <span className="ml-5 duration-300 ease-in-out dark:text-white">
                        82
                      </span>
                    </div>
                    <div className="flex flex-col ml-4">
                      <p className="text-[#a1a1a1]">Total</p>
                      <p className="text-[#a1a1a1]">Target</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
