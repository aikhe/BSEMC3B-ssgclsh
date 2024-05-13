export const Character = () => {
  return (
    <>
      <section
        id="character"
        className="clip-path relative z-[-3] -mb-[4.7rem] grid h-[45rem] w-full items-center justify-center bg-gray-600"
      >
        <img
          className="absolute h-full w-full object-cover"
          src="https://cdn2.unrealengine.com/evergreen-patternbackground-1920x1080-a7141a12bf8f.png"
          alt=""
        />
        <span className="z-[1] text-4xl text-white">CHARACTER</span>
      </section>
      <div className="clip-path relative z-[-4] -mb-[5rem] h-[5rem] w-full bg-white"></div>
    </>
  );
};
