import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Bruce Wayne
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-11-02</td>
            <td className="p-2">23:32:23</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Steve Rogers
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">13:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Natasha Romanoff
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2020-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>

          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tim Berners
            </td>
            <td className="p-2">001024564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">1980-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Claude Shannon
            </td>
            <td className="p-2">002048564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">TA</td>
            <td className="p-2">2025-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Ryan Dahl
            </td>
            <td className="p-2">008192564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">Instructor</td>
            <td className="p-2">2009-11-05</td>
            <td className="p-2">11:22:33</td>
          </tr>


          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />Jane Sample</td>
            <td className="p-2">sample001</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2024-05-13</td>
            <td className="p-2">01:00:00</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />Alex Sample</td>
            <td className="p-2">sample002</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2024-05-13</td>
            <td className="p-2">02:00:00</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />Sam Sample</td>
            <td className="p-2">sample003</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2024-05-13</td>
            <td className="p-2">03:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**After the sample Tony Stark row (and any other course samples), add three more sample 
 * rows with odd:bg-neutral-50, FaUserCircle, and placeholder names (for example Jane Sample,
 *  Alex Sample, Sam Sample) plus Login ID, Section, Role, Last Activity, and Total Activity cells matching the existing columns. */
