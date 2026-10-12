export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-blue">
        The text in this paragraph is blue but{" "}
        <span className="wd-fg-color-red">this text wrapped in a span is red</span>
      </p>
      <p className="wd-fg-color-blue">
        The text in this paragraph is blue but{" "}
        <span className="wd-fg-color-black">this text is black</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        Sample blue text with <span className="wd-fg-color-black">black text inside a span</span>.
      </p>
    </div>
  );
}

/**
 * add one more sample paragraph with id wd-ai-fg that uses wd-fg-color-blue on the paragraph and wd-fg-color-black on a nested span.
 */
