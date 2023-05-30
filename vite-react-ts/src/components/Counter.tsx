import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number | null>(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increase
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrease
      </button>
    </div>
  );
};
