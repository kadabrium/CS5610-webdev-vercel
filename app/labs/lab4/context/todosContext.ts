import { createContext, useContext, useState, type ReactNode , type Context} from "react";



export type TodoItem = {
  id: number,
  title: string
};

export type TodoList = {
  items: TodoItem[]; // This is the context variable, reassigned (eg. through map() etc) when its items change
 // getItem: (i: number)=>TodoItem;
  addItem: (item: TodoItem) => void;
  setTitle: (i: number, title: string) => void;
  removeItem: (i: number) => void;
}
// the wrapper can be constructed inline if needed
// the context contains the full wrapper, where the array is a state and other
// methods are added in TodoProvider

export const TodoContext: Context<TodoList|null> = createContext<TodoList|null>(null);

export function useTodoContext() {
  const value: TodoList|null = useContext(TodoContext);
  if (!value) {
    throw new Error("useCounterContext must be used inside CounterProvider");
  }
  return value;

}