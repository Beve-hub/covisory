import {createContext, useContext, useState, ReactNode } from "react"


// Define the type for the context state
interface SliderContextType {
    isOpen: boolean;
    toggleSlider: () => void;
}


// create context with default value
const SliderContext = createContext<SliderContextType| null>(null);

//provider props type
interface SliderProviderProps {
    children: ReactNode;
}

export const SliderProvider = ({children}:SliderProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleSlider = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <SliderContext.Provider value={{isOpen,toggleSlider}}>
            {children}
        </SliderContext.Provider>
    )
}

//Custom Hook to use the sidebar context
export const useSlider = (): SliderContextType => {
    const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}