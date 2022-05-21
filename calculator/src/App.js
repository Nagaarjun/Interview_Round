import './App.css';
import React, { useState } from "react";
import { Button } from './button';

function App() {
  const [entries, setEntries] = useState();
  const [display, setDisplay] = useState("0");
  const [isInitialState, setIsInitialState] = useState(false);
  const handleMultipleEntries = (value, reset) => {
    if (display === "0") {
      setDisplay(value);
    }
    else {
      setDisplay(prevState => prevState + value);
    }
  }
  return (
    <div className="App">
      <div>{display}</div>
      <div>
        <Button onClick={() => {
          handleMultipleEntries("1");
        }} value={1} className={"button"} />
        <Button onClick={() => {
          handleMultipleEntries("2");
        }} value={2}>2</Button>
        <Button onClick={() => {
          handleMultipleEntries("3");
        }} value={3}>3</Button>
      </div>
      <div>
        <Button onClick={() => {
          handleMultipleEntries("4");
        }} value={4}>4</Button>
        <Button onClick={() => {
          handleMultipleEntries("5");
        }} value={5}>5</Button>
        <Button onClick={() => {
          handleMultipleEntries("6");
        }} value={6}>6</Button>
      </div>
      <div>
        <Button onClick={() => {
          handleMultipleEntries("7");
        }} value={7}>7</Button>
        <Button onClick={() => {
          handleMultipleEntries("8");
        }} value={8}>8</Button>
        <Button onClick={() => {
          handleMultipleEntries("9");
        }} value={9}>9</Button>
      </div>
      <div>
        <Button onClick={() => {
          handleMultipleEntries("0");
        }} value={0}>0</Button>
      </div>

    </div >
  );
}

export default App;
