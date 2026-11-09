import { useEffect, useState } from "react";

export type WindowSize = { width: number; height: number };

export default function useWindowSize() {
  // when window is resized (through the eventlistener calling update), 
  // store the current size in this state variable
  // and return for callers to access
  const [size, setSizeObj] = useState<WindowSize|null>(null);

  useEffect(() => {
    const update = () => setSizeObj({ width: window.innerWidth, height: window.innerHeight });

    const first = requestAnimationFrame(update);
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener("resize", update);
    };

  }, []);

  return size;
}