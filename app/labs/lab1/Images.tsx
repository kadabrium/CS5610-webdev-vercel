export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image from /public/images:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://i.redd.it/x8mfh5f9yqph1.jpeg"
        height="100px"
        alt="Javascript horror! Use Typescript?"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~orig.jpg"
        width="200px"
        alt="NASA image"
      />
    </div>
  );
}

/**add one more remote sample 
 * image with id wd-ai-image. Use a public URL (for example from nasa.gov),
 *  a short alt, and width="200px".  */