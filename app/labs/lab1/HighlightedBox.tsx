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
        backgroundColor="navy"
        borderColor="purple"
        borderWidth={3}
        borderRadius={2}
      >
        <h4>Box 3</h4>
        <p>
          PyBrowser is a project I's developing which uses Python instead of JS in the script section 
          in html pages it loads. It is text-only; 
          I'd need to manually map every HTML/CSS element to tkinter widgets if I wanted more!
        </p>
        <ul>
          <li>Bun</li>
          <li>Node</li>
          <li>Vue</li>
          <li>React</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="honeydew"
        borderColor="seagreen"
        borderWidth={2}
        borderRadius={10}
      >
        <h4>Sample nested content</h4>
        <ul>
          <li>p</li>
          <li>table</li>
          <li>form</li>
        </ul>
      </HighlightedBox>
    </div>
  );
}


/**
 * Add one more sample HighlightedBox with backgroundColor="honeydew", borderColor="seagreen",
 *  wrapping an h4 "Sample nested content" and a three-item ul of HTML tags (p, table, form)
 */