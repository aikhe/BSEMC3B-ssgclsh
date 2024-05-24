"use client";

import { motion } from "framer-motion";

export const GalleryItem = () => {
  return (
    <>
      {/* <div
        className="relative flex max-w-[100vw] items-center gap-6 md:max-w-[30rem]
      lg:max-w-[50rem] lg:gap-14"
      >
        <div className="flex flex-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="inspect flex w-[100vw] justify-center md:w-[30rem] lg:w-[50rem]"
            >
              <div
                className={`size-[15rem] rounded-full border-[6px]
                    bg-white/40 drop-shadow-md md:size-[20rem] lg:size-[30rem] lg:border-[6px]
                    `}
              ></div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="max-w-[40rem]">
        <div className="flex flex-nowrap">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-[25rem] w-[40rem]">
              <div
                className="relative h-[25rem] w-[40rem] overflow-hidden rounded-xl border-4 border-white
                bg-white/40"
              >
                <img
                  className="absolute h-full w-full object-cover"
                  src="/images/arena/placeholder1.PNG"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

    // <motion.div className="flex flex-nowrap">
    //   {[...Array(4)].map((_, idx) => (
    //     <div key={idx} className="inspect flex w-[40rem] overflow-hidden">
    //       <motion.div
    //         className="h-[25rem] w-[40rem] overflow-hidden
    //         rounded-xl border-4 border-white bg-white/40 drop-shadow-lg lg:-mb-12"
    //       >
    //         <img
    //           className="absolute h-full w-full object-cover"
    //           src="/images/arena/placeholder1.PNG"
    //           alt=""
    //         />
    //       </motion.div>
    //     </div>
    //   ))}
    // </motion.div>
  );
};
