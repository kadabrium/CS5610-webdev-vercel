import { ReactNode } from "react";
import TOC from "./TOC";

// TOC remains in side bar while children is any linked page 
export default function LabsLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="100px">
            <TOC />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}