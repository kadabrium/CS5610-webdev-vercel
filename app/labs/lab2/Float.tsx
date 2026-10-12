import "./index.css";

const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>

      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-dimension-portrait wd-bg-color-yellow">Sample float</div>
        <p>{LOREM} {LOREM}</p>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}

/**
 * 
 * add a new sample colored box with id wd-ai-float, class wd-float-right plus a background class, 
 * a lorem paragraph wrapping around it, and a wd-float-done clearer after. 
 */
