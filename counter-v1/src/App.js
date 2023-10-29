import { useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  var today = new Date();
  const [diffDay, setDiffDay] = useState(0);

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleStepMinus() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleCountPlus() {
    setCount((s) => s + 1);
    var day = diffDay + step;
    setDiffDay(day);
  }

  function handleCountMinus() {
    setCount((s) => s - 1);
    var day = diffDay - step;
    setDiffDay(day);
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleStepMinus}>-</button>Step: {step}
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>Count: {count}
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>
        {diffDay} days from today is Wed Jul {today.getDate() + diffDay}{" "}
        {today.getFullYear()}
      </div>
    </div>
  );
}
