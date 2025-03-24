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
declare const CustomInput: ({ label, type, name, value, onChange, placeholder, error, className, }: InputFieldProps) => import("react/jsx-runtime").JSX.Element;
export default CustomInput;
