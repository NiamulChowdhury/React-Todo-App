import React from "react";

import Todo from "../Todo/Todo";
import style from "./todos.module.css";

const Todos = (props) => {
  return (
    <section className={style.todos}>
      {props.todos.map((todos) => (
        <Todo
          todo={todos.todo}
          key={todos.id}
          id={todos.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
