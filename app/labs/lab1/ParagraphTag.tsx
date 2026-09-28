export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-p-your-1">
        Trivia about me: I am learning React to see what the hype is about declarative UI,
        but no matter if I end up liking it or not, I will always be a desktop
        dev first and foremost. 
      </p>
      <p id="wd-p-your-2">
        I like both low level programming such as embedded, ML <code>kernels</code> and 
        operating systems, as well as pure frontend UI/UX design. Backend, databases and 
        concurrency? Not as much :p
      </p>
      <p id="wd-ai-p">
        Wrapping text in a paragraph tag gives browsers a semantic block to render with vertical spacing, so each paragraph reads as a separate unit.
      </p>
    </div>
  );
}

/**After the sample lorem paragraphs, add one more sample <p id="wd-ai-p"> 
 * that explains in one or two sentences why wrapping text in <p> creates vertical spacing */