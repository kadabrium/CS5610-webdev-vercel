"use client";

import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1] ?? "/";
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      <p>Last segment of pathname: {lastSegment}</p>
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}