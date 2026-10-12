import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { DiCode } from "react-icons/di"
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <DiCode className = "text-red-600"/>
        <MdSchool className="text-4xl text-blue-600" aria-label="Sample school icon" />
        <HiAcademicCap className="text-4xl text-blue-600" aria-label="Sample academic cap icon" />
      </div>
    </div>
  );
}
/**
 * import two more sample icons from families not already used in the file
 *  (for example md and hi2), render them with className for size or color (text-4xl text-blue-600)
 */
