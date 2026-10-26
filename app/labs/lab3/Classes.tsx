import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;
  const greenOrYellow = "green";
  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background
      </div>
      <div
        className={`${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-fg-black wd-padding-10px`}
      >
        Dangerous background
      </div>
      <div
        className={`${greenOrYellow == "green" ? "wd-bg-green" : "wd-bg-yellow"} wd-fg-black wd-padding-10px`}
      >
        Set green or yellow
      </div>
      <hr />
    </div>
  );
}
/**keep color as "blue" and dangerous as true. After the existing boxes, add a sixth div whose className uses a new const shade = "green" as `wd-bg-${shade} wd-fg-black wd-padding-10px` and the text "Dynamic Green background" */