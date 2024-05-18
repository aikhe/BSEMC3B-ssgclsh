"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const characters = [
  {
    imgUrl: "/images/characters/sausage-placeholder1.png",
  },
  {
    imgUrl: "/images/characters/sausage-placeholder3.png",
  },
  {
    imgUrl: "/images/characters/sausage-placeholder2.png",
  },
];

export const CharacterCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(1);

  const onPrevClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
      setCharIndex(charIndex - 1);
    }
  };

  const onNextClick = () => {
    if (carouselIndex < characters.length - 1) {
      setCarouselIndex(carouselIndex + 1);
      setCharIndex(charIndex + 1);
    }
  };

  const buttons = [
    {
      Icon: ChevronLeft,
      onclick: onPrevClick,
    },
    {
      Icon: ChevronRight,
      onclick: onNextClick,
    },
  ];

  const charNum = [1, 2, 3];

  return (
    <>
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <div className="relative flex max-w-[100vw] items-center gap-6 overflow-hidden md:max-w-[30rem] lg:max-w-[50rem] lg:gap-14">
          <button
            onClick={onPrevClick}
            className="absolute z-10 hidden items-center justify-center rounded-full
              border-4 border-white bg-[#445fba] drop-shadow-md hover:bg-[#6175b8]
              md:left-0 md:flex md:size-12 lg:left-[8%] lg:size-14"
          >
            <ChevronLeft className="md:size-[2rem]" />
          </button>

          <motion.div
            className="flex flex-nowrap"
            animate={{
              x: `calc(-${carouselIndex * 33.3}%)`,
            }}
          >
            {characters.map((char, index) => {
              return (
                <div
                  key={index}
                  className="flex w-[100vw] justify-center md:w-[30rem] lg:w-[50rem]"
                >
                  <motion.div
                    className={`size-[15rem] overflow-hidden rounded-full border-[6px] bg-white/40 drop-shadow-md md:size-[20rem] lg:size-[30rem] lg:border-[6px]`}
                    animate={{ opacity: index === carouselIndex ? 1 : 0 }}
                  >
                    {char.imgUrl && (
                      <img
                        className="absolute h-full w-full object-cover"
                        src={char.imgUrl}
                        alt=""
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          <button
            onClick={onNextClick}
            className="absolute z-10 hidden items-center justify-center rounded-full border-4
              border-white bg-[#445fba] drop-shadow-md hover:bg-[#6175b8] md:right-0 md:flex
              md:size-12 lg:right-[8%] lg:size-14"
          >
            <ChevronRight className="md:size-[2rem]" />
          </button>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-2">
            {[...charNum].map((num, index) => {
              return (
                <div
                  key={index}
                  className={`${charIndex === num ? "bg-white/90" : "bg-white/40"} h-2 w-16 rounded-full`}
                />
              );
            })}
          </div>

          <div className="flex gap-4 md:hidden">
            {buttons.map((button, index) => {
              const Icon = button.Icon;

              return (
                <button
                  key={index}
                  onClick={button.onclick}
                  className="flex size-10 rounded-full border-4 border-white bg-[#445fba] p-1 drop-shadow-md hover:bg-[#6175b8]"
                >
                  <Icon />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
