export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
       {/*title box*/}
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      {/*body box*/}
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>

      {/*assignment attributes vboxlayout*/}
      <br />
      <table>
        <tbody>
          {/* points*/}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          {/* group dropdown: ASSIGNMENTS, QUIZZES, EXAMS, PROJECT*/}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="exams">Exams</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>

          {/* grade disp dropdown: %, pts */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grade-display">Grade Display</label>
            </td>
            <td>
              <select id="wd-grade-display">
                <option value="%">%</option>
                <option value="pts">pts</option>
              </select>
            </td>
          </tr>

          {/* submission type vbox: dropdown: online; then Options checkboxes */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
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

          {/* publishing options vbox: assign to(everyone), date pickers: due, available from/until */}
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

              <label htmlFor="wd-available-from">Available From</label>
              <input type="date" id="wd-available-from" />
              <br />
              <label htmlFor="wd-available-until">Available Until</label>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>

          {/* cancel and save buttons */}
          <tr>
            <td colSpan={2} align="center">
              <button id="wd-cancel">Cancel</button>
              <button id="wd-save">Save</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}
