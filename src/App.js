import { useState } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

import "./App.scss";

function App() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  const tasks = todos.map((el) => el.text);

  return (
    <div className="App">
      <TodoForm
        // id="Error message"
        tasks={tasks}
        text={text}
        setText={setText}
        onAdd={() => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            },
          ]);
          setText("");
        }}
      />
      <TodoList
        checkedAll={checkedAll}
        setCheckedAll={setCheckedAll}
        setTodos={setTodos}
        text={text}
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(
            todos.map((todo) => {
              if (todo.id === newTodo.id) {
                return newTodo;
              }
              return todo;
            })
          );
        }}
      />
      <TodoFooter
        setCheckedAll={setCheckedAll}
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
