"use client";
import { useState } from "react";


export default function Counter() {
  // declare the variable and the setter changing it under useState
  // additional logic goes into the lambdas
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-counter-reset-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset
      </button>
      <hr />
    </div>
  );
}
/**After Down, add a sample button id="wd-counter-reset-click" that calls setCount(7) */