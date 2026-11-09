import { createContext, useContext, useState, type ReactNode , type Context} from "react";

// ----- creates Context and useContext wrapper for a custom type -----

type CounterContextValue = {
  count: number;
  setCount: (count: number) => void;
};

const CounterContext: Context<CounterContextValue|null> = createContext<CounterContextValue|null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  // declare a count: number variable and a setter, then binds them
  // to a shared CounterContextValue object. 
  const [count, setCount] = useState<number>(7);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// callers wrapped in CounterContext tags call this to access the shared CounterContextValue object
export function useCounterContext() {
  const value: CounterContextValue|null = useContext(CounterContext);
  if (!value) {
    throw new Error("useCounterContext must be used inside CounterProvider");
  }
  return value;
}