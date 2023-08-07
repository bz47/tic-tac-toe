import { useState } from "react";

export default function Square({ value, onSquareClicked }) {
  return (
    <button onClick={onSquareClicked} className="square">
      {value}
    </button>
  );
}
