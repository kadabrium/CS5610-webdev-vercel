/*export default function Home() {
  return (
    <div id="wd-home">
      <h2>Home 1234</h2>
    </div>
  );
}*/
// Point each CourseCard at that route, for example href={`/courses/${id}/home`}.

import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tbody>

          <tr>
            <td valign="top" width="70%">
              <Modules />
            </td>
            
            <td valign="top">
              <CourseStatus />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}