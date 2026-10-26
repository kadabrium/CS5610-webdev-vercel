export default function ArrayIndexAndLength() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  const notFound = numberArray1.indexOf(9);
  return (
    <div id="wd-array-index-and-length">
      <h4>Array index and length</h4>
      length1 = {length1} <br />
      index1 = {index1}
      not found = {notFound}
      <hr />
    </div>
  );
}
/**After index1, also interpolate numberArray1.indexOf(1) labeled indexOf1 so the page shows 0. */