import React from "react";

function App() {
  const [minutes, setMinutes] = React.useState(0);
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => setMinutes(0);
  return (
    <div>
      <h1>Time Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="hours">hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled
        />
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
