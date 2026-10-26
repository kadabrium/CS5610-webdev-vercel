export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let var1 = "var is rarely used";
  const var2 = "in modern javascript";
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}
      var1 + var2 = {var1+var2} <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
