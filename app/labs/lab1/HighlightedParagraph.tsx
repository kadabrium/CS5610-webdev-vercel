type HlPara = {
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
};

function HighlightedParagraph({text = "This paragraph is highlighted using component props.",
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8}: HlPara) {
  return (
    <p
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.5rem 0.75rem",
      }}
    >
      {text}
    </p>
  );
}

export default function HighlightedParagraphLab() {
  return (
    <div id="wd-highlighted-paragraph">
      <h3>Highlighted Paragraph</h3>
      <HighlightedParagraph text="Default highlight: light yellow background, orange border." />
      <HighlightedParagraph
        text="Custom props: light blue background, navy border, thicker width, more rounding."
        backgroundColor="lightblue"
        borderColor="navy"
        borderWidth={4}
        borderRadius={16}
      />
      <HighlightedParagraph
        text="Another variation: misty rose background, crimson border, square corners."
        backgroundColor="#ffe4e1"
        borderColor="crimson"
        borderWidth="3px"
        borderRadius="0px"
      />
    </div>
  );
}
/**
 * Add another HighlightedBox that wraps for example an h4 with your name and an unordered 
 * list of three goals for this course. Pick style props that feel different 
 * from the sample boxes so you can see the wrapper stay the same while children change.
 */

/**
 * Add one more sample HighlightedBox with backgroundColor="honeydew", borderColor="seagreen",
 *  wrapping an h4 "Sample nested content" and a three-item ul of HTML tags (p, table, form)
 */