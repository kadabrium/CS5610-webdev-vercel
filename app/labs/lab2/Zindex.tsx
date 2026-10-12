export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>

        <div className="wd-zindex-bring-to-front wd-pos-absolute-55-55 wd-dimension-landscape wd-bg-color-black wd-fg-color-white">
          Landscape 2
        </div>
        <div id="wd-ai-zindex" className="wd-ai-zindex-top wd-bg-color-yellow wd-dimension-square">Sample on top</div>

      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

/**
 * add a sample box with id wd-ai-zindex using a new class .wd-ai-zindex-top (z-index: 20; position: absolute; top: 80px; left: 80px) 
 * plus a background and dimension class so it sits above the existing stack
 */
