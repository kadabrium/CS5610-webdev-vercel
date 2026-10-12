export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>

      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>


      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-bg-color-yellow wd-dimension-square">
            Sample bottom right
          </div>
        </div>
      </div>

      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all the way
        on the right and half way down the page. It doesn&apos;t scroll with the
        rest of the page. Its position is &quot;Fixed&quot;.
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
      </div>

      <div id="wd-css-position-relative">
        <h2>monochrome: absolute divs inside relative div</h2>
        <div className="wd-pos-absolute" style={{ height: 150 }}>
          <div className="wd-pos-absolute-30-30 wd-bg-color-black wd-fg-color-white wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-60-60 wd-bg-color-black wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-100-20 wd-bg-color-black wd-fg-color-white wd-dimension-square">
            Square
          </div>
        </div>
      </div>

    </div>
  );
}

/**
 * add a sample box with id wd-ai-absolute using a new class .wd-ai-pos-absolute-br 
 * (position: absolute; right: 10px; bottom: 10px) plus a background and dimension class,
 *  inside the existing position: relative parent. Offset it to the bottom-right corner the demo does not already show.
 */
