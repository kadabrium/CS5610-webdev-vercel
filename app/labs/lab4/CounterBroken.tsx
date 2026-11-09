"use client";
/*
 * to avoid unnecessary and slow updates, React only updates the real DOM if there have been changes to the virtual DOM. 
 * without useState, A plain change to a variable will not let React paint again.
 */
export default function CounterBroken() {
  let count = 7;
  return (
    <div id="wd-counter-broken">
      <h2>Broken Counter: {count}</h2>
      <button
        type="button"
        onClick={() => {
          count++;
          console.log(count);
        }}
        id="wd-counter-broken-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => {
          count--;
          console.log(count);
        }}
        id="wd-counter-broken-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
      <hr />
    </div>
  );
}