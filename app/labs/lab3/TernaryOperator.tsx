export default function TernaryOperator() {
  let loggedIn = true;
  const hour = 9;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
       <h4>Time of the day</h4>
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      <hr />
    </div>
  );
}
/**After the Welcome/Please login ternary, add const premium = false and a second ternary that renders <p>Premium</p> or <p>Free</p>. */