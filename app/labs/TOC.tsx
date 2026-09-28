import Link from "next/link";

export default function TOC() {
  return (<>
    <h4>Collection of my artisanal slop</h4>
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
        <Link href="/labs/lab4">Lab 4</Link>
      </li>
      <li>
        <Link href="/labs/lab5">Lab 5</Link>
      </li>
      <li>
        <Link href="/">Welcome page</Link>
      </li>

      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>

      <li>
        <Link href="https://webdev-client.vercel.app/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
    </ul>
  
  </>)
}


/**
 * Add a Next.js Link to (webdev-client.vercel.app/)/book/ch1 labeled "Chapter 1" (id wd-toc-book-link)
 *  with the other lab links. 
 */