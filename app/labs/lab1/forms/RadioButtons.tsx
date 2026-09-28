export default function RadioButtons() {
  return (
    <>
      <h5 id="wd-radio-buttons">Radio buttons</h5>

      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <br />
      {/* Separate placement still works with htmlFor */}
      <label htmlFor="wd-radio-distant-a">Option A</label>
      {/* ... elsewhere in the layout ... */}
      <input type="radio" name="radio-distant" id="wd-radio-distant-a" />


      <label>How often do you watch movies?</label>
      <br />
      
      <input type="radio" name="radio-frequency" id="wd-radio-daily" />
      <label htmlFor="wd-radio-daily">Daily</label>
       
      {/* Wrapping label no htmlFor needed */}
      <label>
        <input type="radio" name="radio-frequency" id="wd-radio-wrappingyes" />Yes
      </label>
      <br />

      <input type="radio" name="radio-frequency" id="wd-radio-weekly" />
      <label htmlFor="wd-radio-weekly">Weekly</label>
      <br />

      <input type="radio" name="radio-frequency" id="wd-radio-rarely" />
      <label htmlFor="wd-radio-rarely">Rarely</label>
    </>
  );
}

export function YourRadioButtons() {
  return (
    <>
      <h5 id="wd-radio-buttons">Radio buttons</h5>

      <label>Grade Standing</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-grade-fresh" />
      <label htmlFor="wd-radio-comedy">Freshman</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-grade-soph" />
      <label htmlFor="wd-radio-drama">Sophomore</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-grade-jr" />
      <label htmlFor="wd-radio-scifi">Junior</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-grade-sr" />
      <label htmlFor="wd-radio-fantasy">Senior</label>
      <br />
      <input type="radio" name="radio-grad" id="wd-radio-grade-grad" />
      <label htmlFor="wd-radio-fantasy">Senior</label>
      <br />


      <label>Program type</label>
      <br />
      <input type="radio" name="radio-ptype" id="wd-radio-full" />
      <label htmlFor="wd-radio-full">Full-time</label>
      {/* Wrapping label no htmlFor needed */}
      <label>
        <input type="radio" name="radio-ptype" id="wd-radio-part" />Part-time
      </label>
      <br />

      <label>Location</label>
      <br />
      <input type="radio" name="radio-loc" id="wd-radio-on" />
      <label htmlFor="wd-radio-on">On campus</label>
      <br />

      <input type="radio" name="radio-loc" id="wd-radio-off" />
      <label htmlFor="wd-radio-off">Commuting</label>

      <input type="radio" name="radio-loc" id="wd-radio-online" />
      <label htmlFor="wd-radio-online">Online</label>
    </>
  );
}