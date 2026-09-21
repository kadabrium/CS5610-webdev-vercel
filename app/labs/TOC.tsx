import Link from "next/link";

export default function TOC() {
  return (<>
    <ul>
      <li>
        <Link href="/labs/lab1">Lab 1</Link>
      </li>
      <li>
        <Link href="/labs/lab2">Lab 2</Link>
      </li>
      <li>
        <Link href="/labs/lab3">Lab 3</Link>
      </li>
      <li>
        <Link href="/">Welcome page</Link>
      </li>
    </ul>
  
  </>)
}
/**
 * In TOC.tsx, add a small personal touch above or below the lab links — your name, 
 * a one-line motto, or a Link back to the book chapter. Keep the shared layout 
 * structure; only the TOC content should feel like yours.
 */

/**
 * Add a Next.js Link to /book/ch1 labeled "Chapter 1" (id wd-toc-book-link)
 *  with the other lab links. Do not change the layout table in layout.tsx.
 */