export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>

      {/* New tab + safer external link */}
      <a
        href="https://github.com/jannunzi"
        target="_blank"
        rel="noreferrer"
      >
        GitHub (new tab)
      </a>
    </>
  );
}
/**
 * add two more anchors — one absolute link to a website you visit often 
 * (news, docs, or a hobby site) with id wd-your-link, and one that opens
 *  your own GitHub (or LinkedIn) profile in a new tab with target="_blank" and rel="noreferrer" (id wd-your-github).
 */

/**Add one more sample absolute link with id wd-ai-link to 
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table labeled "MDN: table element" */