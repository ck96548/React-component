import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";

function CounterControls() {
  const { obj} = useContext(CounterContext);

  return (
    <div>
      <button onClick={obj.decrement}>➖ Decrement</button>
      <button onClick={obj.increment}>➕ Increment</button>
    </div>
  );
}

export default CounterControls;
