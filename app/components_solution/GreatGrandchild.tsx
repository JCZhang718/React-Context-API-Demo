import { useContext } from "react";
import { CountContext } from "./context";
import useCountContext from "./useContext";

const GreatGrandchild = () => {
  const { count, decrement } = useCountContext()

  return (
    <div>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Great Grandchild Component</h2>
        <small>Using the count state</small>
      </div>
      <div className="text-center">
        <h3 className="text-2xl">Count is: {count}</h3>
        <button
          onClick={decrement}
          className="bg-pink-600 p-2 rounded text-white"
        >
          Decrease Count
        </button>
      </div>
    </div>
  );
 };
 
 export default GreatGrandchild;