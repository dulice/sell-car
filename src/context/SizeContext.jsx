import { createContext, useState, useEffect } from "react";

export const Context = createContext("");

const ContextProvider = ({children}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    const handleWindowSize = () => {
      setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
      })
    }
    useEffect(() => {
      window.addEventListener('resize', handleWindowSize) 
      return () => window.removeEventListener('resize', handleWindowSize);
    }, []);
    return (
        <Context.Provider value={windowSize}>{children}</Context.Provider>
    )
}
export default ContextProvider;