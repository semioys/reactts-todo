import React, { useState } from 'react';
import { AddTodo } from '../TodoListItem/TodoListItem.interface';

interface IProps {
  addTodo: AddTodo;
};

export const AddTodoForm: React.FC<IProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input 
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
      }}
        />
      <button 
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }} 
      >
        Add Todo
      </button>
    </form>
  );
}
