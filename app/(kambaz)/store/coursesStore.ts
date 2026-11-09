"use client";

import { create } from "zustand";
import coursesJson from "../database/courses.json";

export type Course = (typeof coursesJson)[number];

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "2026"
};

// context object class, full setter is zustand::set()
export type CoursesStore = {
  courses: Course[];
  addCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};

// each of these modification methods creates and sets a new CourseStore context object
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: coursesJson,
  addCourse: (course) =>
    set((state: CoursesStore) => ({
      courses: [
        ...state.courses,
        { ...emptyCourse, ...course, _id: crypto.randomUUID() },
      ],
    })),
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
}));

export { emptyCourse };