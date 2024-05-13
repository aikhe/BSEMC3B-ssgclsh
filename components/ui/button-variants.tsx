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
      className={`${whiteText ? "border-white bg-[#fa8237] text-white hover:bg-[#ffa065]" : "border-[#fa8237] bg-white text-[#fa8237] hover:border-[#ffa065] hover:text-[#ffa065]"}
          rounded-full border-4 px-6 py-[.6rem] text-[1.05rem] drop-shadow-xl`}
    >
      <span className="drop-shadow-sm">{text}</span>
    </button>
  );
};
