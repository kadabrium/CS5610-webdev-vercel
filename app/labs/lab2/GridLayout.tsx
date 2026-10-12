export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>

      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>
        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>
        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-two-thirds-page wd-bg-color-yellow">
          <h3>Narrow left side</h3>
        </div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          <h3>Wide right side</h3>
        </div>
      </div>

      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-yellow">Sample one third</div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">Sample two thirds</div>
      </div>
      <div className="wd-float-done" />
    </div>
  );
}

/**
 * add one more sample wd-grid-row with id wd-ai-grid that uses wd-grid-col-third-page
 *  and wd-grid-col-two-thirds-page plus background classes.
 */
