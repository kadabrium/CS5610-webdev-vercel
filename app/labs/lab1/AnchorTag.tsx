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
      <br />
      {/* New tab + safer external link */}
      <a
        href="https://neetcode.com"
        target="_blank"
        rel="noreferrer"
      >
        neetcode (new tab)
      </a>
      <br />
      This language is fun: {" "}
      <a
        href="https://dlang.org"
        target="_blank"
        rel="noreferrer"
      >
        Dlang.org (new tab)
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}


/**Add one more sample absolute link with id wd-ai-link to 
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table labeled "MDN: table element" */