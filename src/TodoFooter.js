function TodoFooter({ todos, onClearCompleted, setCheckedAll }) {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  todos.length === completedTodos ? setCheckedAll(true) : setCheckedAll(false);
  return (
    <div>
      <span>
        {completedTodos}/{todos.length} Completed
      </span>
      <button className="btn-2" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFooter;
