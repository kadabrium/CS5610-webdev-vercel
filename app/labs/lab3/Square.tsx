import { ReactNode } from "react";

export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return <span id="wd-square">{num * num}</span>;
}
/**In the main page, add <p>Square of 5 = <Square>5</Square></p> and one more <Highlight>Children can be any JSX</Highlight>.  */