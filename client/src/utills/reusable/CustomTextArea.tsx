

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
}

const CustomTextArea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  className = "",
  rows = 4,
  disabled = false,
}:TextAreaProps) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default CustomTextArea;

