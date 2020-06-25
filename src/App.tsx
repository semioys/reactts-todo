import React, { useState } from 'react';

import { ITodo } from './components/TodoListItem/TodoListItem.interface';
import { TodoListItem } from './components/TodoListItem/TodoListItem.component';

const initialTodos: ITodo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
}

export default App;
