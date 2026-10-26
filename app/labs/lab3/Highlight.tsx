import { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      id="wd-highlight"
      style={{ backgroundColor: "yellow", color: "red" }}
    >
      {children}
    </span>
  );
}
/** In page.tsx, after the sample Square of 4, add <p>Square of 5 = <Square>5</Square></p> and one more <Highlight>Children can be any JSX</Highlight> */