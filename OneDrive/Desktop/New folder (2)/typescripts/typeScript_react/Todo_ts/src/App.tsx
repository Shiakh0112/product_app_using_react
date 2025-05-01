import AddToDo from "./components/AddToDo";
import NavBar from "./components/NavBar";
import TodosData from "./components/TodosData";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800">
          <h1 className="text-3xl font-bold text-center mb-6">
            ✨ TODO REACT + TYPESCRIPT
          </h1>
          <NavBar />
          <AddToDo />
          <TodosData />
        </div>
      </div>
    </>
  );
};

export default App;
