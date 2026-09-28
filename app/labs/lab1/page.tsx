import HeadingTags from "./HeadingTags";
import ListTags from "./ListTags";
import ParagraphTag from "./ParagraphTag";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";

import HighlightedBoxLab from "./HighlightedBox";
import HighlightedParagraphLab from "./HighlightedParagraph";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTags/>
      <Tables/>
      <Images/>
      <Forms/>
      <HighlightedBoxLab/>
      <HighlightedParagraphLab/>
      <AnchorTag/>
    </div>
  );
}