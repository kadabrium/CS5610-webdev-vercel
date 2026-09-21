import type { ReactNode } from "react";
type HlBox = {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
};

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: HlBox) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong>{" "}children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="purple"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          Trivia about React: in Chrome, updates to the source automatically loads
          even without the user clicking Refresh.
        </p>
      </HighlightedBox>
    </div>
  );
}

/**
 * Add one more HighlightedParagraph with a short sentence about you (hobby, 
 * hometown, or favorite course) and style props you choose — your colors,
 *  border width, and corner radius. Self-closing tag only; 
 * pass the wording through the text attribute.
 */

/**Add one more sample <HighlightedParagraph text="Props let the same component
 *  render with different colors." backgroundColor="lavender" borderColor="purple" 
 * borderWidth={3} borderRadius={12} /> */