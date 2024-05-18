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
          rounded-full border-4 px-6 py-[.6rem] text-[1.05rem] drop-shadow-xl`}
    >
      <span className="drop-shadow-sm">{text}</span>
    </button>
  );
};
