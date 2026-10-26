export default function TernaryOperator() {
  let loggedIn = true;
  const hour = 9;
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {premium ? <p>Premium</p> : <p>Free</p>}
       <h4>Time of the day</h4>
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      <hr />
    </div>
  );
}