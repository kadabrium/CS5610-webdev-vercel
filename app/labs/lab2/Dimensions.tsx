export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>

        <div className="wd-dimension-tall wd-bg-color-black wd-fg-color-white">Tall rectangle</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample sentence is longer than the space inside a box that is only 120px wide and 60px tall.
        </div>

      </div>
    </div>
  );
}

/**
 * after the portrait/landscape/square samples, add a sample box with id wd-ai-dimension
 *  using a new class in app/labs/lab2/index.css (width 120px, height 60px, yellow background) 
 * whose text is a long sentence so the declared size is obvious. In app/labs/lab2/Display.tsx,
 *  after the block row, add a sample div with id wd-ai-display that uses wd-display-inline plus a background class.
 */
