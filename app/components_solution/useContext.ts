import { useState } from "react";
import type { CountContextType } from "./context";

export default function useCountContext(): CountContextType{
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
}