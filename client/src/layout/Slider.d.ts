import { ReactNode } from "react";
interface SliderContextType {
    isOpen: boolean;
    toggleSlider: () => void;
}
interface SliderProviderProps {
    children: ReactNode;
}
export declare const SliderProvider: ({ children }: SliderProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useSlider: () => SliderContextType;
export {};
