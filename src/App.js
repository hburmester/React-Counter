import React, { useState, useEffect } from 'react';

const Counter = () => {
  // State for the counter value
  const [count, setCount] = useState(0);

  // State for the step value
  const [step, setStep] = useState(1);

  // Effect to update the document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Event handler for increment button
  const handleIncrement = () => {
    setCount(count + step);
  };

  // Event handler for decrement button
  const handleDecrement = () => {
    setCount(count - step);
  };

  // Event handler for step input change
  const handleStepChange = (event) => {
    const newStep = parseInt(event.target.value, 10);
    setStep(isNaN(newStep) ? 1 : newStep);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <label>
        Step:
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
