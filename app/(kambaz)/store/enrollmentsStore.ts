"use client";
import { create } from "zustand";
import enrollJson from "../database/enrollments.json";
import { StaticPrefetchDisabled } from "next/dist/shared/lib/app-router-types";
import { enrollments } from "../database";

export type UserEnrollData = { "_id": string, "user": string, "course": string };

export type EnrollReq = Omit<UserEnrollData, "_id">;

export type EnrollStore = {
    enrollments: UserEnrollData[];
    enroll: (userId: string, cid: string)=>void;
    unenroll: (userId: string, cid: string)=>void;
}

export const useEnrollStore = create<EnrollStore>((set) => ({
  enrollments: enrollJson as UserEnrollData[],

  enroll: (userId: string, cid: string) => 
    set((state: EnrollStore) => ({
        ...state,
        enrollments: [...state.enrollments, {_id: crypto.randomUUID(), user: userId, course: cid}]
    })),

  unenroll: (userId: string, cid: string) => {
    set((state) => ({
      ...state,
      enrollments: state.enrollments.filter((m) => !(m.user == userId && m.course == cid)),
    }))
  }

}));