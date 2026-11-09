"use client";
import { create } from "zustand";
import asmJson from "../database/assignments.json";

export type AsmItemData = {
    "_id": string;
    "title": string;
    "course": string;
    "description": string;
    "points"?: number;
    "due"?: string;
    available?: string;
};
//(typeof asmJson)[number];

export type AsmStore = {
    asms: AsmItemData[];
    addAssignment: (asm: Omit<AsmItemData, "_id">) => void;
    delAssignment: (id: string) => void;
   // updateAssignment: (asm: AsmItemData) => void;
    editAssignment: (asmId: string, newData: Omit<AsmItemData, "_id">) => void;
}

export const useAsmStore = create<AsmStore>((set) => ({
  asms: asmJson as AsmItemData[],
 
  // add from editor fields: 
  addAssignment: (asm: Omit<AsmItemData, "_id">) =>
    set((state: AsmStore) => ({
      ...state,
      asms: [
        ...state.asms,
        { _id: crypto.randomUUID(),
          title: asm.title,
          description: asm.description?? "",
          course: asm.course,
          points: asm.points?? 100,
          due: asm.due ?? "2026-11-09",
          available: asm.available?? "2026-10-25"
        }
      ]
    })),

  delAssignment: (asmId) =>
    set((state) => ({
      ...state,
      asms: state.asms.filter((m) => m._id !== asmId),
    })),

  /*updateAssignment: (asm) =>
    set((state) => ({
      asms: state.asms.map((m) => (m._id === asm._id ? asm : m)),
    })),*/

  // overwrite old one with same id
  editAssignment: (asmId: string, newData: Omit<AsmItemData, "_id">) =>
    set((state) => ({
      asms: state.asms.map((item) =>
        item._id === asmId ? { ...newData, _id: item._id } : item,
      ),
    })),
}));