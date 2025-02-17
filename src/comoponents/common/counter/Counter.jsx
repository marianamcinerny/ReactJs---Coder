import { useState } from "react";
import "./Counter.css";

const Counter = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    counter < stock ? setCounter(counter + 1) : alert("no stock available");
  };

  const sub = () => {
    counter > 1 ? setCounter(counter - 1) : alert("one product minimun");
  };

  const addOn = () => {
    console.log("added to cart");
  };
  return (
    <div>
      <div className="counter-container">
        <button onClick={sub}>-</button>
        <h3>{counter}</h3>
        <button onClick={add}>+</button>
      </div>
      <div>
        <button onClick={addOn}>add to cart</button>
      </div>
    </div>
  );
};

export default Counter;
