import AddToDo from "./components/AddToDo";
import Completed from "./components/Completed";
import Counter from "./components/Counter";
import { Button } from "./components/elements";
import TodoList from "./components/TodoList";
import { useStore } from "./store/zustand";

function App() {
  const fetchTodos = useStore((state) => state.fetchTodos);
  return (
    <div>
      <Button onClick={fetchTodos}>Fetch Todos</Button>
      <AddToDo />
      <Counter />
      <TodoList />
      <Completed />
    </div>
  );
}
export default App;
