export interface ITodo {
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selectedTodo: ITodo) => void;

export type AddTodo = (text: string) => void;
