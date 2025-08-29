import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
  todos: [],
  addTodo: () => {},
  updatedTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => useContext(ToDoContext);

export const TodoProvider = ToDoContext.Provider;
