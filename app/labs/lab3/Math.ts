export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number {
  return a / b;
}
const Math = {
  add,
  subtract,
  multiply,
  divide,
};
export default Math;

/**Add export function remainder(a: number, b: number): number { return a % b; } and include remainder on the default Math object
 *  In app/labs/lab3/DestructingImports.tsx, add remainder to the existing named import on line 1 (do not add a second import line for it), then add one table row that shows Math.remainder(10, 3), Matematica.remainder(10, 3), and remainder(10, 3). */