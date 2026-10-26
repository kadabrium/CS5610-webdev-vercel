export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const square = (n: number) => n * n;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)}
      square(-3) = {square(-3)}
      <hr />
    </div>
  );
}/**After the multiply examples, add const divide = (a: number, b: number) => a / b and interpolate divide(20, 4) the same way as multiply(4, 5). */