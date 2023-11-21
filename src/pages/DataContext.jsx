import { React, useState, createContext,useContext } from "react";


// Create a new context and export
const NameContext = createContext();
// Create a Context Provider
export default function NameContextProvider  ({ children }) {
    const [Pdata, setPdata] = useState(undefined);
 
    return (
        <NameContext.Provider value={{ Pdata, setPdata }}>
            {children}
        </NameContext.Provider>
    );
};

export function useData() {
    return useContext(NameContext);
  }

 