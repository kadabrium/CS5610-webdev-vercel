"use client"
import {type ReactNode, useState } from "react";
import GreenCheckmark from "./GreenCheckmark";
import { useModulesStore, type CourseModule, type ModulesStore } from "@/app/(kambaz)/store/modulesStore";
//import * as db from "../../../database";


// module title or input box, called by page
// children: lessons, extra: edit buttons(?)
export default function Module({mod, extra, children}: {mod: CourseModule, extra?: ReactNode, children?: ReactNode}) {
  const updateModule = useModulesStore((state: ModulesStore) => state.updateModule);
  
  if (!mod.editing) {
    return (
      <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
        <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
          <span className="flex-1" >{mod.name}</span>
          {extra}
          <GreenCheckmark />
        </div>
        <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
      </li>
    );
  }
  else {
    return (
      <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
        <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
          <span className="flex-1" >
            <input
              className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={mod.name}
              onChange={(e) => updateModule({ ...mod, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({ ...mod, editing: false });
                }
              }}/>
          </span>
          {extra}
          <GreenCheckmark />
        </div>
        <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
      </li>
    );

  }
}

/*export default function Module({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span className="flex-1" >{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}*/