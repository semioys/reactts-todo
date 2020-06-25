export interface ITodo {
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selectedTodo: ITodo) => void;