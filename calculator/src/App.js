import './App.css';
import React, { useState } from "react";

function App() {
  const [entries, setEntries] = useState();
  const [display, setDisplay] = useState(0);
  return (
    <div className="App">
      <div>{display}</div>
      <div>
        <button onClick={() => { setDisplay(1) }} value={1}>1</button>
        <button onClick={() => { setDisplay(2) }} value={2}>2</button>
        <button onClick={() => { setDisplay(3) }} value={3}>3</button>
      </div>
      <div>
        <button onClick={() => { setDisplay(4) }} value={4}>4</button>
        <button onClick={() => { setDisplay(5) }} value={5}>5</button>
        <button onClick={() => { setDisplay(6) }} value={6}>6</button>
      </div>
      <div>
        <button onClick={() => { setDisplay(7) }} value={7}>7</button>
        <button onClick={() => { setDisplay(8) }} value={8}>8</button>
        <button onClick={() => { setDisplay(9) }} value={9}>9</button>
      </div>
    </div>
  );
}

export default App;
