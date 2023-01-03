import { useState } from "react";
import { useStore } from "../store/zustand";

import { Button, TextBox } from "./elements";

const AddToDo = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = useStore((state) => state.addTodo);
  const onAdd = () => {
    addTodo({
      id: new Date().getTime(),
      todo: todoTitle,
      completed: false,
    });
    setTodoTitle("");
  };

  return (
    <div className="rounded shadow m-2 border flex flex-col p-3">
      <h6 className="text-sky-500">Add To Do Component</h6>
      <TextBox
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        labelText="To Do"
      >
        <Button onClick={onAdd} square className="rounded-r">
          Add
        </Button>
      </TextBox>
    </div>
  );
};

export default AddToDo;
