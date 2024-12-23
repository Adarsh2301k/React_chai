import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg"
      >
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
