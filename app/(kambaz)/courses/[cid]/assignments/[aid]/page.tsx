import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentEditor() {
  // Assignment Name, Description, Points, and Due Date
  return (
    <div id="wd-assignments-editor">
       {/*Assignment name title box*/}
      <label htmlFor="wd-name"
        className="block text-top align-top pr-3 py-3">
        Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      {/*Description body box*/}
      <textarea id="wd-description" 
        defaultValue={"The assignment is available online Submit a link to the landing page of"}
        className = "font-sans mb-2 w-full rounded border border-neutral-300 px-3 py-2">
      </textarea>

      {/*assignment attributes vboxlayout
       style Assignment Name, Description, Points, and Due Date*/}
      <br />
      <table className="w-full border-collapse">
        <tbody>
          {/* 2 cols as hbox */}
          
          {/* points*/}
          <tr>
            <td align="right" valign="top"
              className="w-[140px] text-right align-top pr-3 py-2">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} className="w-full border border-gray-300 rounded px-3 py-2" />
            </td>
          </tr>

          {/* group dropdown: ASSIGNMENTS, QUIZZES, EXAMS, PROJECT*/}
          <tr>
            <td align="right" valign="top" className="text-right align-top pr-3 py-3">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="exams">Exams</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>

          {/* grade disp dropdown: %, pts */}
          <tr>
            <td align="right" valign="top" className="text-right align-top pr-3 py-3">
              <label htmlFor="wd-grade-display">Grade Display</label>
            </td>
            <td>
              <select id="wd-grade-display" className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="%">%</option>
                <option value="pts">pts</option>
              </select>
            </td>
          </tr>

          {/* submission type vbox: dropdown: online; then Options checkboxes */}
          <tr>
            <td align="right" valign="top" className="text-right align-top pr-3 py-3">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>

            <td>
              <select id="wd-submission-type" className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="online">Online</option>
              </select>
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recording</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File upload</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </td>
          </tr>

          {/* publishing options vbox: assign to(everyone); date pickers: due, available from/until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>

            <td>
              <select id="wd-assign">
                <option value="everyone">Everyone</option>
              </select>
              <br />

              <label htmlFor="wd-due-date">Due Date</label>
              <input type="date" id="wd-due-date" />
              <br />

              {/* these 2 are in the same row / nested hbox table*/}
              <table>
                <tbody>
                  <tr>
                    <td align="right" valign="top">
                      <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                      <input type="date" id="wd-available-from" />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" valign="top">
                      <label htmlFor="wd-available-until">Available Until</label>
                    </td>
                    <td>
                      <input type="date" id="wd-available-until" />
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>

          </tr>

          {/* cancel and save buttons 
          <tr>
            <td colSpan={2} align="center">
              <button id="wd-cancel">Cancel</button>
              <button id="wd-save">Save</button>
            </td>
          </tr>*/}

        </tbody>
      </table>
      <Link href="/courses/1234/assignments" id="wd-cancel"
      className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
      >Cancel</Link>{" "}
      <Link href="/courses/1234/assignments" id="wd-save"
       className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">
        <FaPlus />Save</Link>
    </div>
  );
}
