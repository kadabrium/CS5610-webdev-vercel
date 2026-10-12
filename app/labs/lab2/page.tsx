import "./index.css"
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">

      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Inline styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        backGroundColor is green and text color is yellow in this paragraph
        using the inline style <code>{'"style= backgroundColor: "green", color: "yellow" "'}</code>
        in the opening tag.
      </p>

      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        Sample purple background and white text using the style attribute
      </p>

      {/*id selector*/}
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-id-selector-3">
          All the 3 paragraphs are colored with <code>p#wd-id...</code> selectors.
        </p>
      </div>

      {/*class selector*/}
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

        <p className="wd-your-class">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-your-class">
          This heading has same style as paragraph above
        </h4>
      </div>

      <p className="wd-ai-class-selector">Sample paragraph using a class selector</p>
      <h4 className="wd-ai-class-selector">Sample heading using the same class</h4>

      {/*document structure*/}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <span className="wd-ai-selector-5">Sample descendant span</span>
              <span className="wd-your-selector-5">
                Whereas this span is a direct child of its parent
              </span>
              <span id="wd-overlap-id" className="wd-your-selector-5">
                This span also has an id selector
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>
      
      <div id="wd-ai-cascade-demo">
        <p id="wd-ai-cascade" className="wd-ai-cascade">Sample cascade: the ID selector makes this background red.</p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}

/**
 * After the sample blue-on-white and yellow-green style-attribute paragraph, 
 * add one more sample paragraph with id wd-ai-style-attr that uses 
 * a style attribute for a purple background and white text
 * 
 * After the sample p rule, add one more sample rule for h2 inside Lab 2, written 
 * as #wd-lab2 h2 so it does not leak into other pages, with navy background and white text
 * 
 * 
 * After the sample wd-class-selector block, add a sample class .wd-ai-class-selector with 
 * a distinct background and text color, and apply it to both a p and an h4
 * 
 * 
 * After the sample .wd-selector-1 .wd-selector-3 and child combinator rules,
 *  add a sample span with class wd-ai-selector-5 nested inside .wd-selector-3 
 * and a descendant rule .wd-selector-1 .wd-ai-selector-5 with its own background and text color.
 * 
 * Add a sample paragraph with id wd-ai-cascade and class wd-ai-cascade that also matches a p tag rule, 
 * all three setting background-color to different colors (tag green, class yellow, id red). 
 * Put the id rule last. Add a short comment above the rules naming which selector should win.
 */
