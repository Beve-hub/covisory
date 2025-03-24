import React from "react";
type SelectFieldProps = {
    label?: string;
    options: {
        value: string;
        label: string;
    }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};
declare const CustomSelect: React.FC<SelectFieldProps>;
export default CustomSelect;
