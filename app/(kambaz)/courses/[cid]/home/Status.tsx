import { CiStreamOn } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { MdAddHome, MdDoNotDisturbAlt, MdOutlineAnnouncement } from "react-icons/md";
import { MdImportContacts } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaFileImport className="me-1 shrink-0 text-base" /> Import Existing Content
      </button>

      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      > <MdImportContacts className="me-1 shrink-0 text-base" />Import from Commons</button>
      <br />

      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      > <MdAddHome className="me-1 shrink-0 text-base" />Choose Home Page</button>
      <br />

      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      ><CiStreamOn className="me-1 shrink-0 text-base" />View Course Stream</button>
      <br />

      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      ><TfiAnnouncement className="me-1 shrink-0 text-base" />New Announcement</button>
      <br />

      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      ><IoAnalytics className="me-1 shrink-0 text-base" />New Analytics</button>
      <br />

    
      <button type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      ><MdOutlineAnnouncement className="me-1 shrink-0 text-base" />View Course Notifications</button>
      <button id="wd-ai-status" type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaCheckCircle className="me-1 shrink-0 text-base" /> Sample action
      </button>
    </div>
  );
}

/**dd one more sample button with id wd-ai-status labeled "Sample action"
 *  using a fitting React Icon and the same full-width bordered button classes. */
