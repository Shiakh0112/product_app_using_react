import { useTodos } from "../store/Todos";
import { useSearchParams } from "react-router-dom";

const TodosData = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  let filteredTodos = todos;
  if (todosData === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }
  if (todosData === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="space-y-4">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="h-5 w-5 text-purple-500"
            />
            <label
              className={`text-gray-800 ${
                todo.completed ? "line-through opacity-60" : ""
              }`}
            >
              {todo.task}
            </label>
          </div>
          {todo.completed && (
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-600 font-medium hover:underline"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodosData;
