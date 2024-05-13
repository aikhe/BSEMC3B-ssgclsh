import Image from "next/image";
import Link from "next/link";
import { ButtonVariants } from "../ui/button-variants";

export const Hero = () => {
  return (
    <>
      <section
        className="clip-path relative z-[10] -mb-[4.7rem] mt-[11.15rem] flex size-10
          min-h-[30rem] w-full flex-col gap-[7rem] bg-white object-cover md:mt-[4.5rem]
          md:min-h-[60rem] md:gap-[11rem]"
      >
        <img
          className="absolute h-[120%] w-full -translate-y-[16.5%] object-cover md:h-full md:-translate-y-0"
          src="https://cdn2.unrealengine.com/key-art-web-test-zoomed-in-2334x1312-7b7413133b76.png"
          alt=""
        />
        <img
          src="/images/sausage-logo.png"
          alt=""
          className="z-[1] mx-auto -mt-4 size-[18rem] md:mt-[4rem] md:size-[32.5rem]"
        />
        {/* <Image
          className="object-cover"
          src="https://cdn2.unrealengine.com/fg-10-3-evg-keyart-backgroundonly-1920x1080-1920x1080-cf86998087ba.png"
          alt=""
          fill
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        /> */}
        <Link href="#gameplay" className="z-[1] mx-auto text-white ">
          <ButtonVariants text="START YOUR JOURNEY" whiteText />
        </Link>
      </section>
      <div className="clip-path relative z-[9] -mb-[5rem] h-[5rem] w-full bg-white"></div>
    </>
  );
};
