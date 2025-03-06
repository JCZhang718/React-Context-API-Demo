import { createContext } from "react";

export interface CountContextType {
  count: number;
  increment: () => void;
}

export const CountContext = createContext({} as CountContextType);