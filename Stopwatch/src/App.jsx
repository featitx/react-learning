import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  let [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <>
      <div className="max-w flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-semibold pb-2">STOPWATCH</h1>
        <div className="text-xl font-semibold pb-2 ">
          <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)} :</span>
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)} :</span>
          <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className=" w-1/2 flex flex-row justify-evenly">
          {!running ? (
            <button
              onClick={() => {
                setRunning(true);
              }}
              className="border rounded-lg py-1 px-2.5"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setRunning(false)}
              className="border rounded-lg py-1 px-2.5"
            >
              Stop
            </button>
          )}
          <button
            onClick={() => setTime(0)}
            className="border rounded-lg py-1 px-2.5"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
