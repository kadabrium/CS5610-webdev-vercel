"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" } 
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const inCourse = pathname.startsWith(`/courses/${cid}`);
 /* const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const assignments = `/courses/${cid}/assignments`;*/

  return ( 
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">

      {LINKS.map( ({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = inCourse? 
          (pathname === href || (segment !== "home" && pathname.startsWith(href))) 
          : (segment === "home");

        return (
          <Link key={id} href={href} id={id}
            className={ active? 
              "list-group-item active border-0" : "list-group-item border-0 text-red-600"
            }> {label} </Link>
        );
      })}


    </div>
  );
}

  /*return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
  
      <Link
        href={home}
        id="wd-course-home-link"
        className={
          pathname === home
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>

      <Link
        href={modules}
        id="wd-course-modules-link"
        className={
          pathname === modules
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Modules
      </Link>


      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={
          pathname === assignments || pathname.startsWith(assignments + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>

      <Link
        href={`/courses/${cid}/piazza`}
        id="wd-course-piazza-link"
        className={
          pathname === `/courses/${cid}/piazza`
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Piazza
      </Link>

      <Link
        href={`/courses/${cid}/zoom`}
        id="wd-course-zoom-link"
        className={
          pathname === `/courses/${cid}/zoom`
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Zoom
      </Link>


      <Link
        href={`/courses/${cid}/quizzes`}
        id="wd-course-quizzes-link"
        className={
          pathname === `/courses/${cid}/quizzes`
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Quizzes
      </Link>

      <Link
        href={`/courses/${cid}/grades`}
        id="wd-course-grades-link"
        className={
          pathname === `/courses/${cid}/grades`
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Grades
      </Link>

      <Link
        href={`/courses/${cid}/people/table`}
        id="wd-course-people-link"
        className={
          pathname === `/courses/${cid}/people/table`
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        People
      </Link>
      <Link href={home} id="wd-course-ai-link" className="list-group-item border-0 text-red-600">Sample</Link>
    </div>
  );

  */