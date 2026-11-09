"use client";

import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import { TodoProvider, TodoListComponent } from "./ReactContextTodoList";
import { ProfileProvider } from "./ProfileContext";
import ContextProfileForm from "./ContextProfileForm";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props
        through the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      <TodoProvider><TodoListComponent/></TodoProvider>
      <ContextProfileForm/>
      <hr />
    </div>
  );
}
/**
 * After Down, add a sample button id="wd-context-reset-click" that 
 * calls setCount(7). Do not put courses or todos in this context
 */