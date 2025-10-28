"use client";

import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border-amber-300 border"
    />
  );
};

export default Input;
