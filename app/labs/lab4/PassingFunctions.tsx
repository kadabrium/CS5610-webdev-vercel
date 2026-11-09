export type FnAndMsg = { message: string; theFunction: (message: string) => void;}
export default function PassingFunctions({message, theFunction}: FnAndMsg) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
/**Add a sample prop theOtherFunction: () => void and a button id="wd-pass-functions-other-click" 
 * that calls it. From page.tsx pass a function that alerts "Sample from parent */