import React, { useState } from 'react';

import { ITodo } from './components/TodoListItem/TodoListItem.interface';
import { TodoList } from './components/TodoList/TodoList.component';

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

  const toggleTodo = (selectedTodo: ITodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
}

export default App;
