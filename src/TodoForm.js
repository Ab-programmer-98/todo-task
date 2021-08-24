import { useState } from "react";

function TodoForm({ onAdd, text, setText, tasks }) {
  const [style] = useState("warningColor");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        tasks.includes(text) ? setText("") : onAdd(text);
      }}
    >
      <input
        id={style}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {tasks.includes(text) ? (
        <button disabled={!text}>Delete</button>
      ) : (
        <button className="btn" disabled={!text}>
          Add{" "}
        </button>
      )}
    </form>
  );
}

export default TodoForm;
