import React, { useState } from 'react';

import { ITodo } from './components/TodoListItem/TodoListItem.interface';
import { TodoList } from './components/TodoList/TodoList.component';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm.component';

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

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
