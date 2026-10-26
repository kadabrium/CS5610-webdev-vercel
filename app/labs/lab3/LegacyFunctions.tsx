function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a-b;
}

export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)}
      subtract(0, -1) = {subtract(0, -1)}
      <hr />
    </div>
  );
}
/**After the existing add examples, add function multiply(a: number, b: number) { return a * b; }, call it as const threeTimesSeven = multiply(3, 7), console.log that result, and interpolate both threeTimesSeven and multiply(3, 7) under the sum. */