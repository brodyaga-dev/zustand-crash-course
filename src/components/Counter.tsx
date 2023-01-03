import { useStore } from "../store/zustand";
import { Button } from "./elements";

const Counter = () => {
  const increase = useStore((state) => state.increase);
  const counter = useStore((state) => state.counter);

  return (
    <div>
      <Button onClick={increase}>Increase</Button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
