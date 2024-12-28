import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { value, inWord } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // key : 4661ce2f-b369-463c-bbc3-6e20ea8d13be

  // const apiKey = "4661ce2f-b369-463c-bbc3-6e20ea8d13be";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.apiverve.com/v1/numbertowords?number=${count}`,
  //         { method: "GET", headers: { "x-api-key": apiKey } }
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       console.log(result.data.words);

  //       setData(result.data.words);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [count]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="bg-slate-100 h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <p className="text-4xl p-5">{value}</p>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="py-3 px-8 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-slate-100 duration-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="py-3 px-8 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-slate-100 duration-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="flex justify-center">
        <p className="text-4xl p-5 uppercase">
          {inWord ? inWord : "No data found"}
        </p>
      </div>
    </div>
  );
}

export default App;
