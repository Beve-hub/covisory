"use client";
interface ButtonFilledProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonFilled = ({
  text,
  onClick,
  disabled = false,
}: ButtonFilledProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-background font-bold py-1  px-4 rounded hover:bg-secondary focus:outline-none focus:shadow-outline ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;