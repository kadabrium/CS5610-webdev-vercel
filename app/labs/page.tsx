import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
      </ul>
    </div>
  );
}
/**
 * Create a Lab 4 placeholder page at app/labs/lab4/page.tsx (a simple heading is enough), 
 * then add a Link to /labs/lab4 on the Labs index. The new route should load without a
 *  full page refresh, just like Labs 1–3.
 */

/**
 * add app/labs/lab5/page.tsx that exports a default component rendering an h2 "Lab 5". 
 * In app/labs/page.tsx, add a Next.js Link to /labs/lab5 next to the existing lab links
 */