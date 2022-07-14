import React from 'react';
import Todo from './Todo';
function TodoList({ addTodo }) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {addTodo.map(todo => {
			return <Todo key={todo.id} todo={todo}/>;
		})}
      </ul>
    </section>
  );
}

export default TodoList;