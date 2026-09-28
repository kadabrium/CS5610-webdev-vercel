export default function Checkboxes() {
  return (
    <>
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
    </>
  );
}

export function YourCheckboxes() {
  return (
    <>
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Language:</label>
      <br />
      <input type="checkbox" name="check-lang" id="wd-chkboxlang-C" />
      <label htmlFor="wd-chkboxlang-c">C</label>
      <br />
      <input type="checkbox" name="check-lang" id="wd-chkboxlang-j" />
      <label htmlFor="wd-chkboxlang-j">Java</label>
      <br />
      <input type="checkbox" name="check-lang" id="wd-chkboxlang-Cp" />
      <label htmlFor="wd-chkboxlang-cp">C++</label>
      <br />
    

      <label>Framework:</label>
      <br />
      <input type="checkbox" name="check-frame" id="wd-chkboxfr-spring" />
      <label htmlFor="wd-chkboxfr-spring">Spring</label>
      <br />
      <input type="checkbox" name="check-frame" id="wd-chkboxfr-djan" />
      <label htmlFor="wd-chkboxfr-djan">Django</label>
      <br />
      <input type="checkbox" name="check-frame" id="wd-chkboxfr-dro" />
      <label htmlFor="wd-chkboxfr-dro">Drogon</label>
      <br />

      <label>Career title:</label>
      <br />
      <input type="checkbox" name="check-ttl" id="wd-chkttl-Devops" />
      <label htmlFor="wd-chkbox-Devops">DevOps</label>
      <br />
      <input type="checkbox" name="check-ttl" id="wd-chkttl-sys" />
      <label htmlFor="wd-chkbox-sys">Systems</label>
      <br />
      <input type="checkbox" name="check-ttl" id="wd-chkbox-ui" />
      <label htmlFor="wd-chkbox-ui">UI/UX</label>
      <br />
      
    </>
  );
}