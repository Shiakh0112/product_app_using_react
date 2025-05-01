import { FormEvent, useState } from "react";
import { useTodos } from "../store/Todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();
  const HandleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(todo);
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={HandleFormSubmit} className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
