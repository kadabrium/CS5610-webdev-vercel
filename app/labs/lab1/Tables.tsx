export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>

      <h4>Example table 2</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Language</th>
            <th align="center">To bytecode?</th>
            <th align="center">JIT to native?</th>
            <th>Well known AOT to native?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java</td>
            <td align="center">AOT</td>
            <td align="center">Yes</td>
            <td align="center">Yes, Graal</td>
          </tr>
          <tr>
            <td>Python</td>
            <td align="center">AOT</td>
            <td align="center">Beta</td>
            <td align="center">Yes, Nuitka</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td align="center">JIT</td>
            <td align="center">Yes</td>
            <td align="center">No</td>
          </tr>
        </tbody>
        
      </table>

    </div>
  );
}

/**
 * Still in Tables.tsx, add a second table with id wd-your-table for something 
 * personal — for example courses you are taking this term, or a short weekly 
 * schedule (Day / Activity / Time). Use thead, tbody, at least three data rows,
 *  and align where it helps (center labels, right-align numbers).
 */

/**In the quiz grades table, keep Q1–Q3 as they are. Add rows Q4 through Q10 
 * with plausible weekly topics, dates, and grades. Copy the same align 
 * attributes as Q1–Q3 (Topic and Date center, grade numbers right). 
 * Recalculate the Average in the footer from all ten scores. */