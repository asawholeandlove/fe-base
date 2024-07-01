import { useState } from "react";
import "./global.css";
import { Button } from "antd";

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
      <Button>Hello</Button>
    </>
  );
}

export default App;
