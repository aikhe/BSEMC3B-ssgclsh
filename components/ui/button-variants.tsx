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
      group/button flex items-center justify-center overflow-hidden rounded-full
      border-4 px-6 py-[.6rem] text-[1.05rem] drop-shadow-xl`}
    >
      <div
        className="absolute flex size-0 items-center justify-center overflow-hidden rounded-e-full
        rounded-s-full duration-700 ease-in-out group-hover/button:size-64"
      >
        <div className="bttn-gradience absolute size-64 rounded-e-full rounded-s-full "></div>
      </div>
      <span
        className={`${whiteText ? "" : "group-hover/button:text-white"} drop-shadow-sm duration-500 ease-in-out`}
      >
        {text}
      </span>
    </button>
  );
};
