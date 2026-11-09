"use client";

const hello = () => {
  alert("Hello World!");
};



export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>

      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Hello with name
      </button>

      <hr />
    </div>
  );
}
/**After the existing Click Hello button, add a sample button id="wd-onclick-goodbye" 
 * that alerts "Goodbye World!" using a goodbye function. Do not rename my personal button */