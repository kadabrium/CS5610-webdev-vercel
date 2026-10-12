export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>

      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>

      <p className="wd-bg-color-yellow wd-fg-color-purple">
        This background of this paragraph is yellow but{" "}
        <span className="wd-bg-color-grey wd-fg-color-red">
          the background of this text is grey and the foreground red. Both attributes
          are appended after one <code>className</code>
        </span>
      </p>
      <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">Sample yellow background with black text</div>
    </div>
  );
}

/**
 * add one more sample block with corresponding color declaration in the css
 *  with id wd-ai-bg that uses wd-bg-color-yellow and wd-fg-color-black
 */
