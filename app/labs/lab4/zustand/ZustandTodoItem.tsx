import { TodoStore, useTodoStore, type Todo } from "./todoStore";

// Render a single Todo item passed in as param
// with buttons that send changes back to the context object
export default function ZustandTodoItem({ todo }: { todo: Todo }) {
  const setTodo = useTodoStore((state: TodoStore) => state.setTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <li
      id={`wd-zustand-todo-${todo.id}`}
      className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
    >
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={todo.done} readOnly />
        <span className={todo.done ? "line-through" : undefined}>{todo.title}</span>
      </label>
      <span className="flex gap-2">
        <button
          type="button"
          onClick={() => setTodo(todo)}
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => deleteTodo(todo.id)}
          className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
        >
          Delete
        </button>

        <input type = "checkbox" checked={todo.done} onChange={() => useTodoStore.getState().toggleDone(todo.id)} />
      </span>
    </li>
  );
}