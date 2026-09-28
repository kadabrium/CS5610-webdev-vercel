export default function Dropdowns() {
  return (
    <>
      <h4 id="wd-dropdowns">Dropdowns</h4>

      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre" defaultValue="SCIFI">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre">Favorite movie genres: </label>
      <br />
      <select multiple
        id="wd-select-many-genre"
        defaultValue={["COMEDY", "SCIFI"]}
      >
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>
    </>
  );
}

export function YourDropdowns() {
  return (
    <>
      <h4 id="wd-dropdowns">Dropdowns</h4>

      <h5>Select one</h5>
      <label htmlFor="wd-select-one-spec">Specialization: </label>
      <br />
      <select id="wd-select-one-genre" defaultValue="Cyber">
        <option value="Cyber">Cybersecurity</option>
        <option value="AL">AI/ML</option>
        <option value="DS">Data science</option>
      </select>

      <h5>Select many</h5>
      <label htmlFor="wd-select-many-cour">Coursework: </label>
      <br />
      <select multiple
        id="wd-select-many-cour"
        defaultValue={["Algo", "Hco"]}
      >
        <option value="Algo">Algorithms</option>
        <option value="Comp">Compilation</option>
        <option value="Hco">Human-Computer</option>
        <option value="Vis">Machine Vision</option>
      </select>
    </>
  );
}