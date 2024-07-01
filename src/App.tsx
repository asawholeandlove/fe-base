import { useState } from "react";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  const calculate = () => {
    console.log("calculate");
    return 99999 * 9999;
  };

  const test = calculate();

  console.log("re-render");

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change
        {test}
      </button>
    </>
  );
}

export default App;
