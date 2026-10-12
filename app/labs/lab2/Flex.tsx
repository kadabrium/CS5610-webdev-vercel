import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        {/*column 3 fills rest of row space*/}
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">Column 2 grows</div>
        {/*column 3 fills rest of row space*/}
        <div className="wd-bg-color-red wd-fg-color-white wd-width-110px">
          Column 3
        </div>
      </div>

      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-110px wd-bg-color-yellow">110px</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Middle</div>
        <div className="wd-flex-grow-1 wd-bg-color-red">Sample growing column</div>
      </div>
    </div>
  );
}

/**
 * add one more sample flex row with id wd-ai-flex: three children, the first with wd-width-110px,
 *  the last with wd-flex-grow-1, and background classes so it is obvious which column stretches
 */
