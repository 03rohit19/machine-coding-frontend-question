import { useEffect, useState } from "react";

const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const hoursInString = String(hours).padStart(2, "0");
  const minutesInString = String(minutes).padStart(2, "0");
  const secondsInString = String(seconds).padStart(2, "0");
  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};

const StopWatch = () => {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("stopWatchState"));
    if (savedState) {
      setRunning(savedState.running);
      setElapsedTime(savedState.elapsedTime);
      if (savedState.running) {
        setStartTime(Date.now() - savedState.elapsedTime * 1000); // elapsedTime in seconds
      }
    }
  }, []);

  // Save state to localStorage whenever it's updated
  useEffect(() => {
    const stateToSave = {
      running: running,
      elapsedTime: elapsedTime,
      startTime: running ? Date.now() - startTime : 0,
    };
    localStorage.setItem("stopWatchState", JSON.stringify(stateToSave));
  }, [running, elapsedTime, startTime]);

  // Update the elapsed time every second if the stopwatch is running
  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsed) => prevElapsed + 1);
      }, 1000);
    } else if (!running && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => {
    if (!running) {
      setStartTime(Date.now());
      setRunning(true);
    }
  };

  const handlePause = () => {
    if (running) {
      setRunning(false);
    }
  };

  const handleReset = () => {
    setRunning(false);
    setElapsedTime(0);
    localStorage.removeItem("stopWatchState");
  };

  return (
    <div className="flex flex-col items-end justify-start border w-auto min-w-[200px] text-black p-4 absolute top-0 right-0">
      <div className="text-6xl font-mono mb-4">{formatTime(elapsedTime)}</div>
      <div className="space-x-4">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
