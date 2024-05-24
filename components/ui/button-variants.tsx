interface ButtonVariantsProps {
  text: string;
  whiteText?: boolean;
}

export const ButtonVariants: React.FC<ButtonVariantsProps> = ({
  text,
  whiteText,
}) => {
  return (
    <button
      className={`${whiteText ? "border-white bg-[#445fba] text-white hover:bg-[#6175b8]" : "border-[#445fba] bg-white text-[#445fba] hover:border-[#6175b8] hover:text-[#6175b8]"}
      group/button flex w-fit items-center justify-center overflow-hidden rounded-full
      border-4 px-6 py-[.7rem] text-[1.05rem] drop-shadow-xl duration-300 hover:-translate-y-1 hover:drop-shadow-2xl`}
    >
      <div
        className="absolute flex size-0 items-center justify-center overflow-hidden rounded-e-full
        rounded-s-full bg-[#fa8237] duration-500 ease-in-out group-hover/button:size-64"
      ></div>
      <span
        className={`${whiteText ? "" : "group-hover/button:text-white"} drop-shadow-sm duration-500 ease-in-out`}
      >
        {text}
      </span>
    </button>
  );
};
