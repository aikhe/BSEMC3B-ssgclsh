export const Arena = () => {
  return (
    <section
      id="arena"
      className="relative z-[-5] grid h-[40rem] w-full items-center justify-center border-b-4 border-white bg-neutral-content"
    >
      <img
        className="absolute h-full w-full object-cover"
        src="https://cdn2.unrealengine.com/evergreen-patternbackground-1920x1080-a7141a12bf8f.png"
        alt=""
      />
      <span className="z-[1] text-4xl text-white">ARENA</span>
    </section>
  );
};
