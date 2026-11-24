"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

type ContextType = {
  activeMenuItem: string | null;
  setActiveMenuItem: (item: string) => void;
};

const MyContext = createContext<ContextType | null>(null);

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      activeMenuItem,
      setActiveMenuItem,
    }),
    [activeMenuItem]
  );

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within MyContextProvider");
  }

  return context;
};

export { MyContextProvider, useMyContext };