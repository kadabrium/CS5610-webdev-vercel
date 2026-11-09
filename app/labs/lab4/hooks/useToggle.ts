import { useState } from "react";

export default function useToggle(initial: boolean=false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(!on);

  return [on, toggle] as const;
}