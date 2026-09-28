import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/** search bar: input line; 
        * buttons: + Group, + Assignment
        */} 
      <input type="text" placeholder="Search for Assignments" id="wd-search-assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title"> ASSIGNMENTS 40% of Total </h3>
      <button>+</button>

      <ul id="wd-assignment-list">
        {/** three AssignmentItems using cid 
          * title (link to item), desc, date, grades
          * 
          */} 
        <AssignmentItem cid={cid} aid="" title="A1 - ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts"/>
        <AssignmentItem cid={cid} aid="" title="A2 - CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am |
Due May 20 at 11:59pm | 100 pts"/>
        <AssignmentItem cid={cid} aid="" title="A3 - JAVASCRIPT + REACT" details="Multiple Modules | Not available until May 20 at 12:00am |
Due May 27 at 11:59pm | 100 pts"/>
      </ul>
    </div>
  );
}