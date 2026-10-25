export default function ConditionalOutputInline() {
  const loggedIn = false;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
    </div>
  );
}
/**keep loggedIn as false. Add const admin = true and a third heading {admin && <h2>Admin Inline</h2>} inside the same wrapper. */