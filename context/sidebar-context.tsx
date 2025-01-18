"use client"
import { createContext, useState, useEffect, FC, ReactNode } from "react";

interface SidebarContextProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("sidebarExpanded");
      return storedValue ? JSON.parse(storedValue) : true;
    }
    return true; 
  });

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(expanded));
  }, [expanded]);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };
