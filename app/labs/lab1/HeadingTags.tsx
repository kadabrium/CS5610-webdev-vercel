export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
      <div id="wd-your-heading">
        <h4>Example Heading 2</h4>
        Welcome to Kadabrium's <span id="wd-your-span">HTML in JSX</span> reference sheet accompanying
        the official Next.js/vercel course. This document will subsequently demonstrate HTML elements such as lists,
        tables, images, links and input widgets such as text boxes and buttons.
      </div>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <h5>What I built</h5>
        <h6>Next step</h6>
      </div>
    </div>
    
  );
}

/**add a second sample outline as wd-ai-headings: 
 * an h4 titled "Lab notes", an h5 titled "What I built", and an h6 titled "Next step". */