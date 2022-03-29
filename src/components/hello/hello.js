import React, { useState } from "react";

export default function Hello({ title }) {
  const [count, setCount] = useState(0);

  const handleOnClick = () => setCount(count + 1);

  return (
    <div>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="count">{count}</p>
      <button data-testid="button" onClick={handleOnClick}>
        Tap Me
      </button>
    </div>
  );
}
