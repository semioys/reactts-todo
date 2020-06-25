import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem.component';
import { ITodo, ToggleTodo } from '../TodoListItem/TodoListItem.interface';

interface IProps {
  todos: ITodo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<IProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};