export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const courseObj = { course: "RS101", credits: 4 }
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}<br/>
      course = {JSON.stringify(courseObj)}
      <hr />
    </div>
  );
}
/**After the squares line, also interpolate JSON.stringify({ course: "RS102", modules: 3 }) labeled sampleCourse */