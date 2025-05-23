


interface ButtonOutlineProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}


const ButtonOutline = ({
  text,
  onClick,
  disabled = false,
}:ButtonOutlineProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`bg-transparent border-black text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      {text}
    </button>
  )
}

export default ButtonOutline