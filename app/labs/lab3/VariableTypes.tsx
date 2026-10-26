export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  const str2 = "every data type can be let, const or var";
  const negNum2 = -0.02;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}
      str2 = {str2}
      negNum2 = {negNum2}
      <hr />
    </div>
  );
}
/**After the existing samples, add let sampleCount = 42 and let sampleLabel = "Lab 3", plus typeof for each, and display them the same way (value, then the typeof string).  */