"use client";
import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};

export type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

export type ModulesStore = {
  modules: CourseModule[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson as CourseModule[],
  // add a new one from input with ModuleEditor
  addModule: (module) =>
    set((state) => ({
      modules: [
        ...state.modules,
        {
          _id: crypto.randomUUID(),
          name: module.name,
          description: "",
          course: module.course,
          lessons: [],
        },
      ],
    })),

  // delete one with ModuleControlButtons
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),

  // save new title input to box spawned by ModuleControlButtons
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
    
  // let ModuleControlButtons spawn input box for title editing 
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));