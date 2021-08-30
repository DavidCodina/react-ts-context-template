import React, { createContext, useContext, useState } from 'react';


export interface AppContextValue {
  count: number;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
  incrementCount: (n: number) => void;
  decrementCount: (n: number) => void;
  resetCount:     () => void;
  // [key: string]: any; 
}


export const AppContext  = createContext({} as AppContextValue);
export const AppConsumer = AppContext.Consumer;


export const AppProvider = (props: { children: React.ReactNode }) => {
  const [ count, setCount ] = useState(0);

  // Rather than exposing the setter, sometimes it's better to only 
  // expose functions for the intented usage.
  const incrementCount      = (n: number) => setCount(currentValue => currentValue + n);
  const decrementCount      = (n: number) => setCount(currentValue => currentValue - n);
  const resetCount          = () =>          setCount(0);
  

  return (
    <AppContext.Provider value={{ count, incrementCount, decrementCount, resetCount }}>
      { props.children }
    </AppContext.Provider>
  );
};


export function useAppContext(){
  const value = useContext(AppContext);
  return value;
}