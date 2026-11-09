import { memo, useCallback, useMemo, useState, type ReactNode } from "react";
import { TodoContext, useTodoContext, type TodoItem} from "./todosContext"


// at the callsite, children nodes wrapped within TodoContext tags access TodoList with useTodoContext()
export function TodoProvider({ children }: { children: ReactNode }) {
  const list: TodoItem[] = [];
  const [items, setItems] = useState<TodoItem[]>(list);

  const addItem = (item: TodoItem) => { setItems([...items, item]); }

  const removeItem = (id: number) => { 
    setItems(items.filter((item) => id != item.id ));
  }

  const setTitle = (id: number, newTitle: string) => {
    setItems(items.map((item) => { return item.id !== id? item : {id: id, title: newTitle} }));
  }

  return (
    <TodoContext.Provider value={{items, addItem, removeItem, setTitle}}>
      {children}
    </TodoContext.Provider>
  );
}

export function TodoListComponent() {
  const {items, addItem, removeItem, setTitle} = useTodoContext();

  // additional state variables can be used as buffer to store what's
  // currently in the input box; (example 1 below) otherwise the boxes' 
  // contents can only be retrieved by getElementById from other widgets
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");

  return (<div>
    <h2>Todo List</h2>
    <ol>
      {items.map((item: TodoItem) =>(<li key={item.id}>title: {item.title}</li>))}
    </ol>

    <label htmlFor="wd-todo-addI-id">Add item</label>
    <input type="number" value={newId} onChange={(e) => setNewId(e.target.value)} />
    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
    <button onClick={() => { addItem({ id: Number(newId), title: newTitle }); setNewTitle(""); }}>
      Add
    </button><br/>

    <label htmlFor="wd-todo-changeI-id">Change item title</label>
    <input id="wd-todo-changeI-id" type="number"/>
    <input id="wd-todo-changeI-title" type="text"/><br/>
    <button id="wd-todo-changeB" type="submit" onClick={() => {
      const id = Number((document.getElementById("wd-todo-changeI-id") as HTMLInputElement).value);
      const title = (document.getElementById("wd-todo-changeI-title") as HTMLInputElement).value;
      setTitle(id, title);
    }}>Change</button><br/>

    <label htmlFor="wd-todo-removeI-id">Remove item</label>
    <input id="wd-todo-removeI-id" type="number"/><br/>
    <button id="wd-todo-removeB" type="submit" onClick={() => {
      const id = Number((document.getElementById("wd-todo-removeI-id") as HTMLInputElement).value);
      removeItem(id);
    }}>Remove</button><br/>

  </div>);

}

// ----- useMemo / useCallback example -----
// Neither hook needs provider setup; they are plain hooks like useState.
// Both cache something between renders and only recompute when a value
// in the dependency array changes (compared with Object.is):
//   useMemo(() => value, deps)  caches a computed VALUE
//   useCallback(fn, deps)       caches a FUNCTION (= useMemo(() => fn, deps))

// memo() makes this row skip re-rendering when its props are the same
// objects as last time. That only works if onRemove is a stable function,
// which is what useCallback provides below.
const TodoRow = memo(function TodoRow({
  item,
  onRemove,
}: {
  item: TodoItem;
  onRemove: (id: number) => void;
}) {
  console.log("render row", item.id); // watch the console while typing in the filter box
  return (
    <li>
      {item.title}{" "}
      <button type="button" onClick={() => onRemove(item.id)}>x</button>
    </li>
  );
});

export function TodoMemoExample() {
  const { items, removeItem } = useTodoContext();
  const [filter, setFilter] = useState("");
  const [clicks, setClicks] = useState(0); // unrelated state, just to force re-renders

  // Recomputed only when items or filter change; clicking "Re-render"
  // reuses the cached array instead of filtering + sorting again.
  const visible = useMemo(() => {
    console.log("filtering");
    return items
      .filter((t) => t.title.toLowerCase().includes(filter.toLowerCase()))
      .toSorted((a, b) => a.title.localeCompare(b.title));
  }, [items, filter]);

  // Same function object across renders until removeItem changes,
  // so memo(TodoRow) can actually skip rows.
  const handleRemove = useCallback((id: number) => removeItem(id), [removeItem]);

  return (
    <div id="wd-todo-memo">
      <h3>Filtered (useMemo / useCallback)</h3>
      <input
        placeholder="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        Re-render ({clicks})
      </button>
      <ul>
        {visible.map((item) => (
          <TodoRow key={item.id} item={item} onRemove={handleRemove} />
        ))}
      </ul>
    </div>
  );
}


