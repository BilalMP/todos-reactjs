import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const todoHandler = (event) => {
    setTodo(event.target.value);
  };

  const todoSubmit = (event) => {
    event.preventDefault();
    if (todo.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todo,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto h-screen flex justify-center">
      <div className="mt-5 w-[500px] rounded-xl px-10">
        <h1 className="text-xl text-center my-2">Todo App</h1>
        <div>
          <form onSubmit={todoSubmit} className="flex flex-col">
            <input
              type="text"
              name="todo"
              value={todo}
              onChange={todoHandler}
              placeholder="Add todo"
              required
              className="outline-none px-3 py-2 mb-5 rounded-md"
            />
            <input
              type="submit"
              value="Add Todo"
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
            />
          </form>
        </div>
        {todos && (
          <div className="mt-5 w-full text-left">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-2/3">Todo</th>
                  <th className="w-1/3">Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td className="">{todo.text}</td>
                    <td className="">
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-200 px-2 py-1 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
