import React from 'react';
import { ITodo, ToggleTodo } from './TodoListItem.interface';

interface IProps {
  todo: ITodo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<IProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input type="checkbox" checked={todo.complete} onClick={() => toggleTodo(todo)} /> {todo.text}
      </label>
    </li>
  );
};
