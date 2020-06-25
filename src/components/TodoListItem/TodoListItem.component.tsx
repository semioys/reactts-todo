import React from 'react';
import { ITodo } from './TodoListItem.interface';

interface IProps {
  todo: ITodo;
}

export const TodoListItem: React.FC<IProps> = ({ todo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};
