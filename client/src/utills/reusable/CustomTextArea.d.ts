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
declare const CustomTextArea: ({ label, placeholder, value, onChange, error, className, rows, disabled, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export default CustomTextArea;
