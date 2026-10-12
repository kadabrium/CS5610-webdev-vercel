export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
      <div id="wd-ai-padded" className="wd-ai-padding-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Sample padding on the top only
      </div>
    </div>
  );
}

/**
 * In app/labs/lab2/Padding.tsx, after the three sample boxes, add one more sample box with id wd-ai-padded that uses a
 *  new class in app/labs/lab2/index.css (padding-top only, plus a fat red solid border and yellow background). 
 * In app/labs/lab2/BoxModel.tsx, add a third sample box with the same width/padding/border as the others but a comment noting which box-sizing keeps the declared width. Do not overwrite my personal boxes.
 */
