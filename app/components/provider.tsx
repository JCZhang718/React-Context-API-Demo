import { useState } from "react";
import { CountContext } from "./context";
import useCountContext from "./useContext";

export default function CountProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children}
    </CountContext.Provider>
  );
}