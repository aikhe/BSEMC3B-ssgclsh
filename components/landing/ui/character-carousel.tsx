import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CharacterCarousel = () => {
  return (
    <Carousel className="flex flex-col items-center gap-4 md:gap-10">
      <CarouselContent className="mx-0">
        {Array.from({ length: 3 }, (_, index) => (
          <CarouselItem className="flex justify-center px-0" key={index}>
            <div className="size-[15rem] cursor-grab rounded-full border-[6px] border-white bg-white/40 drop-shadow-md"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="h-2 w-16 rounded-full bg-white/50" />
          ))}
        </div>
        <div className="flex gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
};
