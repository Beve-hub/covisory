interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const CustomInput = ({label,  type = "text",  name,  value,  onChange,  placeholder, error,  className = "",}:InputFieldProps) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}> 
      {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent $ {
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default CustomInput

