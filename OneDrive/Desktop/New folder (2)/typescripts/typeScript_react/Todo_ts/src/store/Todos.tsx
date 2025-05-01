import { createContext, ReactNode, useContext, useState } from "react";
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};
export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  /* add todo function start */
  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      // console.log(newTodos);
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  /* add todo function end */

  /* mark completed toggle function start*/

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todo", JSON.stringify(newTodos));

      return newTodos;
    });
  };

  /* mark completed toggle function end*/
  /* delete function start*/

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  /* delete function end*/
  return (
    <todoContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todoContext);
  if (!todosConsumer) {
    throw new Error("useTodos user outside of provider");
  }
  return todosConsumer;
};
