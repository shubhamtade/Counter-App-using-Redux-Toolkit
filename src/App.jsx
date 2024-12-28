import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { value, inWord } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const useGenerateRandomColor = () => {
    const [color, setColor] = useState("");
    const generateColor = () => {
      setColor(Math.random().toString(16).substr(-6));
    };
    return { color, generateColor };
  };

  const { color, generateColor } = useGenerateRandomColor();

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundColor: "#" + color,
      }}
    >
      <div className="flex justify-center">
        <p className="text-4xl p-5">{value}</p>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="py-3 px-8 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-slate-100 duration-300"
          onClick={() => {
            dispatch(increment());
            generateColor();
          }}
        >
          Increment
        </button>
        <button
          className="py-3 px-8 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-slate-100 duration-300"
          onClick={() => {
            dispatch(decrement());
            generateColor();
          }}
        >
          Decrement
        </button>
      </div>
      <div className="flex justify-center text-center">
        <p className="text-4xl p-5 uppercase">{value ? inWord : "Zero"}</p>
      </div>
    </div>
  );
}

export default App;
