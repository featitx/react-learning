# React Timer App

This is a simple React application that implements a timer. The timer displays elapsed time in a human-readable format and provides buttons to control its behavior.

## Components

### 1. App Component

The main component that represents the entire application.

#### State Variables

- `time`: Represents the elapsed time in milliseconds.
- `running`: Indicates whether the timer is currently running or not.

```javascript 
let [time, setTime] = useState(0);
const [running, setRunning] = useState(false);
```

#### useEffect Hook
The useEffect hook is used to perform side effects in the functional component. It contains the logic to handle the timer using setInterval and runs whenever the running state changes.

```javascript

useEffect(() => {
  let intervalId;

  if (running) {
    // Start the timer using setInterval
    intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  } else if (!running) {
    // Stop the timer by clearing the interval
    clearInterval(intervalId);
  }

  // Cleanup function to clear the interval when the component is unmounted or when the dependency changes
  return () => {
    clearInterval(intervalId);
  };
}, [running]);

```


#### Timer Display
Renders the elapsed time in a human-readable format.

```javascript 
<div>
  <span>{('0' + Math.floor(time / 60000) % 60).slice(-2)} : </span>
  <span>{('0' + Math.floor(time / 1000) % 60).slice(-2)} : </span>
  <span>{('0' + Math.floor(time / 10) % 100).slice(-2)}</span>
</div>

```

#### Control Buttons
Three buttons to control the timer: Start, Stop, and Reset.

```javascript 
<div>
  <button onClick={() => setRunning(true)}>Start</button>
  <button onClick={() => setRunning(false)}>Stop</button>
  <button onClick={() => setTime(0)}>Reset</button>
</div>
```