import TodoItem from "./TodoItem";

function TodoList({
  text,
  todos,
  onChange,
  setTodos,
  onDelete,
  checkedAll,
  setCheckedAll,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checkedAll}
        onChange={({ target: { checked } }) => {
          setCheckedAll(checked);
          setTodos(
            todos.map((singleTodo) => ({ ...singleTodo, isCompleted: checked }))
          );
        }}
      />
      <span>All</span>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={text}
            todo={todo}
            onChange={onChange}
            setTodos={setTodos}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
