"use client"
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
//import * as db from "../../../../database";
import { useAsmStore, type AsmItemData, type AsmStore } from "@/app/(kambaz)/store/assignmentStore";

// assignment editing page
// save button adds edited assignment to store list
//type asAID = { params: Promise<{ cid: string, aid: string }>; }
export default function AssignmentEditor( /*{ params }: asAID*/) {
  //const {cid, aid} = await params;
  const { cid, aid } = useParams();
  const currAsm = useAsmStore((state: AsmStore) => state.asms).find((a) => a._id === aid);
  const editAssignment = useAsmStore((state: AsmStore) => state.editAssignment);
  const addAssignment = useAsmStore((state) => state.addAssignment);

  const isNew = aid == "new";

  // cache state vars for Assignment Name, Description, Points, and Due Date
  const [currTitle, setCurrTitle] = useState(currAsm?.title ?? "New Assignment");
  const [currDesc, setCurrDesc] = useState(currAsm?.description ?? "Enter description for new assignment");
  const [currDue, setCurrDue] = useState(currAsm?.due ?? "2026-10-25");
  const [currAvail, setCurrAvail] = useState(currAsm?.available ?? "2026-10-25");
  const [currPoints, setCurrPoints] = useState(currAsm?.points ?? 100);
  
   
  return (
    <div id="wd-assignments-editor">
       {/*Assignment name title box*/}
      <label htmlFor="wd-name" className="block text-top align-top pr-3 py-3">
        Assignment Name {currAsm?._id}</label>
      <input id="wd-name" defaultValue={currTitle} onChange={(e) => setCurrTitle(e.target.value)} />
      <label htmlFor="wd-name" className="block text-top align-top pr-3 py-3">
        Assignment ID {aid}</label>

      
      {/*Description body box*/}
      <textarea id="wd-description" rows = {10}
        defaultValue={currDesc} onChange={(e) => setCurrDesc(e.target.value)}
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
              <input id="wd-points" defaultValue={currPoints} onChange={(e) => setCurrPoints(Number(e.target.value))} className="w-full border border-gray-300 rounded px-3 py-2" />
            </td>
          </tr>

          {/* group dropdown: ASSIGNMENTS, QUIZZES, EXAMS, PROJECT*/}
          <tr>
            <td align="right" valign="top" className="text-right align-top pr-3 py-3">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue={"assignments"} className="w-full border border-gray-300 rounded px-3 py-2">
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

            <td className = "w-full border border-gray-300 rounded px-3 py-2">
              <select id="wd-assign">
                <option value="everyone">Everyone</option>
              </select>
              <br />

              <label htmlFor="wd-due-date">Due Date</label>
              <input type="date" id="wd-due-date" defaultValue={currDue} onChange={(e) => setCurrDue(e.target.value)} />
              <br />

              {/* these 2 are in the same row / nested hbox table*/}
              <table>
                <tbody>
                  <tr>
                    <td align="right" valign="top"
                      className="block text-top align-top">
                      <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                      <input type="date" id="wd-available-from" defaultValue={currAsm?.available ?? "2026-10-25"}/>
                    </td>
                  </tr>
                  <tr>
                    <td align="right" valign="top"
                      className="block text-top align-top">
                      <label htmlFor="wd-available-until">Available Until</label>
                    </td>
                    <td>
                      <input type="date" id="wd-available-until" defaultValue={currAsm?.due ?? "2026-10-25"}/>
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>

          </tr>

        </tbody>
      </table>

      {/* cancel and save buttons */}
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel"
      className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
      >Cancel</Link>{" "}

      <Link id="wd-save"
       className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
       href={`/courses/${cid}/assignments`}
       onClick={()=> isNew? 
        addAssignment({title: currTitle, course: String(cid), description: currDesc, due: currDue, available: currAvail, points: currPoints})
      : editAssignment(String(aid), {title: currTitle, course: String(cid), description: currDesc, due: currDue, available: currAvail, points: currPoints})}>
        
        <FaPlus />Save
      </Link>
      
    </div>
  );
}
