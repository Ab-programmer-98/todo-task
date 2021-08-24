import { useHistory } from "react-router-dom";
function TodoItem({ text, todo, onChange, onDelete }) {
  const history = useHistory();
  return (
    <div className="item">
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        <span
          style={{ backgroundColor: todo.text === text ? "red" : "white" }}
          onClick={() => {
            history.push(`/todoinfo/${todo.id}`);
          }}
        >
          {todo.text}
        </span>
        <button
          className="del"
          onClick={() => {
            onDelete(todo);
          }}
        >
          X
        </button>
      </label>
    </div>
  );
}

export default TodoItem;
