import { useContext } from "react";
import { CountContext } from "./context";
import GreatGrandchild from "./GreatGrandchild";

const GrandChild = ({ count, setCount }) => {
  return (
    <div>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Grandchild Component</h2>
        <small>Using the count state</small>
      </div>
      <div className="text-center">
        <h3 className="text-2xl">Count is: {count}</h3>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-pink-600 p-2 rounded text-white"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
 };
 
 export default GrandChild;