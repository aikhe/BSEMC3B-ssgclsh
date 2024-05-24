import { GalleryItem } from "@/components/gallery-item";

export default function Gallery() {
  return (
    <section className="relative z-10 flex min-h-[100svh] w-full items-center">
      <img
        className="absolute -z-[1] h-full w-full object-cover"
        src="/images/gallery/bg.jpg"
        alt=""
      />
      {/* <GalleryItem /> */}
    </section>
  );
}
