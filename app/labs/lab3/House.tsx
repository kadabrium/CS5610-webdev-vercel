export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  console.log(house);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      <h5>Number of properties</h5>
      {Object.keys(house).length}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
/**Add garage: { cars: 2 } to the house object and interpolate house.garage.cars under bathrooms (or under yearBuilt if that heading exists). keep console.log(house) and any console.log(house.owners) I added. Also console.log(house.address.city)*/