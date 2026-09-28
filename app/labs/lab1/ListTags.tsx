export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
      <h5>Ordered example 2</h5>
      This is a recipe for seafood paella
      <ol id="wd-your-favorite-recipe">
        <li>Grill beef on skillet in medium high heat</li>
        <li>Add taco seasoning, tomato and tortilla</li>
        <li>Sprinkle cheese and bake at 175C for 20 minutes</li>
      </ol>
      <h5>Unordered example 2: </h5>
      My favorite coding channels 
        <ul id="wd-your-books">
          <li>Cherno</li>
          <li>Daniel Hirsch</li>
          <li>Tsoding</li>
        </ul>
      {/**After the sample recipe and book lists, add an unordered list
       *  with id wd-ai-html-tags of HTML tags 
       * (h1, p, ol, ul, table) with a short phrase each */}
      <h5>Unordered example 3: </h5>
      Some HTML tags
        <ul id="wd-ai-html-tags">
          <li>h1 - largest heading</li>
          <li>p - paragraph</li>
          <li>ol - ordered list</li>
          <li>ul - unordered list</li>
          <li>table - table of data</li>
        </ul>
    </div>
  );
}
