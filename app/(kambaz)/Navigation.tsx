import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaCircleQuestion, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { DiCode } from "react-icons/di";


export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>

      <Link
        href="/account"
        id="wd-account-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-white" />
        <br />
        Account
      </Link>

      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>

      <Link
        href="/dashboard"
        id="wd-course-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>

      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <IoCalendarOutline className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>

      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <DiCode className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      <Link href="/labs" id="wd-ai-nav-help" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <FaCircleQuestion className="inline-block text-3xl text-white" />
        <br />
        Help
      </Link>
    </nav>
  );

  /**
   *  After the existing tiles, add one more sample link with id wd-ai-nav-help to 
   * /labs with a fitting icon (for example FaCircleQuestion) and the same tile classes 
   * as the idle black/white links. Do not overwrite wd-main-content-offset
   */



  /*return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
      >
        Northeastern
      </a>
      <br />

      <Link href="/account" id="wd-account-link">
        Account
      </Link>
      <br />

      <Link href="/dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />

      <Link href="/dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />

      <Link href="/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />

      <Link href="/inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      
      <Link href="/labs" id="wd-labs-link">
        Labs
      </Link>
      <br />

      <Link href="/NextJsHome" id="wd-nextjs-home-link">
        Next.js home
      </Link>
    </div>


  );*/
}
